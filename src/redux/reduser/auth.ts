import { IAuth } from '../types';
import {AsyncStorage} from 'react-native';
import { Buffer } from 'buffer'

const initialState: IAuth.Reduser = {
  state: false,
  phone: '',
  loading: false,
  error: false,
  errorText: '',
  token: '',
  tokenExpireTime: 0
};

const calcExpireDate = (token) => {
  const tokenPayload = token.split('.')[1];
  let buff = Buffer.from(tokenPayload, 'base64');
  let text = buff.toString();
  const exp = JSON.parse(text).exp * 1000;
  return exp;
}

export const authReducer = (state = initialState, action: IAuth.Action): IAuth.Reduser => {
  switch (action.type) {
    case 'AUTH_LOGOUT':
      return { ...state, state: false, loading: false, token: '', tokenExpireTime: 0, error: false, errorText: '', phone: '' };
    case 'AUTH_CODE':
      return { ...state, loading: false, phone: action.payload };
    case 'AUTH_SINGIN':
        return (() => {
          const expireTime = calcExpireDate(action.payload);
          AsyncStorage.setItem('userTokenExpireDate', String(expireTime));
          
          return {
            ...state,
            state: true,
            loading: false,
            token: action.payload,
            tokenExpireTime: expireTime,
            error: false, errorText: '', phone: '' 
          }
        })();
    case 'Auth_LOADING':
      return { ...state, loading: action.payload, error: false };
    case 'LOGIN_FAILED':
      return { ...state, error: true, loading: false, errorText: 'Неверный логин или пароль', phone: '' };
    case 'PHONE_FAILED':
      return { ...state, error: true, loading: false, errorText: 'Неверный номер телефона', phone: ''  };
    case 'CODE_FAILED':
      return { ...state, error: true, loading: false, errorText: 'Неверный код'  };
    case 'REFRESH_FAILED':
      return { ...state, error: true, loading: false, errorText: 'Ошибка при обновлении accessToken'  };
    default:
      return state;
  }
};
