import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';
import 'semantic-ui-css/semantic.min.css';
<<<<<<< HEAD

=======
>>>>>>> 9737abcbbe0a690c536a27c6b3b316502f1b2edd
// import * as serviceWorker from './serviceWorker';

// import { fetchUserProfile } from './actions';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// serviceWorker.unregister();
