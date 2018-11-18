import React, { Component } from 'react';
import UserContainer from 'containers/profile/UserContainer';
import AnalysisContainer from 'containers/analysis/AnalysisContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        Job states
        <UserContainer />
        <AnalysisContainer />
      </div>
    );
  }
}

export default App;
