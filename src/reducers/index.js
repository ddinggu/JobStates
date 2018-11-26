import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import Analysis from './reducer_analysis';
import header from './reducer_header';
import fetchedProfile from './reducer_fetchedProfile';
import job from './reducer_job';

const rootReducers = history => combineReducers({
    router: connectRouter(history),
    fetchedProfile,
    header,
    Analysis,
    job,
  });

export default rootReducers;
