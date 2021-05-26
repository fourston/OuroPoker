import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import { Buttons, FriendDelete, FriendDeleteSuccess, Complain, SuccesСomplain } from '../../component';
import { NavigationInjectedProps } from 'react-navigation';
import {getImage} from '../../helpers/resource';
import { IAplicationState } from '../../redux/reduser';
import { IUserFrend, complainType } from '../../helpers/types';
import { connect } from 'react-redux';
import { friendsActions } from '../../redux/action/freinds';
import api, {avatar} from '../../api';
import Wrapper from '../../component/Wrapper';

interface IStateProps {
  friends: IUserFrend[];
}
interface IDispatchProps {
  getFriends: () => void;
}

interface IProps extends NavigationInjectedProps<{ uuid: string, backRoute?: string }>, IStateProps, IUserFrend {}
interface IState {
  isDeleteModal: boolean;
  isDelete: boolean;
  isComplain: boolean;
  isComplainSucces: boolean;
}
class AnotherProfile extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isDelete: false,
      isDeleteModal: false,
      isComplain: false,
      isComplainSucces: false,
    };
  }
  createChat = async () => {
    let friend = this.getFreind();
    const { navigation } = this.props;
    api('profile', 'create_chats', friend.uuid)
      .post(
      )
      .then((e) => {
        // console.log(e.data);
        navigation.navigate('Messages', { uuid: friend.uuid });
      })
      .catch((e) => {
        navigation.navigate('Messages', { uuid: friend.uuid });
        console.log(e, 'error');
      });
  };
  getFreind = () => {
    let uuid = this.props.navigation.getParam('uuid', '');
    let friend = this.props.friends.find((item) => item.uuid === uuid);
    return friend;
  };
  sendFriendDelete = async () => {
    // setDeleteModal(false);
    this.setState({ isDeleteModal: false });

    api('profile', 'delete_friend', this.getFreind().uuid)
      .post()
      .then((e) => {
        if (e.status === 200) {
          this.setState({ isDelete: true });
        }
      })
      .catch((e) => console.log(e, 'error'));
  };
  sendComplain = async (complain: complainType) => {
    let friend = this.getFreind();
    this.setState({ isComplain: false });
    const data = {
      complain: complain,
      text: '',
      uuidСomplainUser: friend.uuid,
    };

    api('profile', 'complain_user')
      .data(data)
      .post()
      .then((e) => {
        // console.log(e.data);

        if (e.status === 200) {
          this.setState({ isComplainSucces: true });
        }
      })
      .catch((e) => console.log(e, 'error'));
  };
  render() {
    let friend = this.getFreind();
    let uriImage = avatar(friend.uuid);
    const backRoute = this.props.navigation.getParam('backRoute', '');

    return (
      <Wrapper>
        <View style={{ paddingHorizontal: 20, paddingTop: 22, paddingBottom: 20 }}>
          <TouchableOpacity
            style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
            onPress={() => this.props.navigation.navigate(backRoute || 'MainScreen')}
          >
            <Image source={getImage('back')} style={{ marginRight: 8 }} />
            <Text style={{ color: '#729FE1', fontSize: 12, lineHeight: 14 }}>Назад</Text>
          </TouchableOpacity>

          <Text style={{ textAlign: 'right', color: '#FFFFFF', fontSize: 12, lineHeight: 14, marginBottom: 6 }}>Начал играть 07.01.2020</Text>
          <View style={{ backgroundColor: 'rgba(62, 102, 161, 0.8)', borderRadius: 8, padding: 20, paddingTop: 20 }}>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <View>
                <Image source={{ uri: uriImage }} style={{ width: 60, height: 60 }} />
              </View>
              <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1, marginLeft: 20 }}>
                <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', marginBottom: 'auto' }}>
                  <Text style={{ color: '#ffffff', fontSize: 14, lineHeight: 17, fontWeight: '600', marginRight: 8 }}>{friend.nikName}</Text>
                  <Text style={{ color: '#729FE1', fontSize: 14, lineHeight: 17, marginRight: 8, maxWidth: 150 }} numberOfLines={1}>
                    ID: {friend.uuid}
                  </Text>
                </View>

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                  <Buttons disabled={friend.blockingSendMessage} text={'Сообщение'} variant='default' style={{ width: 90 }} />
                  <Buttons text={'Передать фишки'} variant='default' disabled style={{}} />
                  <Buttons
                    text={`${friend.isFriend ? 'Удалить из друзей' : 'Добавить в друзья'}`}
                    variant='yellow'
                    style={{}}
                    onPress={() => this.setState({ isDeleteModal: true })}
                  />
                  <Buttons onPress={() => this.setState({ isComplain: true })} text={'Пожаловаться'} variant='orange' style={{}} />
                  <Buttons text={'Заблокировать'} variant='orange' disabled style={{}} />
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              marginHorizontal: 20,
              backgroundColor: 'rgba(22, 64, 128, 0.6)',
              borderBottomRightRadius: 8,
              borderBottomLeftRadius: 8,
              padding: 20,
              paddingTop: 20,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              borderColor: '#3E66A1',
              borderWidth: 1,
            }}
          >
            <View>
              <Text style={{ color: '#FFB443', fontSize: 14, lineHeight: 17, fontWeight: '600', marginBottom: 20 }}>Сыграно игр</Text>
              <Text style={{ color: '#FFFFFF', fontSize: 18, lineHeight: 22 }}>{friend.countGames}</Text>
            </View>
            <View>
              <Text style={{ color: '#FFB443', fontSize: 14, lineHeight: 17, fontWeight: '600', marginBottom: 20 }}>Лучшие выигрыши</Text>
              <View style={{ display: 'flex', flexDirection: 'row' }}>
                <Text style={{ color: '#FFFFFF', fontSize: 18, lineHeight: 22 }}>{friend.bestWins[0].win} </Text>
                <Text style={{ color: '#729FE1', fontSize: 18, lineHeight: 22 }}> {friend.bestWins[0].currency}</Text>
              </View>
            </View>
            <View style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <View style={{ display: 'flex', flexDirection: 'row' }}>
                <Text style={{ color: '#FFFFFF', fontSize: 18, lineHeight: 22 }}> {friend.bestWins[1].win} </Text>
                <Text style={{ color: '#729FE1', fontSize: 18, lineHeight: 22 }}> {friend.bestWins[1].currency}</Text>
              </View>
            </View>
          </View>
        </View>
        <FriendDelete
          onDelete={this.sendFriendDelete}
          open={this.state.isDeleteModal}
          onCancel={() => this.setState({ isDeleteModal: false })}
          friend={friend}
        />
        <FriendDeleteSuccess open={this.state.isDelete} onCancel={() => this.setState({ isDelete: false })} friend={friend} />
        <Complain onSubmit={this.sendComplain} friend={friend} open={this.state.isComplain} onCancel={() => this.setState({ isComplain: false })} />
        <SuccesСomplain open={this.state.isComplainSucces} friend={friend} onCancel={() => this.setState({ isComplainSucces: false })} />
      </Wrapper>
    );
  }
}

const mapStateToProps = ({ friends }: IAplicationState): IStateProps => ({
  friends,
});

const mapDispatchToProps = (dispatch): IDispatchProps => ({
  getFriends: () => friendsActions.get(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AnotherProfile);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00477A',
    position: 'relative',
  },
  text_small: {
    color: '#FFFFFF',
    fontSize: 10,
    lineHeight: 12,
  },
  btn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    elevation: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderColor: '#3E66A1',
    borderWidth: 1,
    borderRadius: 4,
  },
});
