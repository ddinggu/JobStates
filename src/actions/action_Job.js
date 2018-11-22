import axios from 'axios';
import * as types from 'actions/actionTypes';

const URL_JOB = 'http://ec2-54-218-47-139.us-west-2.compute.amazonaws.com/job';

export const FETCH_JOB = 'FETCH_JOB';
export const SEARCH_FILTER = 'SEARCH_FILTER';

export const fetchJob = () => (dispatch) => axios.get(URL_JOB).then(res => {
    dispatch({ type: FETCH_JOB, payload: res.data });
  });

export const filterFetchData = data => (dispatch) => {
  axios.get(URL_JOB).then((res) => {
    dispatch({ type: SEARCH_FILTER, payload: res.data });
  });
};

export const getDetailJob = id => (dispatch) => {
  dispatch({ type: types.GET_DETAIL_JOB, id });
};
