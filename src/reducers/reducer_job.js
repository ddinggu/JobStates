import * as types from 'actions/actionTypes';
import { FETCH_JOB, SEARCH_FILTER } from '../actions/action_Job';

const initialState = {
  loading: false,
  error: false,
  allJobData: [],
  filterData: [],
  currentData: { isMoveToDetail: false, data: {} },
  autocompleteData: [],
  filteredAutocompleteData: {},
};

export default function (state = initialState, action) {
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
        currentData: {
          isMoveToDetail: true,
          data: state.allJobData.filter(
            job => `${job.hireId}` === action.id,
          )[0],
        },
      };

    case types.POST_JOB_BEGIN:
      return { ...state, loading: true };

    case types.POST_JOB_SUCCESS:
      return {
        ...state,
        loading: false,
        // api 완성되면 수정될 것!!
        currentData: action.payload.data,
      };

    case types.POST_JOB_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case types.GET_AUTOCOMPLETEJOB_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case types.GET_AUTOCOMPLETEJOB_SUCCESS:
      return {
        ...state,
        autocompleteData: action.crawlingData,
      };

    case types.GET_AUTOCOMPLETEJOB_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case types.FILTER_AUTOCOMPLETEJOB:
      return {
        ...state,
        filteredAutocompleteData: state.autocompleteData.filter(
          job => `${job.hireId}` === `${action.hireId}`,
        )[0],
      };

    case types.CLEAR_AUTOCOMPLETEJOB:
      return {
        ...state,
        autocompleteData: [],
      };

    case types.DELETE_JOB_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case types.DELETE_JOB_SUCCESS:
      return {
        ...state,
        loading: false,
        currentData: { isMoveToDetail: false, data: {} },
      };

    case types.DELETE_JOB_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
}
