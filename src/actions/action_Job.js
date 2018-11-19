import axios from 'axios';

const URL_JOB = 'http://ec2-54-218-47-139.us-west-2.compute.amazonaws.com/job';

export const FETCH_JOB = 'FETCH_JOB';

export const fetchJob = () => (dispatch) => {
  axios.get(URL_JOB).then((res) => {
    dispatch({ type: FETCH_JOB, payload: res.data });
  });
};
