import { combineReducers } from 'redux';
import Profile from './reducer_profile';
import header from './reducer_header';

const rootReducers = combineReducers({
  Profile,
  header,
});

export default rootReducers;
