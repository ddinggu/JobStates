import * as types from 'actions/actionTypes';
import * as api from 'api/api';

const loadingAutoComplete = () => ({
  type: types.GET_AUTOCOMPLETEJOB_BEGIN,
});

const successAutoComplete = crawlingData => ({
  type: types.GET_AUTOCOMPLETEJOB_SUCCESS,
  crawlingData,
});

const failedAutoComplete = () => ({
  type: types.GET_AUTOCOMPLETEJOB_FAILURE,
});

const filteringAutoCompleteData = hireId => ({
  type: types.FILTER_AUTOCOMPLETEJOB,
  hireId,
});

export const clearAutoCompleteData = () => ({
  type: types.CLEAR_AUTOCOMPLETEJOB,
});

export const filterAutoCompleteData = hireId => async dispatch => {
  await dispatch(filteringAutoCompleteData(hireId));
  dispatch(clearAutoCompleteData());
};

export const setAutoCompleteData = company => async dispatch => {
  dispatch(loadingAutoComplete());

  const responseAutoCompleteData = await api.getAutoCompleteData(company);

  try {
    dispatch(successAutoComplete(responseAutoCompleteData.data.data));
  } catch (err) {
    console.error(err);
    dispatch(failedAutoComplete());
  }
};
