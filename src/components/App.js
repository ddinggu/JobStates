import React, { Component } from 'react';
import UserContainer from 'containers/profile/UserContainer';
import AnalysisContainer from 'containers/analysis/AnalysisContainer';
import HeaderContainer from '../containers/header/HeaderContainer';
import JobDetail from '../containers/job/JobDetail';
import JobList from '../containers/job/JobList';

class App extends Component {
  render() {
    return (
      <div className="App">
        Job states
        <HeaderContainer />
        <UserContainer />
        <AnalysisContainer />
        <JobDetail />
        <JobList />
      </div>
    );
  }
}

export default App;
