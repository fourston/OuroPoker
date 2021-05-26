import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, ScrollView, Dimensions } from 'react-native';
import { Tab, TabsContent } from '../../component';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';
import TabMessages from './TabMessages';
import { connect } from 'react-redux';
import { IAplicationState } from '../../redux/reduser';
import { IChatMain, IUser } from '../../helpers/types';
import { IAuth } from '../../redux/types';
import Wrapper from '../../component/Wrapper';

type IMessagesType = 'NEWS' | 'MESSAGES' | 'HELP';
interface IStateProps {
  user: IUser;
  chatMain: IChatMain[];
  auth: IAuth.Reduser;
}
interface IProps extends NavigationInjectedProps, IStateProps {}
interface IState {
  activeTab: IMessagesType;
}

class Messages extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      activeTab: !!props.navigation && !!props.navigation.getParam('tab') ? props.navigation.getParam('tab') : 'MESSAGES',
    };
  }

  componentDidUpdate(prevProps){
    const { navigation } = this.props;
    const { activeTab } = this.state;

    if (!!navigation && !!prevProps.navigation && navigation.getParam('tab') !== prevProps.navigation.getParam('tab')){
      this.setState({activeTab: navigation.getParam('tab')});
    }
  }

  private onTabChange = (activeTab: IMessagesType) => () => this.setState({ activeTab });
  private isAuth(){
    return !!this.props.auth && !!this.props.auth.token;
  }

  render() {
    let { navigation } = this.props;
    let { activeTab } = this.state;
    return (
      <Wrapper>
        <View style={styles.content}>
          <View style={styles.flex}>
            {this.isAuth() && <Tab active={activeTab === 'MESSAGES'} title='Сообщения' onPress={this.onTabChange('MESSAGES')} />}
          </View>
          <TabsContent transparent>
              <TabMessages navigations={navigation} />
          </TabsContent>
        </View>
      </Wrapper>
    );
  }
}

const mapStateToProps = ({ chatMain, user, auth }: IAplicationState): IStateProps => ({
  chatMain,
  user,
  auth
});

export default withNavigation(connect(mapStateToProps)(Messages));
const styles = StyleSheet.create({
  flex: {
    display: 'flex',
    flexDirection: 'row',
    maxHeight: 400
  },
  content: {
    margin: 20,
    flex: 1,
    height: Dimensions.get('window').height - 138,
    maxHeight: Dimensions.get('window').height - 138,
    // backgroundColor: 'red',
    zIndex: 2,
  },
});
