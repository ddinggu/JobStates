import React, { Component } from 'react';
import UserContainer from '../containers/profile/UserContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        Job states
        <UserContainer />
      </div>
    );
  }
}

export default App;
