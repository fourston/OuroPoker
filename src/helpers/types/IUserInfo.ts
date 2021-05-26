export interface IUser {
  email: string;
  name: string;
  roles: ['USER' | 'ADMIN'];
  uuid: string;
  bestWins: Array<IBestWins>;
  countGames: number;
  image: string;
  blockingSendMessage: boolean;
  blockingToFriend: boolean;
}

export type ICurensy = 'OURO' | 'PZM';
export interface IBestWins {
  currency: ICurensy;
  win: number;
}
export interface IUserFrend {
  bestWins: Array<IBestWins>;
  countGames: number;
  email: string;
  nikName: string;
  isFriend: boolean;
  uuid: string;
  blockingSendMessage: boolean;
  blockingToFriend: boolean;
}
export type complainType = 'AVATAR' | 'STATUS' | 'CHIP_TRADING' | 'CHAT_BEHAVIOR';
