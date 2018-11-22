import * as types from 'actions/actionTypes';

const initialState = {
  loading: false,
  error: false,
};

const postUserJobData = (state = initialState, action) => {
  switch (action.type) {
    case types.POST_JOB_BEGIN:
      return { ...state, loading: true };

    case types.POST_JOB_SUCCESS:
      return {
        loading: !state.loading,
        // api 완성되면 수정될 것!!
        ...action.payload.data,
      };

    case types.POST_JOB_FAILURE:
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
};

export default postUserJobData;
