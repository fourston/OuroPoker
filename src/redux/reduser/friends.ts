import { IUserFrend } from '../../helpers/types';

const initialState: IUserFrend[] = [];

export const friendsReduser = (state = initialState, action: any) => {
  switch (action.type) {
    case 'GET_FRIEND':
      return action.payload;
    default:
      return state;
  }
};
