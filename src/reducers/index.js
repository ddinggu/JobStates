import { combineReducers } from 'redux';
import Profile from './reducer_profile';
import Analysis from './reducer_analysis';

const rootReducers = combineReducers({
  Profile,
  Analysis,
});

export default rootReducers;
