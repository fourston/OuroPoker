import React, { FC } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {
  MainScreen,
  SignUp,
  MyProfile,
  Lobby,
  Game,
  AnotherProfile,
  Settings,
  Bills,
  Friends,
  Messages,
  PokerTable,
  Help,
  News
} from '../view';

interface IProps {
  // auth: boolean;
}
const AppContainer: FC<IProps> = () => {
  let AppStack = createSwitchNavigator({
    // IconsView,
    MainScreen: {
      screen: MainScreen,
    },
    Game,
    SignUp,
    // Lobby,
    // SignUp,
    Messages,
    Friends,
    Bills,
    Settings,
    AnotherProfile,
    MyProfile,
    Help,
    News
  });
  let AppNavigator = createAppContainer(AppStack);
  return <AppNavigator />;
};
// const AppContainer = (props: IPorps) => createAppContainer(AppNavigator(props.auth));

export default AppContainer;
