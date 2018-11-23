import * as types from 'actions/actionTypes';
import * as api from 'api/api';

const fetchUserProfileBegin = () => ({
  type: types.FETCH_USER_PROFILE_BEGIN,
});

const fetchUserProfileSuccess = user => ({
  type: types.FETCH_USER_PROFILE_SUCCESS,
  payload: { user },
});

const fetchUserProfileFailure = error => ({
  type: types.FETCH_USER_PROFILE_FAILURE,
  payload: { error },
});

const uploadUserImageSuccess = imgUrl => ({
  type: types.GET_USER_IMAGE_URL,
  payload: { imgUrl },
});

export const fetchUser = () => async (dispatch) => {
  dispatch(fetchUserProfileBegin());

  try {
    const responseGetUserProfile = await api.getUserProfile();
    dispatch(fetchUserProfileSuccess(responseGetUserProfile.data));
  } catch (err) {
    dispatch(fetchUserProfileFailure(err));
  }
};

export const onSubmitPostUser = data => async (dispatch) => {
  dispatch(fetchUserProfileBegin());
  try {
    const responsePostUserData = await api.postUserProfile(data);
    dispatch(fetchUserProfileSuccess(responsePostUserData.data));
  } catch (err) {
    console.log('action_userprofile: onSubmitPostUser error', err);
    dispatch(fetchUserProfileFailure(err));
  }
};

// export const deleteUserProfile = (payload) => {
//   const url = 'http://ec2-54-218-47-139.us-west-2.compute.amazonaws.com/test';
//   return dispatch => axios.delete(url, payload).then(() => dispatch(fetchUser()));
// };

export const deleteUserProfile = payload => async (dispatch) => {
  try {
    dispatch(api.deleteUserProfile(payload).then(() => fetchUser()));
  } catch (err) {
    console.log(err);
  }
};

export const onSubmitPatchUser = data => async (dispatch) => {
  dispatch(fetchUserProfileBegin());
  try {
    const responsePostUserData = await api.postUserProfile(data);
    dispatch(fetchUserProfileSuccess(responsePostUserData.data));
  } catch (err) {
    dispatch(fetchUserProfileFailure(err));
  }
};

export const uploadUserImage = data => async (dispatch) => {
  try {
    const imgUrlResponse = await api.postUserImage(data);
    console.log('img data', data);
    console.log('img response', imgUrlResponse);

    dispatch(uploadUserImageSuccess(imgUrlResponse));
  } catch (err) {
    console.log(err);
  }
};
