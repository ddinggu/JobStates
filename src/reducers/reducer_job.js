import { FETCH_JOB } from '../actions/action_Job';
import { SEARCH_FILTER } from '../actions/action_Job';

const initialState = {
  allJobData: [],
  filterData: [],
};
// const initialState = [];

export default function (state = initialState, action) {
  // console.log('job action::: ', action);
  switch (action.type) {
    case FETCH_JOB:
      console.log('in reducer', action.type, action.payload);
      console.log(initialState.allJobData);
      return {
        ...state,
        allJobData: action.payload,
      };
    default:
      return state;
  }
}
