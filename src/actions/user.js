import { API_CALL } from '../helpers';

export const CONNECT_USER_REQUEST = 'CONNECT_USER_REQUEST';
export const CONNECT_USER_SUCCESS = 'CONNECT_USER_SUCCESS';
export const CONNECT_USER_FAILURE = 'CONNECT_USER_FAILURE';

export const connectUser = (user) => ({
  [API_CALL]: {
    types: [
      CONNECT_USER_REQUEST,
      CONNECT_USER_SUCCESS,
      CONNECT_USER_FAILURE,
    ],
    endpoint: `connect-user/${user.username}`,
  },
});

export const sayHello = () => ({
  type: 'SAY_HELLO',
});
