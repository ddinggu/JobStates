import * as types from 'actions/actionTypes';
import { FETCH_JOB, SEARCH_FILTER } from '../actions/action_Job';

const initialState = {
  allJobData: [],
  filterData: [],
  currentData: {},
};

export default function (state = initialState, action) {
  // console.log('job action::: ', action);
  switch (action.type) {
    case FETCH_JOB:
      return {
        ...state,
        allJobData: action.payload,
        filterData: action.payload,
      };
    case SEARCH_FILTER:
      return {
        ...state,
        filterData: state.allJobData.filter((data) => {
          if (!action.payload2) {
            return data.status === action.payload;
          }
          if (action.payload === '전체') {
            return data.brand.indexOf(action.payload2) !== -1;
          }
          if (!!action.payload && !!action.payload2) {
            return (
              data.status === action.payload
              && data.brand.indexOf(action.payload2) !== -1
            );
          }
        }),
      };
    case types.GET_DETAIL_JOB:
      return {
        ...state,
        currentData: state.allJobData.filter(
          job => `${job.hireId}` === action.id,
        ),
      };
    default:
      return state;
  }
}
