import * as types from 'actions/actionTypes';
import * as api from 'api/api';

const loadingPostJobData = () => ({
  type: types.POST_JOB_BEGIN,
});

const successPostJobData = payload => ({
  type: types.POST_JOB_SUCCESS,
  payload,
});

const failedPostJobData = payload => ({
  type: types.POST_JOB_FAILURE,
  payload,
});

export default jobData => async (dispatch) => {
  dispatch(loadingPostJobData());
  try {
    const responsePostJobData = await api.postUserJobPosting(jobData);
    dispatch(successPostJobData(responsePostJobData));
  } catch (err) {
    console.error(err);
    dispatch(failedPostJobData(err));
  }
};
