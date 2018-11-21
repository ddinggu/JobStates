import axios from 'axios';
import * as api from 'api/api';
import * as types from 'actions/actionTypes';

const loadingGetAnalysisData = () => ({
  type: types.GET_ANALYSIS_BEGIN,
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
    const responseAnalysisData = await api.getUserAnalysisData();
    dispatch(successGetAnalysisData(responseAnalysisData.data));
  } catch (err) {
    console.error(err);
    dispatch(failedGetAnalysisData(err));
  }
};

export default getAnalysis;
