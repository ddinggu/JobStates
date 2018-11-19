import { combineReducers } from 'redux';
import header from './reducer_header';
import fetchedProfile from './reducer_fetchedProfile';

const rootReducers = combineReducers({
  fetchedProfile,
  header,
});

export default rootReducers;
