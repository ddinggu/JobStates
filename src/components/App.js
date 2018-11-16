import React, { Component } from 'react';

import UserContainer from '../containers/profile/UserContainer';
import Header from './header';

class App extends Component {
  render() {
    return (
      <div className="App">
        Job states
        <Header />
        <UserContainer />
      </div>
    );
  }
}

export default App;
