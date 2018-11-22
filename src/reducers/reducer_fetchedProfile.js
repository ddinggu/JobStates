import * as types from '../actions/actionTypes';

const initialState = {
  items: null,
  loading: false,
  error: null,
};

export default function userProfileReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_USER_PROFILE_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case types.FETCH_USER:
      return {
        ...state,
        loading: false,
        items: action.payload.data,
      };

    case types.FETCH_USER_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
      };

    case types.FETCH_USER_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: {},
      };

    default:
      return state;
  }
}
