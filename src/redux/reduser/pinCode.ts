export interface IPinCode {
    isPinSet: boolean;
    updateSuccess: boolean | null;
    setSuccess: boolean | null;
}

const initialState: IPinCode = {
    isPinSet: false,
    updateSuccess: null,
    setSuccess: null,
};

export const pinCodeReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'GET_IS_PIN_SET':
            return { ...state, isPinSet: action.payload?.isExist ? true : false };
        case 'RESET_PIN_DATA':
            return { ...state, updateSuccess: null, setSuccess: null };
        case 'UPDATE_PIN':
            return { ...state, updateSuccess: action.payload?.success ? true : false };
        case 'SET_PIN':
            return { ...state, setSuccess: action.payload?.success ? true : false };
        default:
            return state;
    }
};
