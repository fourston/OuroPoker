import { IChatMain } from '../../helpers/types';

const initialState: IChatMain[] = [];

export const chatReduser = (state = initialState, action: any) => {
  switch (action.type) {
    case 'GET_CHAT_MAIN':
      return action.payload;
    default:
      return state;
  }
};
