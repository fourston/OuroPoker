import api from '../../api';

const getOuro = (our: number | string) => {
  return {
    type: 'GET_OURO',
    payload: our,
  };
};

export const getbalance = (uuid) => async (dispatch) => {
  
  api('crypto', 'account_balance', uuid, 'OURO')
    .get()
    .then((e) => {
      dispatch(getOuro(e.data.balance));
    })
    .catch((e) => {
      console.log(e, 'catchaswqwd');
      console.log('redians tip');
    });
};
