import { IUser } from '../../helpers/types';

export namespace IGetUser {
  export type ActionType = 'ADD_USER_INFO' | 'USER_LOADING' | 'DELETE_USER' | 'CHANGE_IMAGE';
  interface IGetUserActionLoading {
    type: 'USER_LOADING';
  }
  interface IGetUserAction {
    type: 'ADD_USER_INFO';
    payload: IUser;
  }
  interface IGetUserActionDelete {
    type: 'DELETE_USER';
  }
  interface IGetUserActionImage {
    type: 'CHANGE_IMAGE';
  }

  export type Action = IGetUserActionLoading | IGetUserAction | IGetUserActionDelete | IGetUserActionImage;
}
