import api from '../../api';
import { IPush } from '../types';
import { Dispatch } from 'redux';

const setNotificationToken = (token): IPush.Action => ({
  type: 'PUSH_TOKEN',
  payload: token,
});

export const pushAction = {
  setToken: (token: string) => (dispatch: Dispatch<any>) => {
    dispatch(setNotificationToken(token));
  },
  sendToken: (token: string) => (dispatch: Dispatch<any>) => {
    api('profile', 'exponentToken')
      .data({token})
      .put()
      .catch(err => {
        console.log('Error storing exponentToken')
      })
  }
};