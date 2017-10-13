import { combineReducers } from 'redux';
import { isAuthenticating } from './isAuthenticating';
import { isSaving } from './isSaving';
import { token } from './token';

export const shared = combineReducers({
    isAuthenticating,
    isSaving,
    token,
});
