export interface IBalance {
  pzm: number | string;
  ouro: number | string;
}

export interface ICreateGameBlinds {
  bigBlind: number;
  max: number;
  min: string | number;
  name: string;
  smallBlind: number;
}
