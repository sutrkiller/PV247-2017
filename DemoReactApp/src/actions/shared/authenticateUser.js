import { receiveValidToken } from './actionCreators';
import { push } from 'connected-react-router';

export const authenticateUser = (destinationLocation) =>
    (dispatch) => {
        dispatch(receiveValidToken());
        dispatch(push(destinationLocation));
    };
