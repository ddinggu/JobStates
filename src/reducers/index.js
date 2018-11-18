import { combineReducers } from 'redux';
import Profile from './reducer_profile';
import header from './reducer_header';
import fetchedProfile from './reducer_fetchedProfile';

const rootReducers = combineReducers({
  Profile,
  fetchedProfile,
  hedear,
});

export default rootReducers;
