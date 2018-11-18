import getUserAnalysisData from 'api/api';
import * as types from 'actions/actionTypes';

const loadingGetAnalysisData = () => ({
  type: types.LOADING_ANALYSIS,
});

const successGetAnalysisData = payload => ({
  type: types.GET_ANALYSIS_SUCCESS,
  payload,
});

const failedGetAnalysisData = payload => ({
  type: types.GET_ANALYSIS_FAILURE,
  payload,
});

const getAnalysis = () => async (dispatch) => {
  dispatch(loadingGetAnalysisData());
  try {
    const responseAnalysisData = await getUserAnalysisData();
    dispatch(successGetAnalysisData(responseAnalysisData.data));
  } catch (err) {
    console.error(err);
    dispatch(failedGetAnalysisData(err));
  }
};

export default getAnalysis;
