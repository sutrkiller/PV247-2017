import { receiveValidToken } from './actionCreators';
import { push } from 'connected-react-router';
import * as keys from '../../constants/localStorageKeys';

export const authenticateUser = (destinationLocation) =>
    (dispatch, getState) => {
        dispatch(receiveValidToken());

        localStorage.setItem(keys.SHARED_TOKEN, JSON.stringify(getState().shared.token));
        localStorage.setItem(keys.SHARED_TOKEN_TIMESTAMP, JSON.stringify(new Date().getTime()));

        dispatch(push(destinationLocation));
    };
