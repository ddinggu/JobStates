import * as types from 'actions/actionTypes';
import * as api from 'api/api';

const loadingAutoComplete = () => ({
  type: types.GET_AUTOCOMPLETEJOB_BEGIN,
});

const successAutoComplete = crawlingData => ({
  type: types.GET_AUTOCOMPLETEJOB_SUCCESS,
  crawlingData,
});

const failedAutoComplete = err => ({
  type: types.GET_AUTOCOMPLETEJOB_FAILURE,
  err,
});

const filteringAutoCompleteData = hireId => ({
  type: types.FILTER_AUTOCOMPLETEJOB,
  hireId,
});

const clearAutoCompleteData = () => ({
  type: types.CLEAR_AUTOCOMPLETEJOB,
});

export const filterAutoCompleteData = hireId => async (dispatch) => {
  await dispatch(filteringAutoCompleteData(hireId));
  dispatch(clearAutoCompleteData());
};

export const setAutoCompleteData = company => async (dispatch) => {
  dispatch(loadingAutoComplete());

  try {
    const responseAutoCompleteData = await api.getAutoCompleteData(company);
    dispatch(successAutoComplete(responseAutoCompleteData.data));
  } catch (err) {
    console.error(err);
    dispatch(failedAutoComplete(err));
  }
};
