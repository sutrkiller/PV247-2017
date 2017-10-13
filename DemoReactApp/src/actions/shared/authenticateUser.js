import { push } from 'connected-react-router';
import { receiveValidToken } from './actionCreators';
import {
    authenticationFailed,
    authenticationStarted
} from './actionCreators';
import * as keys from '../../constants/localStorageKeys';
import { fetchAuthToken } from '../../utils/api/fetchAuthToken';

export const authenticateUser = (destinationLocation) =>
    (dispatch) => {
        dispatch(authenticationStarted());

        return fetchAuthToken()
            .then((token) => {
                dispatch(receiveValidToken(token));
                dispatch(push(destinationLocation));

                localStorage.setItem(keys.SHARED_TOKEN, JSON.stringify(token));
                localStorage.setItem(keys.SHARED_TOKEN_TIMESTAMP, JSON.stringify(new Date().getTime()));
            })
            .catch((error) => dispatch(authenticationFailed(error)));
    };
