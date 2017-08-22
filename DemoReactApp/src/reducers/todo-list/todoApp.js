import { itemsList } from './itemsList';

export const totoApp = (prevState, action) => ({
    itemsList: itemsList(prevState.itemsList, action)
});
