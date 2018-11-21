import { combineReducers } from 'redux';
import Analysis from './reducer_analysis';
import header from './reducer_header';
import fetchedProfile from './reducer_fetchedProfile';
import JobPost from './reducer_jobpost';

const rootReducers = combineReducers({
  fetchedProfile,
  header,
  Analysis,
  JobPost,
});

export default rootReducers;
