import * as types from 'actions/actionTypes';
import * as api from 'api/api';
import { push } from 'connected-react-router';

const loadingPostJobData = () => ({
  type: types.POST_JOB_BEGIN,
});

const successPostJobData = payload => ({
  type: types.POST_JOB_SUCCESS,
  payload,
});

const failedPostJobData = () => ({
  type: types.POST_JOB_FAILURE,
});

export default jobData => async (dispatch) => {
  dispatch(loadingPostJobData());
  try {
    const responsePostJobData = await api.postUserJobPosting(jobData);
    console.log('post log!!', responsePostJobData);

    await dispatch(successPostJobData(responsePostJobData.data));
    dispatch(push('/jobdetail'));
  } catch (err) {
    console.error(err);
    dispatch(failedPostJobData(err));
  }
};
