import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import UserContainer from 'containers/profile/UserContainer';
import AnalysisContainer from 'containers/analysis/AnalysisContainer';
import HeaderContainer from 'containers/header/HeaderContainer';
import JobDetail from 'containers/job/list/JobDetail';
import JobList from 'containers/job/list/JobList';
import JobPostForm from 'containers/job/post/JobPostForm';
import Login from 'containers/login/login';
import getToken from 'containers/login/getToken';
import './App.css';
import styled, { createGlobalStyle } from 'styled-components';
import 'normalize.css';

createGlobalStyle`
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing:border-box;
}
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      showNoti: false,
    };
  }

  render() {
    return (
      <Switch>
        <div className="App" style={{ position: 'relative', bottom: '-7em' }}>
          {/* <HeaderContainer /> */}
          <Route path="/" component={HeaderContainer} />
          <Route exact path="/" component={Login} />
          <Route path="/user" component={UserContainer} />
          <Route path="/login" component={getToken} />
          <Route path="/joblist" component={JobList} />
          <Route path="/jobpost" component={JobPostForm} />
          <Route path="/jobdetail" component={JobDetail} />
          <Route path="/analysis" component={AnalysisContainer} />
        </div>
      </Switch>
    );
  }
}

export default App;
