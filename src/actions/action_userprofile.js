import axios from 'axios';
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

export const deleteUserProfile = (payload) => {
  const url = 'http://ec2-54-218-47-139.us-west-2.compute.amazonaws.com/test';
  return dispatch => axios.delete(url, payload).then(() => dispatch(fetchUser()));
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
