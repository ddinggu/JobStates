import { combineReducers } from 'redux';
import Profile from './reducer_profile';
import Analysis from './reducer_analysis';
import header from './reducer_header';
import fetchedProfile from './reducer_fetchedProfile';
import job from './reducer_job';

const rootReducers = combineReducers({
  Profile,
  fetchedProfile,
  header,
  Analysis,
  job,
});

export default rootReducers;
