import * as types from 'actions/actionTypes';
import * as api from 'api/api';

// const URL_JOB = 'http://ec2-54-218-47-139.us-west-2.compute.amazonaws.com/job';

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
};
