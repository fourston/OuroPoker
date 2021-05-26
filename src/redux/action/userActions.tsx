import { IGetUser } from '../types';
import { IUser, IUserFrend } from '../../helpers/types';
import { AsyncStorage } from 'react-native';
import { AxiosResponse } from 'axios';
import api, {avatar} from '../../api';

const getUserSuccess = (data: IUser): IGetUser.Action => ({
  type: 'ADD_USER_INFO',
  payload: data,
});
const getImageSucces = (image: string) => ({
  type: 'ADD_USER_IMAGE',
  payload: image,
});

const loading = (): IGetUser.Action => ({
  type: 'USER_LOADING',
});
export const deleteUser = (): IGetUser.Action => ({
  type: 'DELETE_USER',
});
export const getUserInfo = () => async (dispatch) => {
  api('profile', 'profile')
    .get()
    .then((response: AxiosResponse<IUserFrend>) => {

      let { bestWins, countGames, email, nikName, uuid, blockingSendMessage, blockingToFriend } = response.data;

      dispatch(
        getUserSuccess({
          bestWins,
          countGames,
          email,
          uuid,
          blockingSendMessage,
          blockingToFriend,
          name: nikName,
          roles: ['USER'],
          image: avatar(uuid),
        }),
      );
      return uuid;
    })
    .then((uuid) => {
      api('crypto', 'account_balance', uuid, 'OURO')
        .get()
        .then((e) => {
          dispatch({
            type: 'GET_OURO',
            payload: e.data.balance,
          });
        })
        .catch((e) => {
          console.log(e, 'catchaswqwd');
        });
    })
    .catch((e) => {
      // console.log(e, 'redian');
    });
  
};
