import { getUserAnalysisData } from 'api/api';
import * as types from 'actions/actionTypes';
import { push } from 'connected-react-router';

const loadingGetAnalysisData = () => ({
  type: types.GET_ANALYSIS_BEGIN,
});

const successGetAnalysisData = payload => ({
  type: types.GET_ANALYSIS_SUCCESS,
  payload,
});

const failedGetAnalysisData = error => ({
  type: types.GET_ANALYSIS_FAILURE,
  error,
});

const getAnalysis = () => async (dispatch) => {
  dispatch(loadingGetAnalysisData());
  try {
    const response = await getUserAnalysisData();

    if (response.data.code === 200) {
      dispatch(successGetAnalysisData(response.data));
    } else {
      dispatch(failedGetAnalysisData(response.data));
      alert(response.data.message);
      dispatch(push('/logout'));
    }
  } catch (err) {
    console.error(err);
    dispatch(failedGetAnalysisData({ code: 404, message: 'Internal Error!' }));
  }
};

export default getAnalysis;
