import { IAuth, IGetUser } from '../types';
import { IUser } from '../../helpers/types';
import {avatar} from '../../api';

const initialState: IUser = {
  email: '',
  name: '',
  roles: ['USER'],
  uuid: '',
  bestWins: [],
  countGames: 0,
  blockingSendMessage: false,
  blockingToFriend: false,
  image: '',
};

export const userReducer = (state = initialState, action: IGetUser.Action): IUser => {
  switch (action.type) {
    case 'USER_LOADING':
      return state;
    case 'ADD_USER_INFO':
      return action.payload;
    case 'CHANGE_IMAGE':
      return { ...state, image: avatar(`${state.uuid}?${new Date().getTime()}`) };
    case 'DELETE_USER':
      return { email: '', name: '', roles: ['USER'], uuid: '', bestWins: [], countGames: 0, image: '', blockingSendMessage: false, blockingToFriend: false };
    default:
      return state;
  }
};
