import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';
import 'semantic-ui-css/semantic.min.css';

// import * as serviceWorker from './serviceWorker';

// import { fetchUserProfile } from './actions';

/* eslint-disable no-console */
// store.dispatch(fetchUserProfile('1').then(() => console.log(store.getState())));
/* eslint-enable no-console */

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// serviceWorker.unregister();
