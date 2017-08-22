import * as Immutable from 'immutable';
import {
    TODO_LIST_ITEM_CREATE,
    TODO_LIST_ITEM_DELETE,
    TODO_LIST_ITEM_MOVE,
    TODO_LIST_ITEM_UPDATE
} from '../../constants/actionTypes';

export const itemsList = (previousState = Immutable.List(), action) => {
    switch (action.type) {
        case TODO_LIST_ITEM_CREATE:
            return previousState.push({ ...action.payload.item });

        case TODO_LIST_ITEM_UPDATE: {
            const item = action.payload.item;
            const itemIndex = previousState.findIndex(i => i.id === item.id);
            return itemIndex >= 0
                ? previousState.update(itemIndex, previousItem => ({ ...previousItem, ...item }))
                : previousState;
        }

        case TODO_LIST_ITEM_DELETE:
            return previousState.filterNot(item => item.id === action.payload.id);

        case TODO_LIST_ITEM_MOVE: {
            const moveItemIndex = previousState.findIndex(item => item.id === action.payload.moveItemId);
            const destinationItemIndex = previousState.findIndex(item => item.id === action.payload.destinationItemId);

            if ((moveItemIndex >= 0) && (destinationItemIndex >= 0)) {
                const movedItem = previousState.get(moveItemIndex);

                return previousState.delete(moveItemIndex).insert(destinationItemIndex, movedItem);
            }
            else {
                return previousState;
            }
        }

        default:
            return previousState;
    }
};
