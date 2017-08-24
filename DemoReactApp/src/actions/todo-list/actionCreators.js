import { uuid } from '../../utils/uuidGenerator';
import {
    TODO_LIST_ITEM_CANCEL_EDITING,
    TODO_LIST_ITEM_CREATE,
    TODO_LIST_ITEM_DELETE,
    TODO_LIST_ITEM_MOVE,
    TODO_LIST_ITEM_START_EDITING,
    TODO_LIST_ITEM_UPDATE
} from '../../constants/actionTypes';

export const createNewItem = (newItem) => ({
    type: TODO_LIST_ITEM_CREATE,
    payload: {
        item: {
            ...newItem,
            // note that we have an explicit dependency and will refactor this
            // to use dependency injection in following commits
            id: uuid(),
        },
    }
});

export const updateItem = (item) => ({
    type: TODO_LIST_ITEM_UPDATE,
    payload: {
        item,
    }
});

export const deleteItem = (id) => ({
    type: TODO_LIST_ITEM_DELETE,
    payload: {
        id,
    }
});

export const moveItem = (moveItemId, destinationItemId) => ({
    type: TODO_LIST_ITEM_MOVE,
    payload: {
        moveItemId,
        destinationItemId,
    }
});

export const startEditingItem = (id) => ({
    type: TODO_LIST_ITEM_START_EDITING,
    payload: {
        id,
    }
});

export const cancelEditingItem = () => ({
    type: TODO_LIST_ITEM_CANCEL_EDITING,
});
