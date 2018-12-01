import * as types from 'actions/actionTypes';

const initialState = {
  isAuthenticated: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.AUTHENTICATED:
      return { ...state, isAuthenticated: true };
    case types.UNAUTHENTICATED:
      return { ...state, isAuthenticated: false };
    case types.AUTHENTICATION_ERROR:
      return { ...state, error: action.payload };
    case types.USER_LOGOUT:
      return { isAuthenticated: false, error: null };
    default:
      return state;
  }
};
