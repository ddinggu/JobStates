// import { bindActionCreators } from 'redux';
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
            return (
              data.brand.indexOf(action.payload2) !== -1
            );
          }
        }),
      };
    default:
      return state;
  }
}

// (data.status === action.payload) || (data.brand === action.payload2)
// data.brand.indexOf(action.payload2) !== -1