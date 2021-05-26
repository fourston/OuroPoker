import { ITransactions } from '../../helpers/types';

const initialState: ITransactions = {
    list: null,
    last: {
        in: null,
        out: null,
    },
};

export const transactionsReduser = (state = initialState, action: any) => {
    switch (action.type) {
        case 'GET_TRANSACTIONS':
            const list = action.payload.payload;
            const lastIn = list
                .slice()
                .reverse()
                .find((item) => item.type === 'IN');
            const lastOut = list
                .slice()
                .reverse()
                .find((item) => item.type === 'OUT');
            const last = {
                in: lastIn ? lastIn : null,
                out: lastOut ? lastOut : null,
            };
            return { ...state, list, last };
        default:
            return state;
    }
};
