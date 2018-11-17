import {
  FETCH_USER_PROFILE_BEGIN,
  FETCH_USER_PROFILE_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_USER,
} from '../actions';

const initialState = {
  items: null,
  loading: false,
  error: null,
};

export default function productReducer(state = initialState, action) {
  // console.log('action received', action);
  switch (action.type) {
    case FETCH_USER_PROFILE_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_USER:
      return {
        ...state,
        loading: false,
        items: action.payload.data,
      };

    case FETCH_USER_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
      };

    case FETCH_PRODUCTS_FAILURE:
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
