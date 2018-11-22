import { FETCH_JOB, SEARCH_FILTER } from '../actions/action_Job';

const initialState = {
  allJobData: [],
  filterData: [],
};

export default function (state = initialState, action) {
  console.log('job action::: ', action);
  switch (action.type) {
    case FETCH_JOB:
      return {
        ...state,
        allJobData: action.payload,
      };
    case SEARCH_FILTER:
      return { 
        ...state,
        filterData: action.payload,
      };
    default:
      return state;
  }
}
