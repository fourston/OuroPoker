export interface IChatMain {
  chatUuid: string;
  friend: IChatMainFriends;
  titleChat: string;
  unreadCountMessage: number;
}
export interface IChatMainFriends {
  isBlocking: false;
  nikName: string;
  uuid: string;
}
export interface IChats {
  content: string;
  isISend: boolean;
  messageUuid: string;
  receiveUser: IChatReceiveUser;
  sendUser: IChatSendUser;
}
export interface IChatReceiveUser {
  nikName: string;
  read: false;
  time: string;
  uuid: string;
}
export interface IChatSendUser {
  nikName: string;
  time: string;
  uuid: string;
}
export interface IChatsArrayItem {
  id: string;
  chat: IChats[];
}
