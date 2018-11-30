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

const failedFetchJobData = () => ({
  type: types.FETCH_JOB_FAILURE,
});

export const fetchJob = () => async (dispatch) => {
  dispatch(loadingFetchJobData());
  try {
    const response = await api.fetchJob();
    console.log(response.data);

    dispatch(successFetchJobData(response.data));
  } catch (error) {
    dispatch(failedFetchJobData());
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

const failedDeleteJobData = () => ({
  type: types.DELETE_JOB_FAILURE,
});

export const deleteJobData = data => async (dispatch) => {
  dispatch(loadingDeleteJobData());

  console.log('delete data: ', data);

  try {
    // 추후 수정 필요!!
    const response = await api.deletePostingJob(data);
    if (response.status === 500) {
      dispatch(failedDeleteJobData());
    } else {
      console.log('response: ', response);

      dispatch(successDeleteJobData(data.hireId));
      dispatch(push('/joblist'));
    }
  } catch (err) {
    console.error(err);
    dispatch(failedDeleteJobData());
  }
};
