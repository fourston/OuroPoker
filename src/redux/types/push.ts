export namespace IPush {
  export interface Reduser {
    notificationToken: string;
  }
  export type ActionType = 'PUSH_TOKEN';
  export interface Action {
    type: ActionType;
    payload?: string;
  }
}
