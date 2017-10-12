import { EDIT_PROFILE_DETAILS } from '../../constants/actionTypes';

const defaultDetails = {
    email: 'undefined@null.zero',
    fullName: '',
    phone: '',
};

export const details = (prevState = defaultDetails, action) => {
    switch (action.type) {
        case EDIT_PROFILE_DETAILS:
            return action.payload.details;

        default:
            return prevState;
    }
};
