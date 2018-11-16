import React, { Component } from 'react';
import UserBasicInfo from './UserBasicInfo';
import UserEducation from './UserEducation';
// import UserProject from './UserProject';
// import UserInterestField from './UserInterestField';
// import UserInterestTech from './UserInterestTech';
// import UserExperience from './UserExperience';

export default class UserContainer extends Component {
  render() {
    return (
      <div className="usercontainer">
        <UserBasicInfo />
        <UserEducation />
        {/* <UserExperience />
        <UserProject />
        <UserInterestField />
        <UserInterestTech /> */}
      </div>
    );
  }
}
