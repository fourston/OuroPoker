import { IChatsArrayItem } from '../../helpers/types';

const initialState: IChatsArrayItem[] = [];

export const chatsReduser = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_CHAT_ITEM':
        console.log(action.payload, 'action.payload.uuid');
      return [...state.filter((item) => item.id !== action.payload.uuid), { id: action.payload.uuid, chat: action.payload.data }];
    default:
      return state;
  }
};
