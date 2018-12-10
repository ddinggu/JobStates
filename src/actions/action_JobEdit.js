import * as types from 'actions/actionTypes';
import * as api from 'api/api';
import { push } from 'connected-react-router';

const loadingPatchJobData = () => ({
  type: types.EDIT_JOB_BEGIN,
});

const successPatchJobData = data => ({
  type: types.EDIT_JOB_SUCCESS,
  data,
});

const failedPatchJobData = error => ({
  type: types.EDIT_JOB_FAILURE,
  error,
});

export default (data, part) => async (dispatch) => {
  dispatch(loadingPatchJobData());

  try {
    const response = await api.updateJobPostData(data, part);

    if (response.data.code === 200) {
      dispatch(successPatchJobData(response.data));
    } else {
      dispatch(failedPatchJobData(response.data));
      alert(response.data.message);
      dispatch(push('/logout'));
    }
  } catch (err) {
    dispatch(failedPatchJobData({ code: 404, message: 'Internal Error!' }));
  }
};
