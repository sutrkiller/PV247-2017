import { combineReducers } from 'redux';
import { itemsList } from './itemsList';
import { editedItemId } from './editedItemId';

export const todoApp = combineReducers({
    itemsList,
    editedItemId,
});
