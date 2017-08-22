import { combineReducers } from 'redux';
import { itemsList } from './itemsList';

export const todoApp = combineReducers({
    itemsList,
});
