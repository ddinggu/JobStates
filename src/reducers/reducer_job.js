import * as types from 'actions/actionTypes';
import * as filters from 'utils/filter';

const initialState = {
  loading: false,
  allJobData: [],
  filterData: [],
  currentData: {
    data: {},
  },
  autocompleteData: [],
  filteredAutocompleteData: {},
  imgUrl: null,
  status: { code: null, message: null },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_JOB_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case types.FETCH_JOB_SUCCESS:
      return {
        ...state,
        loading: false,
        allJobData: action.payload.data,
        filterData: action.payload.data,
        status: { code: action.payload.code, message: 'success' },
      };

    case types.FETCH_JOB_FAILURE:
      return {
        ...state,
        loading: false,
        staus: action.error,
      };

    case types.SEARCH_FILTER:
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
        currentData: { data: action.payload },
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
        loading: false,
        autocompleteData:
          action.crawlingData.length > 0 ? action.crawlingData : null,
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
        filteredAutocompleteData: filters.findTargetFilter(
          state.autocompleteData,
          'hireId',
          action.hireId,
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
        allJobData: filters.deleteTargetFilter(
          state.allJobData,
          'hireId',
          action.hireId,
        ),
        status: { code: 200, message: 'success' },
        currentData: { data: {} },
      };

    case types.DELETE_JOB_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case types.EDIT_JOB_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case types.EDIT_JOB_SUCCESS:
      return {
        ...state,
        loading: false,
        status: { code: action.data.code, message: 'success' },
        currentData: {
          data: { ...state.currentData.data, ...action.data.data },
        },
      };

    case types.EDIT_JOB_FAILURE:
      return {
        ...state,
        loading: false,
        status: action.error,
      };

    default:
      return state;
  }
}
