import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import Reducers from './reducers';

/* eslint-disable */
const store = createStore(
  Reducers,
  compose(
    applyMiddleware(ReduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

/* eslint-disable no-underscore-dangle */

export default store;
