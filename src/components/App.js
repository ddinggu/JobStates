import React, { Component } from 'react';
// import UserContainer from 'containers/profile/UserContainer';
// import AnalysisContainer from 'containers/analysis/AnalysisContainer';
import HeaderContainer from 'containers/header/HeaderContainer';
import JobDetail from 'containers/job/JobDetail';
import JobList from 'containers/job/JobList';
import JobPostForm from 'containers/job/post/JobPostForm';
import JobDetailHeader from 'containers/job/JobDetailHeader';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ position: 'relative', bottom: '-7em' }}>
        <HeaderContainer />
        {/* <UserContainer /> */}
        {/* <AnalysisContainer /> */}
        <JobPostForm />
        {/* <JobList /> */}
        {/* <JobDetailHeader /> */}
        {/* <JobDetail /> */}
      </div>
    );
  }
}

export default App;
