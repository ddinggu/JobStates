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

export const onSubmitPostUser = (payload) => {
  const url = 'http://ec2-54-218-47-139.us-west-2.compute.amazonaws.com/test';

  return dispatch => axios.post(url, payload).then(() => {
      axios.get(url, payload).then((res) => {
        console.log('post res', res);
        dispatch(fetchUser());
      });
    });
};

export const deleteUserProfile = (payload) => {
  const url = 'http://ec2-54-218-47-139.us-west-2.compute.amazonaws.com/test';
  return dispatch => axios.delete(url, payload).then(() => dispatch(fetchUser()));
};

export const onSubmitPatchUser = (data) => {
  const url = 'http://ec2-54-218-47-139.us-west-2.compute.amazonaws.com/test';
  return dispatch => axios.patch(url, data).then((res) => {
      dispatch(fetchUserProfileSuccess(res.data));

      console.log('res', res);
      dispatch(fetchUser());
    });
};
