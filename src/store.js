import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import ReduxThunk from 'redux-thunk';
import Reducers from './reducers';

const history = createBrowserHistory();

/* eslint-disable no-underscore-dangle */
const store = createStore(
  Reducers(history),
  compose(
    applyMiddleware(routerMiddleware(history), ReduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default store;
