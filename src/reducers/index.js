import { combineReducers } from 'redux';
import Analysis from './reducer_analysis';
import header from './reducer_header';
import fetchedProfile from './reducer_fetchedProfile';

const rootReducers = combineReducers({
  fetchedProfile,
  header,
  Analysis,
});

export default rootReducers;
