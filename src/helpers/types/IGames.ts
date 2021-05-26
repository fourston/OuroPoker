export type IGamesPlayerStatus = 'NOT_MOVED' | 'BET' | 'CALL' | 'FOLD' | 'RAISE' | 'ALL_IN' | 'CHECK' | 'SMALL_BLIND' | 'BIG_BLIND';
export type IGameRound = 'INITIAL' | 'PRE_FLOP' | 'RIVER' | 'FLOP' | 'TURN' | 'SHOWDOWN';
export type IUserGameState = 'NEW' | 'VIEWING' | 'PLAYING' | 'SEATING';
export type ICardsSuit = 'DIAMONDS' | 'HEARTS' | 'CLUBS' | 'SPADES';
export type ICardsRank = 'ACE' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'KING' | 'QUEEN' | 'JACK';
export type IGamePlayerActions = 'FOLD' | 'CHECK' | 'CALL' | 'RAISE' | 'BET';

export interface IGameType {
  tableId: string;
  deskCards?: ICards[];
  deskPot: number;
  round: IGameRound;
  places: IGamePlaces[];
  status: 'NO_REQUIRED_PLAYERS' | 'START';
  event: { event: 'INIT_GAME' | 'CHANGE_ROUND' | 'END_GAME'; message: string };
}

export interface IGamePlaces {
  placeNumber: number;
  isPlayer: boolean;
  player?: IGamesPlayer;
}
export interface IGamesPlayer {
  pot: number;
  balance: number;
  uuid: string;
  name: string;
  status: IGamesPlayerStatus;
  isEnoughBalance?: boolean;
  isDealer: boolean;
  isMovePlayer: boolean;
  state: IUserGameState;
  cards?: ICards[];
  win?: number;
  actions?: IGamerActions[];
  isReward?: boolean;
  previousPot?: number;
}
export interface IGameHand {
  cards: ICards[];
  type: 'HIGH_CARD';
  message: 'High card';
}
export interface ICards {
  rank: ICardsRank;
  suit: ICardsSuit;
}

export type IGamerActions = {
  type: IGamePlayerActions;
  range: IGamerActionsRanges;
};
export type IGamerActionsRanges = {
  call?: number;
  max?: number;
  min?: number;
};

interface IHand {
  isHand: boolean;
  rank: ICardsRank;
  suit: ICardsSuit;
}
export interface IHistoryGetConnect {
  '@type': 'HISTORY_GAME';
  message: '';
  time: string;
  winners: Array<{
    cards: IHand[];
    deskCards: Array<ICards>;
    pot: number;
    name: string;
    uuid: string;
  }>;
}
export type IHistory = {
  cards: IHand[];
  deskCards: Array<ICards>;
  pot: number;
  uuid: string;
  time: string;
  name: string;
};
