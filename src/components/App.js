import React, { Component } from 'react';
import UserContainer from 'containers/profile/UserContainer';
import AnalysisContainer from 'containers/analysis/AnalysisContainer';
import HeaderContainer from '../containers/header/HeaderContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        Job states
        <HeaderContainer />
        <UserContainer />
        <AnalysisContainer />
      </div>
    );
  }
}

export default App;
