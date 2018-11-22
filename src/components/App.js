import React, { Component } from 'react';
import UserContainer from 'containers/profile/UserContainer';
import AnalysisContainer from 'containers/analysis/AnalysisContainer';
<<<<<<< HEAD
import HeaderContainer from 'containers/header/HeaderContainer';
import JobPostForm from 'containers/job/post/JobPostForm';
=======
import HeaderContainer from '../containers/header/HeaderContainer';
import JobDetail from '../containers/job/JobDetail';
import JobList from '../containers/job/JobList';
>>>>>>> 2b81d0a303e0513d5307dc16ecbe598c07c726b0

class App extends Component {
  render() {
    return (
      <div className="App" style={{ position: 'relative', bottom: '-7em' }}>
        <HeaderContainer />
<<<<<<< HEAD
        <UserContainer />
        <AnalysisContainer />
        <JobPostForm />
=======
        {/* <UserContainer />
        <AnalysisContainer /> */}
        <JobList />
        <JobDetail />
>>>>>>> 2b81d0a303e0513d5307dc16ecbe598c07c726b0
      </div>
    );
  }
}

export default App;
