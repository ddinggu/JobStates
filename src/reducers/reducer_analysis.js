import * as types from 'actions/actionTypes';

const initialState = {
  loading: false,
  error: false,
  data: {},
};

function setUserAnalysisData(state = initialState, action) {
  switch (action.type) {
    case types.GET_ANALYSIS_BEGIN:
      return { ...state, loading: true };

    case types.GET_ANALYSIS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case types.GET_ANALYSIS_FAILURE:
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
}

export default setUserAnalysisData;
