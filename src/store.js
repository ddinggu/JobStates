import { createStore } from 'redux';
import Reducers from './reducers';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  Reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

export default store;
