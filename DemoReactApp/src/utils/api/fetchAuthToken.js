import {
    API_AUTH_URI,
    USER_EMAIL
} from '../../constants/api';
import { validateTextResponse } from './validateResponse';

export const fetchAuthToken = () => fetch(
    API_AUTH_URI,
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(USER_EMAIL)
    })
    .then(validateTextResponse);