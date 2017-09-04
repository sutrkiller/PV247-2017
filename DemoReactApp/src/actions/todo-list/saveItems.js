import {items} from '../../constants/localStorageKeys';
import {
    savingFinished,
    savingStarted
} from './actionCreators';

export const saveItems = () =>
    (dispatch, getState) => {
        dispatch(savingStarted());
        setTimeout(() => {
            localStorage.setItem(items.allIds, JSON.stringify(getState().todoApp.items.allIds.toJS()));
            localStorage.setItem(items.byId, JSON.stringify(getState().todoApp.items.byId.toJS()));

            dispatch(savingFinished());
        }, 1000);
    };
