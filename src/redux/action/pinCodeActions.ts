import api from '../../api';
import { IPinCode } from '../reduser/pinCode';

const getIsPinSet = (result: IPinCode) => {
    return {
        type: 'GET_IS_PIN_SET',
        payload: result,
    };
};
const checkOldPin = (result: any) => {
    return {
        type: 'CHECK_OLD_PIN',
        payload: result,
    };
};
const updatePin = (result: any) => {
    return {
        type: 'UPDATE_PIN',
        payload: result,
    };
};
const setPin = (result: any) => {
    return {
        type: 'SET_PIN',
        payload: result,
    };
};
export const resetPinData = () => {
    return {
        type: 'RESET_PIN_DATA',
        payload: null,
    };
};

export const getispinset = () => async (dispatch) => {
    api('crypto', 'account_pin')
        .get()
        .then((e) => {
            dispatch(getIsPinSet(e.data));
        });
};

export const updatepin = (newPin: string, oldPin: string) => async (dispatch) => {
    api('crypto', 'account_pin_update', newPin, oldPin)
        .post()
        .then((e) => {
            console.log('updatepin', e);
            dispatch(updatePin(e.data));
        })
        .catch((e) => {
            console.log('updatepin err', e.response);
            dispatch(updatePin(e));
        });
};

export const setpin = (pin: string) => async (dispatch) => {
    api('crypto', 'account_pin_set', pin)
        .post()
        .then((e) => {
            dispatch(setPin(e.data));
        })
        .catch((e) => {
            dispatch(setPin(e));
        });
};
