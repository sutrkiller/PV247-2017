import * as actionTypes from '../../constants/actionTypes';

export const editProfileDetails = (details) => ({
    type: actionTypes.EDIT_PROFILE_DETAILS,
    payload: {
        details,
    }
});
