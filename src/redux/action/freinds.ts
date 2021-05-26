import api from '../../api';
import { IUserFrend } from '../../helpers/types';

const getSucces = (data: IUserFrend[]) => {
  return {
    type: 'GET_FRIEND',
    payload: data,
  };
};

export const friendsActions = {
  get:  async (dispatch) => {
    api('profile', 'friends')
      .get()
      .then((e) => {
        dispatch(getSucces(e.data));
      })
      .catch((e) => console.log(e, 'catcfriendsActions'));
  },
};
