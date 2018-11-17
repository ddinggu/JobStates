import { combineReducers } from 'redux';
import Profile from './reducer_profile';
import fetchedProfile from './reducer_fetchedProfile';

const rootReducers = combineReducers({
  Profile,
  fetchedProfile,
});

export default rootReducers;
