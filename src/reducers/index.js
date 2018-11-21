import { combineReducers } from 'redux';
import Profile from './reducer_profile';
import Analysis from './reducer_analysis';
import header from './reducer_header';
import fetchedProfile from './reducer_fetchedProfile';
import JobPost from './reducer_jobpost';

const rootReducers = combineReducers({
  Profile,
  fetchedProfile,
  header,
  Analysis,
  JobPost,
});

export default rootReducers;
