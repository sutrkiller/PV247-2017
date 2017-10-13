import * as actionTypes from '../../constants/actionTypes';

export const receiveValidToken = (token) => ({
    type: actionTypes.SHARED_RECEIVE_TOKEN,
    payload: {
        token,
    }
});

export const invalidateToken = () => ({
    type: actionTypes.SHARED_INVALIDATE_TOKEN,
});

export const authenticationStarted = () => ({
    type: actionTypes.SHARED_AUTHENTICATION_STARTED,
});
export const authenticationFailed = (error) => ({
    type: actionTypes.SHARED_AUTHENTICATION_FAILED,
    payload: {
        error,
    }
});
