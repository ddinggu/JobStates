import { FETCH_HEADER } from '../actions/action_header';

const initialState = [];

export default function(state = initialState, action) {
  console.log('action:::', action)
  switch (action.type) {
    case FETCH_HEADER:
      return [action.payload, ...state];
    default:
      return state;
  }
}
