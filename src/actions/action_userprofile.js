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
    // console.log('herere', responseGetUserProfile);
    dispatch(fetchUserProfileSuccess(responseGetUserProfile.data));
  } catch (err) {
    dispatch(fetchUserProfileFailure(err));
  }
};

export const onSubmitPostUser = (data, part) => async (dispatch) => {
  dispatch(fetchUserProfileBegin());
  try {
    const responsePostUserData = await api.postUserProfile(data, part);
    dispatch(fetchUserProfileSuccess(responsePostUserData.data));
  } catch (err) {
    console.log('action_userprofile: onSubmitPostUserEdu error', err);
    dispatch(fetchUserProfileFailure(err));
  }
};

export const onSubmitPatchUser = (data, part) => async (dispatch) => {
  dispatch(fetchUserProfileBegin());
  try {
    console.log('patching data', data);
    const responsePostUserData = await api.updateUserProfile(data, part);
    dispatch(fetchUserProfileSuccess(responsePostUserData.data));
  } catch (err) {
    dispatch(fetchUserProfileFailure(err));
  }
};

export const deleteUserProfile = (data, part) => async (dispatch) => {
  dispatch(fetchUserProfileBegin());
  try {
    console.log('deleting data', data, part);
    const deletedRes = await api.deleteUserProfile(data, part);
    console.log('deleted', deletedRes.data);
    dispatch(fetchUserProfileSuccess(deletedRes.data));
  } catch (err) {
    dispatch(fetchUserProfileFailure(err));
  }
};

export const uploadUserImage = data => async (dispatch) => {
  try {
    const imgUrlResponse = await api.postUserImage(data);

    dispatch(uploadUserImageSuccess(imgUrlResponse));
  } catch (err) {
    console.log(err);
  }
};
