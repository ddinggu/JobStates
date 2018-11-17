import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';

import Reducers from './reducers';
/* eslint no-underscore-dangle: 0 */

const store = createStore(
  Reducers,
  compose(
    applyMiddleware(ReduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default store;
