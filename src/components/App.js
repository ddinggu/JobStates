import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserContainer from 'containers/profile/UserContainer';
import AnalysisContainer from 'containers/analysis/AnalysisContainer';
import HeaderContainer from 'containers/header/HeaderContainer';
import JobDetail from 'containers/job/list/JobDetail';
import JobList from 'containers/job/list/JobList';
import JobPostForm from 'containers/job/post/JobPostForm';
import Login from 'containers/login/login';
import Logout from 'containers/logout';
import getToken from 'containers/login/getToken';
import privateRoute from 'containers/login/privateRoute';
import PlusButton from 'components/common/PlusButton';
// import privateRoute from 'container/login/privateRoute';
import './App.css';

const App = () => (
  <Switch>
    <div className="App" style={{ position: 'relative', bottom: '-7em' }}>
      <Route
        path="/"
        render={props =>
          props.location.pathname !== '/login' && <HeaderContainer />
        }
      />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
      <Route path="/user" component={UserContainer} />
      <Route path="/userprofile" component={getToken} />
      <Route path="/joblist" component={JobList} />
      <Route path="/jobpost" component={privateRoute(JobPostForm)} />
      <Route path="/jobdetail" component={JobDetail} />
      <Route path="/analysis" component={AnalysisContainer} />
      <PlusButton />
    </div>
  </Switch>
);

App.propTypes = {
  location: PropTypes.instanceOf(Object),
};

export default App;
