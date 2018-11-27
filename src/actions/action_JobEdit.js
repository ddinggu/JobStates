import * as types from 'actions/actionTypes';
import * as api from 'api/api';

const loadingPatchJobData = () => ({
  type: types.EDIT_JOB_BEGIN,
});

const successPatchJobData = data => ({
  type: types.EDIT_JOB_SUCCESS,
  data,
});

const failedPatchJobData = () => ({
  type: types.EDIT_JOB_FAILURE,
});

export default (data, part) => async (dispatch) => {
  dispatch(loadingPatchJobData());
  console.log('update data : ', data, part);

  try {
    const response = await api.updateJobPostData(data, part);
    dispatch(successPatchJobData(response.data));
  } catch (err) {
    dispatch(failedPatchJobData());
  }
};
