import React, { Component } from 'react';

import UserContainer from '../containers/profile/UserContainer';
import HeaderContainer from '../containers/header/headerContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        Job states
        <HeaderContainer />
        <UserContainer />
      </div>
    );
  }
}

export default App;
