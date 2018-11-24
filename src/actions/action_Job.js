import axios from 'axios';
import * as types from 'actions/actionTypes';
import * as api from 'api/api';

const URL_JOB = 'http://ec2-54-218-47-139.us-west-2.compute.amazonaws.com/job';

export const FETCH_JOB = 'FETCH_JOB';
export const SEARCH_FILTER = 'SEARCH_FILTER';

export const fetchJob = () => dispatch => axios.get(URL_JOB).then((res) => {
    dispatch({ type: FETCH_JOB, payload: res.data });
  });

export const filterFetchData = (
  filterTargetValue,
  filterTargetInputValue,
) => (dispatch) => {
  dispatch({
    type: SEARCH_FILTER,
    payload: filterTargetValue,
    payload2: filterTargetInputValue,
  });
};

export const getDetailJob = id => (dispatch) => {
  dispatch({ type: types.GET_DETAIL_JOB, id });
};

const loadingDeleteJobData = () => ({
  type: types.DELETE_JOB_BEGIN,
});

const successDeleteJobData = () => ({
  type: types.DELETE_JOB_SUCCESS,
});

const failedDeleteJobData = error => ({
  type: types.DELETE_JOB_FAILURE,
  error,
});

export const deleteJobData = hireId => async (dispatch) => {
  dispatch(loadingDeleteJobData());

  try {
    // 추후 수정 필요!!
    await api.deletePostingJob(hireId);
    dispatch(successDeleteJobData());
  } catch (err) {
    console.error(err);
    dispatch(failedDeleteJobData(err));
  }
};
