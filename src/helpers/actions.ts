import { IGamePlayerActions, IGamesPlayerStatus } from './types';
export type sizeType = 'NINE' | 'FIVE';
export type speedType = 'NORMA' | 'FAST';
export const commands = {
  createTable: '{"command": "CREATE_GAME"}',
  getLobby: '{"command": "GET_LOBBY"}',
  getLobbyFillter: (isEmptyPlace: boolean, size?: sizeType, nameBlind?: string) => {
    let sizes = size ? '"tableSize": "' + size + '",' : '';
    let blinds = nameBlind ? '"blind": "' + nameBlind + '",' : '';
    return '{"command": "GET_LOBBY",  "speedGame": "NORMA", ' + blinds + sizes + ' "isEmptyPlace": "' + isEmptyPlace + '"}';
  },
  getLobbyFriends: '{"command": "GET_LOBBY", "currency": "OURO", "blind": "BLIND_25", "isEmptyPlace": "true", "descWithFriends": "true"}',
  getState: '{"command": "GET_STATE"}',
  joinTable: (id: string, amount: number, name: string) =>
    '{"command": "JOIN_PLAYER", "tableId": "' + id + '", "amount": "' + amount + '", "name": "' + name + '"}',
  leaveGame: (id: string) => '{"command": "LEAVE_GAME", "tableId": "' + id + '"}',

  stendUp: (id: string) => '{"command": "STAND_UP_PLAYER", "tableId": "' + id + '"}',
  setDown: (id: string, placeNumber: number, amount: number) =>
    '{"command": "SAT_DOWN_PLAYER",  "numberPlace": "' + placeNumber + '", "tableId": "' + id + '","amount":  ' + amount + '}',
  createTableWithOptions: (size: sizeType, nameBlind: string, amount: number, name: string) =>
    '{"command": "CREATE_GAME",  "tableSize": "' +
    size +
    '","currency": "OURO", "speedGame": "NORMA","blind": "' +
    nameBlind +
    '","amount":  ' +
    amount +
    ',  "name": "' +
    name +
    '"} ',
  getBLINDS: () => '{"command": "GET_BLINDS", "currency": "OURO"}',
  actions: (id: string, action: IGamePlayerActions, amount?: number) =>
    amount
      ? '{"command": "PLAYER_ACTION", "actionType": "' + action + '", "amount": "' + amount + '", "tableId": "' + id + '"}'
      : '{"command": "PLAYER_ACTION", "actionType": "' + action + '", "tableId": "' + id + '"}',
};

export const actionsText = (type: IGamesPlayerStatus) => {
  switch (type) {
    case 'ALL_IN':
      return 'ALL IN';
    case 'CALL':
      return 'Уравнял';
    case 'FOLD':
      return 'Пас';
    case 'NOT_MOVED':
      return '';
    case 'BIG_BLIND':
      return '';
    case 'SMALL_BLIND':
      return '';
    case 'RAISE':
      return 'Повысил';
    case 'BET':
      return 'BET';
    case 'CHECK':
      return 'Чек';

    default: {
      '';
    }
  }
};
