import { FETCH_JOB } from '../actions/action_Job';

const initialState = [];

export default function (state = initialState, action) {
  //   console.log('job action::: ', action);
  switch (action.type) {
    case FETCH_JOB:
      return [action.payload];
    default:
      return state;
  }
}
