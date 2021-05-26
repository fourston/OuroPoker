import { IBalance } from '../../helpers/types/IBalancy';

const initialState: IBalance = {
    ouro: 0,
    pzm: 0,
};

export const balanceReduser = (state = initialState, action: any) => {
    switch (action.type) {
        case 'GET_OURO':
            return { ...state, ouro: action.payload };
        default:
            return state;
    }
};
