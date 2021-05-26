export namespace IAuth {
  export interface Reduser {
    loading: boolean;
    state: boolean;
    token: string;
    tokenExpireTime: number;
    error: boolean;
    errorText: string;
    phone: string;
  }
  export type ActionType = 'AUTH_LOGOUT' | 'AUTH_CODE' | 'AUTH_SINGIN' | 'AUTH_SINGUP' | 'Auth_LOADING' | 'LOGIN_FAILED' | 'PHONE_FAILED' | 'CODE_FAILED' | 'REFRESH_FAILED';
  export interface Action {
    type: ActionType;
    payload?: any;
  }
}
