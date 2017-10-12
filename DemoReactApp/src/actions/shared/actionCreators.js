import * as actionTypes from '../../constants/actionTypes';

export const receiveValidToken = () => ({
    type: actionTypes.SHARED_RECEIVE_TOKEN,
    payload: {
        token: 'forged-token-much-guid-such-wow',
    }
});

export const invalidateToken = () => ({
    type: actionTypes.SHARED_INVALIDATE_TOKEN,
});
