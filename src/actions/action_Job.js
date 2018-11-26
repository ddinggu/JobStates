import * as types from 'actions/actionTypes';
import * as api from 'api/api';
import { push } from 'connected-react-router';

export const fetchJob = () => async (dispatch) => {
  try {
    const response = await api.fetchJob();
    dispatch({ type: types.FETCH_JOB, payload: response.data });
  } catch (error) {
    console.log(error);
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

const successDeleteJobData = () => ({
  type: types.DELETE_JOB_SUCCESS,
});

const failedDeleteJobData = () => ({
  type: types.DELETE_JOB_FAILURE,
});

export const deleteJobData = hireId => async (dispatch) => {
  dispatch(loadingDeleteJobData());

  try {
    // 추후 수정 필요!!
    const response = await api.deletePostingJob(hireId);
    if (response.status === 500) {
      dispatch(failedDeleteJobData());
    } else {
      dispatch(successDeleteJobData());
    }
  } catch (err) {
    console.error(err);
    dispatch(failedDeleteJobData());
  }
};

export const changeStateDetail = () => ({
  type: types.CHANGE_STATE_DETAILPAGE,
});
