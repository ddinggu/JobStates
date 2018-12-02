import * as types from 'actions/actionTypes';

const initialState = {
  loading: false,
  status: { code: null, message: null },
  data: {},
};

function setUserAnalysisData(state = initialState, action) {
  switch (action.type) {
    case types.GET_ANALYSIS_BEGIN:
      return { ...state, loading: true };

    case types.GET_ANALYSIS_SUCCESS:
      return {
        loading: false,
        data: action.payload.data,
        status: { code: action.payload.code, message: 'success' },
      };

    case types.GET_ANALYSIS_FAILURE:
      return {
        ...state,
        loading: false,
        status: action.error,
      };

    default:
      return state;
  }
}

export default setUserAnalysisData;
