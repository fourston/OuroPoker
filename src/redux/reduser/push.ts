import { IPush } from '../types';

const initialState: IPush.Reduser = {
  notificationToken: ''
};

export const pushReducer = (state = initialState, action: IPush.Action): IPush.Reduser => {
  switch (action.type) {
    case 'PUSH_TOKEN':
      return { ...state, notificationToken: action.payload };
    default:
      return state;
  }
};
