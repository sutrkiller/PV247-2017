import {
    SHARED_SAVING_FINISHED,
    SHARED_SAVING_STARTED
} from '../../constants/actionTypes';

export const isSaving = (prevState = false, action) => {
    switch (action.type) {
        case SHARED_SAVING_STARTED:
            return true;

        case SHARED_SAVING_FINISHED:
            return false;

        default:
            return prevState;
    }
};
