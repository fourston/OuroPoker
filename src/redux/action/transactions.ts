import api from '../../api';
import { ITransactions } from '../../helpers/types';

const getTransactions = (transactions: ITransactions) => {
  return {
    type: 'GET_TRANSACTIONS',
    payload: transactions,
  };
};
export const gettransactions = (uuid) => async (dispatch) => {  
  api('profile', 'transactions', uuid)
    .get()
      .then((e) => {
        dispatch(getTransactions(e.data));
    })
};