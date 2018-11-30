import * as types from '../actions/actionTypes';

const initialState = {
  imageUrl: null,
  loading: false,
};

export default function uploadImageReducer(state = initialState, action) {
  console.log('action payload:::', action.payload);
  switch (action.type) {
    case types.POST_IMAGE_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case types.POST_IMAGE_SUCCESS:
      return {
        ...state,
        imageUrl: action.payload,
      };
    default:
      return state;
  }
}
