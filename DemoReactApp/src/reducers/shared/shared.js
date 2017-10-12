import { combineReducers } from 'redux';
import { isSaving } from './isSaving';
import { token } from './token';

export const shared = combineReducers({
    isSaving,
    token,
});
