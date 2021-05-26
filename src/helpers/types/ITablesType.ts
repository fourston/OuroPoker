export interface ILobbyTables {
  tableId: string;
  tableSize: 'NINE' | 'FIVE';
  places?: IILobbyTablesPlace[];
  blind: {
    bigBlind: number;
    max: number;
    min: number;
    name: 'BLIND_5';
    smallBlind: number;
  };
}

export interface IILobbyTablesPlace {
  placeNumber: number;
  uuid?: string;
  name?: string;
  balance?: number;
}
