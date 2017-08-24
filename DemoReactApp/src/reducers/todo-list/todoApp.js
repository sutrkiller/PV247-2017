import { combineReducers } from 'redux';
import { itemsList } from './itemsList';
import { editedItemId } from './editedItemId';
import { isCreateNewFormOpen } from './isCreateNewFormOpen';
import { isDragging } from './isDragging';

export const todoApp = combineReducers({
    itemsList,
    editedItemId,
    isCreateNewFormOpen,
    isDragging,
});
