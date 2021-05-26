import { AsyncStorage } from 'react-native';
import { IAuth, IGetUser } from '../types';
import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';
import { deleteUser, getUserInfo } from './userActions';
import { IUser, IUserFrend } from '../../helpers/types';
// import pushDebug from '../../service/pushDebug';
import api, {urls} from '../../api';

const singUp = (): IAuth.Action => ({
  type: 'AUTH_SINGUP',
});
const setToken = (token): IAuth.Action => ({
  type: 'AUTH_SINGIN',
  payload: token,
});
const awaitCode = (value): IAuth.Action => ({
  type: 'AUTH_CODE',
  payload: value
});
const logOut = (): IAuth.Action => ({
  type: 'AUTH_LOGOUT',
});
const loading = (value = true): IAuth.Action => ({
  type: 'Auth_LOADING',
  payload: value
});

const getUserSuccess = (data: IUser): IGetUser.Action => {
  return {
    type: 'ADD_USER_INFO',
    payload: data,
  };
};
const singInFailed = (type): IAuth.Action => {
  switch(type){
    case 'LOGIN':
      return {
        type: 'LOGIN_FAILED',
      };

    case 'PHONE':
      return {
        type: 'PHONE_FAILED',
      };

    case 'CODE':
      return {
        type: 'CODE_FAILED',
      };

    case 'REFRESH':
      return {
        type: 'REFRESH_FAILED',
      };
  }
};

export const authAction = {
  logOut: () => (dispatch: Dispatch<IAuth.Action | IGetUser.Action>) => {
    _logOut(dispatch);
  },
  singIn: (type: string, value: string | object) => (dispatch: Dispatch<any>) => {
    dispatch(loading());

    if (type === 'PHONE'){
      const data = {phoneNumber: value};
      api('auth', 'login_phone')
        .data(data)
        .post()
        .then(() => {
          dispatch(awaitCode(value));
        })
        .catch((e) => {
          dispatch(singInFailed(type));
        });
    }

    if (type === 'CODE'){
      api('auth', 'login_phone_code')
        .data(value)
        .post()
        .then((response) => {
          _tryAuth(dispatch, response, type);
        })
        .catch((e) => {
          dispatch(singInFailed(type));
        });
    }

    if (type === 'LOGIN'){
      api('auth', 'login')
        .data(value)
        .post()
        .then((response) => {
          _tryAuth(dispatch, response, type);
        })
        .catch((e) => {
          dispatch(singInFailed(type));
        });
      }
  },
  singUp: (name: string, email: string, phoneNumber: string, password: string) => (dispatch) => {
    // dispatch(loading());
    let data = { name, email, password, phoneNumber };
    api('auth', 'register')
      .data(data)
      .post()
      .then((response) => {
        if (response && response.data) {
          dispatch(singUp());
        }
      })
      .catch((e) => {
        console.log(e)
      })
  },
  getUserData: () => (dispatch: Dispatch<any>) => {
    dispatch(loading());
    _getUserData(dispatch);
  },
  setToken: (token: string) => (dispatch: Dispatch<any>) => {
    dispatch(loading());
    dispatch(setToken(token));
  },
  refreshToken: () => (dispatch: Dispatch<any>) => {
    dispatch(loading());
    return (async () => {
      return await api('auth', 'refreshToken')
        .post()
        .then(response => {
          if (response && response.data && response.data.accessToken) {
            const token = response.data.accessToken;
            AsyncStorage.setItem('userToken', token)
              .then(() => {
                dispatch(setToken(token));
              });

            return token;
          } else {
            dispatch(_logOut(dispatch));
            return '';
          }
        })
        .catch(e => {
          console.warn(e)
        });
    })();
  }
};

const _logOut = (dispatch: Dispatch<IAuth.Action | IGetUser.Action>) => {
  AsyncStorage.removeItem('userToken', (e)=>{console.log(e)})
    .then(() => {
      dispatch(logOut());
      dispatch(deleteUser());
    })
    .catch(() => dispatch(logOut()));
};

const _tryAuth = async (dispatch: Dispatch<any>, response: any, type: string) => {
  if (response && response.data && response.data.accessToken) {
    const token = response.data.accessToken;
    try {
      await AsyncStorage.setItem('userToken', token);
      dispatch(setToken(token));
      _getUserData(dispatch);
    } catch(e){
      console.warn('token store error')
    }
  } else {
    dispatch(singInFailed(type));
  }
}

const _getUserData = (dispatch: Dispatch<any>) => {
  dispatch(loading());
  api('profile', 'profile')
    .get()
    // .then((res: AxiosResponse<IUserFrend>) => {
    //   return res.data;
    // })
    .then(response => {
      let { bestWins, countGames, email, nikName, uuid, blockingSendMessage, blockingToFriend } = response.data;

      api('crypto', 'account_balance', uuid, 'OURO')
        .get()
        .then((e) => {
          setTimeout(() => {
            dispatch({
              type: 'GET_OURO',
              payload: e.data.balance,
            });
          });

          dispatch(
            getUserSuccess({
              bestWins,
              blockingSendMessage,
              blockingToFriend,
              countGames,
              email,
              uuid,
              name: nikName,
              roles: ['USER'],
              image: urls('profile', 'account_avatar', uuid)
            })
          );

          dispatch(loading(false));
        })
        .catch((e) => {
          console.log(e, 'catchaswqwd');
        });
    })
    .catch(e => {
      AsyncStorage.getItem('userToken')
        .then(token => {
          if (e.response.status == 401 && !!token){
            _logOut(dispatch);
          }
        });
    });
}
