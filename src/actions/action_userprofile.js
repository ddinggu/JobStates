import axios from 'axios';

export const FETCH_USER_PROFILE_BEGIN = 'FETCH_USER_PROFILE_BEGIN';
export const FETCH_USER_PROFILE_SUCCESS = 'FETCH_USER_PROFILE_SUCCESS';
export const FETCH_USER_PROFILE_FAILURE = 'FETCH_USER_PROFILE_FAILURE';
export const FETCH_USER = 'FETCH_USER';

export const fetchUserProfileBegin = () => ({
  type: FETCH_USER_PROFILE_BEGIN,
});

export const fetchUserProfileSuccess = user => ({
  type: FETCH_USER_PROFILE_SUCCESS,
  payload: { user },
});

export const fetchUserProfileFailure = error => ({
  type: FETCH_USER_PROFILE_FAILURE,
  payload: { error },
});

export const fetchUser = () => {
  const url = 'http://ec2-54-218-47-139.us-west-2.compute.amazonaws.com/user';

  return (dispatch) => {
    dispatch(fetchUserProfileBegin());
    return axios
      .get(url)
      .then((user) => {
        dispatch(fetchUserProfileSuccess(user.data));
      })
      .catch(error => dispatch(fetchUserProfileFailure(error)));
  };
};

export const onUpdateField = (key, value) => ({
  type: 'UPDATE_FIELD',
  key,
  value,
});

export const onSubmit = (payload) => {
  const url = 'http://ec2-54-218-47-139.us-west-2.compute.amazonaws.com/test';

  return dispatch => axios.post(url, payload).then(() => {
    axios.get(url).then(() => {
      // console.log('work');
      // console.log(data);
      dispatch(fetchUser());
    });
  });
};
