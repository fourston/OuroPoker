import api from '../../api';
import { IChatMain, IChats } from '../../helpers/types';

const getChatMAin = (chats: IChatMain[]) => ({
  type: 'GET_CHAT_MAIN',
  payload: chats,
});
const getChatItem = (uuid: string, data: IChats[]) => ({
  type: 'ADD_CHAT_ITEM',
  payload: {
    uuid,
    data,
  },
});
export const getChat = async (dispatch) => {
  api('profile', 'chats')
    .get()
    .then((e) => {
      dispatch(getChatMAin(e.data));
    })
    .catch((e) => {
      console.log(e, 'catchaswqwd');
      console.log('redians tip');
    });
};

export const getChatUuid = (uuid: string) => async (dispatch) => {
  api('profile', 'chats', `${uuid}?offset=0`)
    .get()
    .then((e) => {
      dispatch(getChatItem(uuid, e.data));
    })
    .catch((e) => {
      console.log(e, 'catchaswqwd');
      console.log('redians tip');
    });
};
