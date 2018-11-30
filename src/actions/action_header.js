import * as types from 'actions/actionTypes';
import * as api from 'api/api';

const fetchHeader = () => async (dispatch) => {
  try {
    const response = await api.fetchHeader();
    dispatch({ type: types.FETCH_HEADER, payload: response.data });
  } catch (err) {
    console.log(err);
  }
};
export default fetchHeader;
