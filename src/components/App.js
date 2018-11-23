import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import UserContainer from 'containers/profile/UserContainer';
import AnalysisContainer from 'containers/analysis/AnalysisContainer';
import HeaderContainer from 'containers/header/HeaderContainer';
import JobDetail from 'containers/job/JobDetail';
import JobList from 'containers/job/JobList';
import JobPostForm from 'containers/job/post/JobPostForm';
import JobDetailHeader from 'containers/job/JobDetailHeader';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App" style={{ position: 'relative', bottom: '-7em' }}>
          <HeaderContainer />
          <Route
            path="/"
            exact
            component={() => (
              <div>
                <h1>url lists</h1>
                <ul>
                  <li>localhost:3000/user</li>
                  <li>localhost:3000/joblist</li>
                  <li>localhost:3000/jobpost</li>
                  <li>localhost:3000/jobdetail</li>
                  <li>localhost:3000/</li>
                </ul>
              </div>
            )}
          />
          <Route path="/user" component={UserContainer} />
          <Route path="/joblist" component={JobList} />
          <Route path="/jobpost" component={JobPostForm} />
          <Route path="/jobdetail" component={JobDetailHeader} />
          <Route path="/jobdetail" component={JobDetail} />
          <Route path="/analysis" component={AnalysisContainer} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
