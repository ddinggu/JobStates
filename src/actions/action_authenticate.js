import { authenticateUser } from 'api/api';
import * as types from './actionTypes';

const authenticate = () => ({
  type: types.AUTHENTICATED,
});

const unauthenticate = () => ({
  type: types.UNAUTHENTICATED,
});

const authenticateError = () => ({
  type: types.AUTHENTICATION_ERROR,
});

// status에 따라 판단!!
export const authCheck = () => async (dispatch) => {
  const response = await authenticateUser();
  console.log('auth check', response);

  try {
    response.data.code === 200
      ? dispatch(authenticate())
      : dispatch(unauthenticate());
  } catch (err) {
    dispatch(authenticateError(err));
  }
};

export const logout = () => {
  localStorage.clear();

  return {
    type: types.USER_LOGOUT,
  };
};
