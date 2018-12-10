import * as types from 'actions/actionTypes';
import * as api from 'api/api';
import { push } from 'connected-react-router';

const loadingFetchJobData = () => ({
  type: types.FETCH_JOB_BEGIN,
});

const successFetchJobData = payload => ({
  type: types.FETCH_JOB_SUCCESS,
  payload,
});

const failedFetchJobData = error => ({
  type: types.FETCH_JOB_FAILURE,
  error,
});

export const fetchJob = () => async (dispatch) => {
  dispatch(loadingFetchJobData());
  const response = await api.fetchJob();
  try {
    if (response.data.code === 200) {
      dispatch(successFetchJobData(response.data));
    } else {
      dispatch(failedFetchJobData(response.data));
      alert(response.data.message);
      dispatch(push('/logout'));
    }
  } catch (error) {
    dispatch(failedFetchJobData({ code: 404, message: 'Internal Error!' }));
    alert(response.data.message);
    dispatch(push('/logout'));
  }
};

export const filterFetchData = (
  filterTargetValue,
  filterTargetInputValue,
) => (dispatch) => {
  dispatch({
    type: types.SEARCH_FILTER,
    payload: filterTargetValue,
    payload2: filterTargetInputValue,
  });
};

export const getDetailJob = id => (dispatch) => {
  dispatch({ type: types.GET_DETAIL_JOB, id });
  dispatch(push('/jobdetail'));
};

const loadingDeleteJobData = () => ({
  type: types.DELETE_JOB_BEGIN,
});

const successDeleteJobData = hireId => ({
  type: types.DELETE_JOB_SUCCESS,
  hireId,
});

const failedDeleteJobData = error => ({
  type: types.DELETE_JOB_FAILURE,
  error,
});

export const deleteJobData = data => async (dispatch) => {
  dispatch(loadingDeleteJobData());

  try {
    const response = await api.deletePostingJob(data);
    if (response.data.code === 200) {
      dispatch(successDeleteJobData(data.hireId));
    } else {
      dispatch(failedDeleteJobData(response.data));
      dispatch(push('/joblist'));
    }
  } catch (err) {
    console.error(err);
    dispatch(failedDeleteJobData({ code: 404, message: 'Internal Error!' }));
  }
};
