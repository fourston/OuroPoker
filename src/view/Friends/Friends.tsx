import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Tab, TabsContent } from '../../component';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';
import TabFriends from './TabFriends';
import { Invitations } from './Invitations';
import SearchFriends from './SearchFriends';
import Wrapper from '../../component/Wrapper';

interface IProps extends NavigationInjectedProps {}
type IFriendsType = 'INVITATIONS' | 'FRIENDS' | 'SEARCH';
interface IState {
  activeTab: IFriendsType;
}
class Friends extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      activeTab: this.props.navigation.getParam('tab', 'FRIENDS'),
    };
  }
  private onTabChange = (activeTab: IFriendsType) => () => this.setState({ activeTab });

  render() {
    let { navigation } = this.props;
    let { activeTab } = this.state;
    return (
      <Wrapper>
        <View style={styles.content}>
          <View style={styles.flex}>
            <Tab active={activeTab === 'FRIENDS'} title='Друзья' onPress={this.onTabChange('FRIENDS')} />
            <Tab active={activeTab === 'SEARCH'} title='Найти друзей' onPress={this.onTabChange('SEARCH')} />
            <Tab active={activeTab === 'INVITATIONS'} title='Приглашения' onPress={this.onTabChange('INVITATIONS')} />
          </View>
          <TabsContent transparent>{activeTab === 'FRIENDS' ? <TabFriends /> : activeTab === 'INVITATIONS' ? <Invitations /> : <SearchFriends />}</TabsContent>
        </View>
      </Wrapper>
    );
  }
}

export default withNavigation(Friends);

const styles = StyleSheet.create({
  gradiend: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
  },
  content: {
    margin: 20,
    flex: 1,
    zIndex: 2,
  },
});
