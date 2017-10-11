import { combineReducers } from 'redux';
import { isSaving } from './isSaving';

export const shared = combineReducers({
    isSaving
});
