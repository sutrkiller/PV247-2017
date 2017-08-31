import {
    savingFinished,
    savingStarted
} from './actionCreators';

export const saveItems = () =>
    (dispatch, getState) => {
        dispatch(savingStarted());
        setTimeout(() => {
            localStorage.setItem('todoList', JSON.stringify(getState().todoApp.itemsList.toJS()));
            dispatch(savingFinished());

        }, 1000);
    };
