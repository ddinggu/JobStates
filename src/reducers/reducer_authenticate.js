import * as types from 'actions/actionTypes';

const initialState = {
  isAuthenticated: null,
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
    default:
      return state;
  }
};
