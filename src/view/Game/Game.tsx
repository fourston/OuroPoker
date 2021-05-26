import React, { Fragment } from 'react';
import Lobby from '../Lobby/Lobby';
import PokerTable from '../PokerTable/PokerTable';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';
import { ILobbyTables, IGameType, IHistory, IHistoryGetConnect } from '../../helpers/types';
import { Stomp, CompatClient } from '@stomp/stompjs';
import { IAplicationState } from '../../redux/reduser';
import { IAuth } from '../../redux/types';
import { connect } from 'react-redux';
import SockJS from 'sockjs-client';
import { AsyncStorage, View, ActivityIndicator } from 'react-native';
import { commands } from '../../helpers/actions';
import { ICreateGameBlinds } from '../../helpers/types/IBalancy';
import playSound from '../../sound';
import { tableData } from '../PokerTable/PokerTable';
import {urls} from '../../api';
import Wrapper from '../../component/Wrapper';

interface IStateProps {
  auth: IAuth.Reduser;
}
interface IState {
  activeScreen: 'LOBBY' | 'GAMETABLE' | 'LOADING';
  data: ILobbyTables[];
  game?: IGameType;
  blinds: ICreateGameBlinds[];
  history: IHistory[];
}
interface IProps extends NavigationInjectedProps, IStateProps {}
class Game extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      activeScreen: !!this.stompClient ? 'LOBBY' : 'LOADING',
      data: [],
      game: null,
      blinds: [],
      history: [],
    };
  }

  componentDidMount(){
   this.getConnect();
  }

  componentWillUnmount() {
    if (this.stompClient) {
      this.stompClient.disconnect();
    }
  }

  stompClient: CompatClient | null = null;

  getConnect = async () => {
    let toPLay: boolean = this.props.navigation.getParam('toPlay', false);
    let token = await AsyncStorage.getItem('userToken');
    if (token) {
      this.stompClient = Stomp.over(() => new SockJS(urls('stomp', 'broker')));

      this.stompClient.connect({ Authorization: 'Bearer ' + token }, (frame) => {
        if (this.state.activeScreen === 'LOADING' && !toPLay) {
          this.setState({ activeScreen: 'LOBBY' });
        }
        
        this.stompClient.subscribe('/user/topic/out', (greeting) => {
          let data = JSON.parse(greeting.body);
          console.log(data);

          if (!!data.tables) {
            this.setState({ data: data.tables });
          } else if (!!data.tableId) {
            if (data.event.event === 'END_GAME' && this.state.game && this.state.game.event.event !== 'END_GAME') {
              playSound('game_over');
            }
            this.setState({ activeScreen: 'GAMETABLE', game: data });
          } else if (data.message === 'Blinds') {
            this.setState({ blinds: data.blinds });
          } else if (data['@type'] === 'HISTORY_GAME') {
            let historyData: IHistoryGetConnect = data;
            let newHistory: IHistory = {
              ...historyData.winners[0],
              time: historyData.time,
            };
            let a = this.state.history;
            a.push(newHistory);
            this.setState({ history: a });
          } else if (data.message === 'Table not found') {
            // console.log('redians');
            this.getTables();
            this.setState({ activeScreen: 'LOBBY' });
          }
        });

        if (toPLay) {
          this.getToPlay();
        } else {
          this.sendComand(commands.getState);
          this.getTables();
        }
      });
    }
  };
  getToPlay = () => {
    this.stompClient.send('/app/in', {}, '{"command": "JOIN_TO_SMALLER_TABLE"}');
  };
  sendComand = (command: string) => {
    if (this.stompClient) {
      console.log(command)
      this.stompClient.send('/app/in', {}, command);
    }
  };
  createTable = () => {
    if (this.stompClient) {
      this.stompClient.send('/app/in', {}, '{"command": "CREATE_GAME"}');
      this.getTables();
    }
  };
  getTables = () => {
    if (this.stompClient) {
      console.log('{"command": "GET_LOBBY"}')
      this.stompClient.send('/app/in', {}, '{"command": "GET_LOBBY"}');
    }
  };
  leaveTable = () => {
    this.sendComand(commands.leaveGame(this.state.game.tableId));
    this.setState({ activeScreen: 'LOBBY' });
    this.getTables();
  };
  stendUp = () => {
    this.sendComand(commands.stendUp(this.state.game.tableId));
  };
  render() {
    let { activeScreen, data, game, blinds } = this.state;
    let { navigation } = this.props;

    if (activeScreen === 'LOBBY') {
      return (
        <Lobby 
          blinds={blinds}
          sendCommand={this.sendComand}
          data={data}
          createTable={this.createTable}
          onCancel={() => navigation.navigate('MainScreen')}
        />
      );
    } else if (activeScreen === 'GAMETABLE') {
      return (
        <PokerTable
          sendCommand={this.sendComand}
          history={this.state.history}
          game={game}
          leaveTable={this.leaveTable}
          stendUp={this.stendUp}
        />
      );
    } else {
      return (
        <Wrapper header={false}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator />
          </View>
        </Wrapper>
      );
    }
  }
}

const mapStateToProps = ({ auth }: IAplicationState): IStateProps => ({
  auth,
});

// const mapDispatchToProps = (dispatch) => ({});

export default withNavigation(connect(mapStateToProps, null)(Game));
