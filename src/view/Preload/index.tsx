import React, { ReactNode } from "react";
import { AsyncStorage, Platform, Image } from "react-native";
import { IAplicationState } from "../../redux/reduser";
import { getUserInfo } from "../../redux/action/userActions";
import { friendsActions } from "../../redux/action/freinds";
import { getbalance } from "../../redux/action";
import { connect } from "react-redux";
import { IAuth, IPush } from "../../redux/types";
import { IUser } from "../../helpers/types";
import { IBalance } from "../../helpers/types/IBalancy";
import { AppLoading } from "expo";
import { authAction } from "../../redux/action";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import Constants from "expo-constants";
import { pushAction } from "../../redux/action/pushActions";
import PreventAwake from "../../component/PreventAwake";
import { Asset } from "expo-asset";
import images from "../../helpers/images";

interface IState {
  isLoad: boolean;
  _notificationSubscription: any;
  notificationToken: string;
  notifications: Array<any>;
  notificationTokenSent: boolean;
  msInDay: number;
  intervalFrequency: number;
}
interface IStateProps {
  auth: IAuth.Reduser;
  user: IUser;
  balance: IBalance;
  friends: any;
  push: IPush.Reduser;
}

interface IDispatchProps {
  setToken: (token: string) => void;
  refreshAuthToken: () => string;
  setNotificationToken: (token: string) => void;
  sendNotificationToken: (token: string) => void;
  getProfile: () => any;
  getUser: () => void;
  getFriends: () => void;
  getBalance: (uuid: string) => void;
  setData: (data: any) => void;
}
interface IProps extends IStateProps, IDispatchProps {
  children: ReactNode;
}

class Preload extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);

    this.state = {
      isLoad: false,
      _notificationSubscription: null,
      notificationToken: "",
      notificationTokenSent: false,
      notifications: [],
      msInDay: 86400000,
      intervalFrequency: 600000, //10 min
    };
  }

  private _mounted: boolean = false;
  private refreshTimer: any = null;

  componentDidMount() {
    this._mounted = true;
  }

  componentWillUnmount() {
    this._mounted = false;

    if (this.refreshTimer) {
      clearInterval(this.refreshTimer);
    }
  }

  componentDidUpdate() {
    const { notificationToken, notificationTokenSent } = this.state;
    const { token, tokenExpireTime } = this.props.auth;

    if (!!notificationToken && !!token && !notificationTokenSent) {
      this.setState({ notificationTokenSent: true });
      this.props.sendNotificationToken(notificationToken);

      // setTimeout(async ()=>{
      //   const message = {
      //     to: notificationToken,
      //     sound: 'default',
      //     title: 'Test push',
      //     body: 'And here is the body!',
      //     data: { data: 'goes here', type: 'type' },
      //     _displayInForeground: true,
      //   };
      //   const response = await fetch('https://exp.host/--/api/v2/push/send', {
      //     method: 'POST',
      //     headers: {
      //       Accept: 'application/json',
      //       'Accept-encoding': 'gzip, deflate',
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify(message),
      //   });
      // }, 5000)
    }

    if (!!token && !!tokenExpireTime && !this.refreshTimer) {
      this.initRefreshTimer();
    }

    if (!token && !tokenExpireTime && !!this.refreshTimer) {
      clearInterval(this.refreshTimer);
    }
  }

  initRefreshTimer() {
    console.log("token refresh timer inited");
    const { intervalFrequency } = this.state;
    const { tokenExpireTime } = this.props.auth;
    this.refreshTimer = setInterval(() => {
      if (this._mounted && !this.checkTokenRefresh(tokenExpireTime)) {
        this.props.refreshAuthToken();
      }
    }, intervalFrequency);
  }

  chechTokenExpired(dateExpire) {
    const now = new Date().getTime();
    return dateExpire > now;
  }

  checkTokenRefresh(dateExpire) {
    const now = new Date().getTime();
    const { msInDay } = this.state;
    return dateExpire > now + msInDay;
  }

  _cacheImages = (images: { [key: string]: any }): any => {
    return Object.keys(images).map((key) => {
      const image = images[key];
      if (typeof image === "string") {
        return Image.prefetch(image);
      } else {
        return Asset.fromModule(image).downloadAsync();
      }
    });
  };

  _cacheResourcesAsync = async (): Promise<any> => {
    const imageAssets = this._cacheImages(images);

    // const fontAssets = cacheFonts([FontAwesome.font]);

    // await Promise.all([...imageAssets, ...fontAssets]);
    await Promise.all([...imageAssets]);
  };

  async _onFinish() {
    const { auth } = this.props;
    let token = await AsyncStorage.getItem("userToken");
    let tokenExpire = await AsyncStorage.getItem("userTokenExpireDate");

    if (!!tokenExpire && !!token) {
      if (!this.chechTokenExpired(tokenExpire)) {
        console.log("token expire");
        token = tokenExpire = null;
      } else if (!this.checkTokenRefresh(tokenExpire)) {
        console.log("token refresh");
        token = await this.props.refreshAuthToken();
      }
    }

    if (!token || !tokenExpire) {
      console.log("no token");
      await AsyncStorage.removeItem("userToken");
      await AsyncStorage.removeItem("userTokenExpireDate");
    }

    if (!!token) {
      if (!auth || !auth.token) {
        await this.props.setToken(token);
      }
      this.props.getProfile();
      await this.props.getFriends();

      if (!this.refreshTimer) {
        this.initRefreshTimer();
      }
    }

    this._registerForPushNotificationsAsync();

    this.setState({
      isLoad: true,
      _notificationSubscription: Notifications.addNotificationReceivedListener(
        this._handleNotification
      ),
    });
  }

  // _registerForPushNotificationsAsync = async () => {
  //   if (Constants.isDevice) {
  //     const { status: existingStatus } = await Permissions.getAsync(
  //       Permissions.NOTIFICATIONS
  //     );

  //     let finalStatus = existingStatus;

  //     if (existingStatus !== "granted") {
  //       const { status } = await Permissions.askAsync(
  //         Permissions.NOTIFICATIONS
  //       );
  //       finalStatus = status;
  //     }

  //     if (finalStatus !== "granted") {
  //       console.warn("Failed to get push token for push notification!");
  //       return;
  //     }

  //     const token = await Notifications.getExpoPushTokenAsync();
  //     this.setState({ notificationToken: token });
  //     this.props.setNotificationToken(token);
  //   } else {
  //     console.warn("Must use physical device for Push Notifications");
  //   }

  //   if (Platform.OS === "android") {
  //     Notifications.setNotificationChannelAsync("default", {
  //       name: "default",
  //       sound: "default",
  //       vibrationPattern: [0, 250, 250, 250],
  //       importance:
  //     });
  //   }
  // };

  _registerForPushNotificationsAsync = async () => {
    let token;
    if (Constants.isDevice) {
      const { status: existingStatus } = await Permissions.getAsync(
        Permissions.NOTIFICATIONS
      );
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Permissions.askAsync(
          Permissions.NOTIFICATIONS
        );
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
    } else {
      alert("Must use physical device for Push Notifications");
    }

    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }

    return token;
  };

  _handleNotification = (notifications) => {
    console.log(notifications);
    this.setState({ notifications });
  };

  render() {
    let { isLoad } = this.state;
    let { children } = this.props;
    return !isLoad ? (
      <AppLoading
        startAsync={this._cacheResourcesAsync}
        onFinish={() => {
          this._onFinish();
        }}
        onError={console.warn}
      />
    ) : (
      <PreventAwake>{children}</PreventAwake>
    );
  }
}

const mapStateToProps = ({
  auth,
  user,
  balance,
  friends,
  push,
}: IAplicationState): IStateProps => ({
  auth,
  balance,
  friends,
  user,
  push,
});

const mapDispatchToProps = (dispatch): IDispatchProps => ({
  getProfile: () => dispatch(authAction.getUserData()),
  setToken: (token) => dispatch(authAction.setToken(token)),
  refreshAuthToken: () => dispatch(authAction.refreshToken()),
  setNotificationToken: (token) => dispatch(pushAction.setToken(token)),
  sendNotificationToken: (token) => dispatch(pushAction.sendToken(token)),
  setData: (action: any) => dispatch(action),
  getUser: () => dispatch(getUserInfo()),
  getFriends: () => friendsActions.get(dispatch),
  getBalance: (uuid) => dispatch(getbalance(uuid)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Preload);
