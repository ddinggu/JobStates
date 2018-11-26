import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import UserContainer from 'containers/profile/UserContainer';
import AnalysisContainer from 'containers/analysis/AnalysisContainer';
import HeaderContainer from 'containers/header/HeaderContainer';
import JobDetail from 'containers/job/list/JobDetail';
import JobList from 'containers/job/list/JobList';
import JobPostForm from 'containers/job/post/JobPostForm';
import JobDetailHeader from 'containers/job/list/JobDetailHeader';
import Login from 'containers/login/login';

class App extends Component {
  render() {
    return (
      <BrowserRouter id="test">
        <div className="App" style={{ position: 'relative', bottom: '-7em' }}>
          <HeaderContainer />
          <Route path="/" exact component={Login} />
          <Route path="/user" component={UserContainer} />
          <Route path="/joblist" component={JobList} />
          <Route path="/jobpost" component={JobPostForm} />
          {/* <Route path="/jobdetail" component={JobDetailHeader} /> */}
          <Route path="/jobdetail" component={JobDetail} />
          <Route path="/analysis" component={AnalysisContainer} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
