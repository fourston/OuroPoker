import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { userReducer } from './user';
import { friendsReduser } from './friends';
import { balanceReduser } from './balance';
import { chatReduser } from './chatMain';
import { chatsReduser } from './chats';
import { pushReducer } from './push';
import { transactionsReduser } from './transactions';
import { pinCodeReducer } from './pinCode';

export const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    friends: friendsReduser,
    balance: balanceReduser,
    transactions: transactionsReduser,
    chatMain: chatReduser,
    chats: chatsReduser,
    push: pushReducer,
    pinCode: pinCodeReducer,
});
export type IAplicationState = ReturnType<typeof rootReducer>;
