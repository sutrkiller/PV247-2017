import { combineReducers } from 'redux';
import { itemsList } from './itemsList';
import { editedItemId } from './editedItemId';
import { isCreateNewFormOpen } from './isCreateNewFormOpen';
import { isDragging } from './isDragging';
import { isSaving } from './isSaving';

export const todoApp = combineReducers({
    itemsList,
    editedItemId,
    isCreateNewFormOpen,
    isDragging,
    isSaving
});
