import axios from 'axios';

const userURL = 'http://ec2-54-218-47-139.us-west-2.compute.amazonaws.com/user';

export const FETCH_HEADER = 'FETCH_HEADER';

export const fetchHeader = () => (dispatch) => {
  axios.get(userURL).then((res) => {
    dispatch({ type: FETCH_HEADER, payload: res.data });
  });
};
