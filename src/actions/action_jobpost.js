import * as types from 'actions/actionTypes';
import { postUserJobPosting } from 'api/api';
import { push } from 'connected-react-router';

const loadingPostJobData = () => ({
  type: types.POST_JOB_BEGIN,
});

const successPostJobData = payload => ({
  type: types.POST_JOB_SUCCESS,
  payload,
});

const failedPostJobData = error => ({
  type: types.POST_JOB_FAILURE,
  error,
});

export default jobData => async (dispatch) => {
  dispatch(loadingPostJobData());
  try {
    const responsePostJobData = await postUserJobPosting(jobData);

    if (responsePostJobData.data.code === 200) {
      await dispatch(successPostJobData(responsePostJobData.data.data));
      dispatch(push('/jobdetail'));
    } else {
      dispatch(failedPostJobData(responsePostJobData.data));
      alert(responsePostJobData.data.message);
      dispatch(push('/logout'));
    }
  } catch (err) {
    console.error(err);
    dispatch(failedPostJobData({ code: 404, message: 'Internal Error!' }));
  }
};
