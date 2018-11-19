import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UserBasicInfo from './UserBasicInfo';
import UserEducation from './UserEducation';
import UserProject from './UserProject';
import UserExperience from './UserExperience';

import { fetchUser } from '../../actions/index';

// import UserInterestField from './UserInterestField';
// import UserInterestTech from './UserInterestTech';

/* eslint-disable */

class UserContainer extends Component {
  constructor() {
    super();

    this.makePropsUnit = props => {
      const propsUnit = {};
      for (const prop in props) {
        propsUnit[prop] = props[prop];
      }
      return propsUnit;
    };
  }

  componentDidMount() {
    console.log('dispatch here?', this.props.dispatch);
    const { fetch } = this.props;
    fetch();
  }

  render() {
    console.log('2222', this.props);
    const basicinfo = {
      name: this.props.nick,
      email: this.props.email,
      phoneNum: this.props.phoneNum,
      snsBlog: this.props.snsBlog,
      snsGithub: this.props.snsGithub,
      picture: this.props.picture,
    };
    console.log('STATETE', this.state);

    return (
      <div className="usercontainer">
        <UserBasicInfo basicinfo={this.makePropsUnit(basicinfo)} />
        <UserEducation />
        <UserExperience />
        <UserProject />
        {/* <UserInterestField /> */}
        {/* <UserInterestTech /> */}
      </div>
    );
  }
}

// ////////////////////////////////////////////////////////////////////////
// //////////////////////// PROP TYPE VALIDATION //////////////////////////
// ////////////////////////////////////////////////////////////////////////

UserContainer.propTypes = {
  // profile: PropTypes.
  name: PropTypes.string,
  phoneNum: PropTypes.string,
  email: PropTypes.string,
  snsBlog: PropTypes.string,
  snsGithub: PropTypes.string,
  picture: PropTypes.string,
  beginFetch: PropTypes.func,
  isFetching: PropTypes.func,
};

UserContainer.defaultProps = {
  name: 'default name',
  phoneNum: 'default phoneNum',
  email: 'default email',
  snsBlog: 'default snsBlog',
  snsGithub: 'default snsGithub',
  picture: 'default img',
  beginFetch: () => {},
  isFetching: () => {},
};

// ////////////////////////////////////////////////////////////////////////
// /////////////////////// CONNECT REDUX - REACT //////////////////////////
// ////////////////////////////////////////////////////////////////////////

const mapStateToProps = state => {
  console.log('HHHAHAHHAHA', state);
  return {
    name: state.Profile.nick,
    email: state.Profile.email,
    phoneNum: state.Profile.phone,
    snsBlog: state.Profile.blog,
    snsGithub: state.Profile.github,
    picture: state.Profile.photo,
  };

  // return {
  //   name: state.fetchedProfile.items.nick,
  //   email: state.fetchedProfile.items.email,
  //   phoneNum: state.fetchedProfile.items.phone,
  //   snsBlog: state.fetchedProfile.items.blog,
  //   snsGithub: state.fetchedProfile.items.github,
  //   picture: state.fetchedProfile.items.photo,
  // };
};

const mapDispatchToProps = dispatch => {
  const boundActionCreators = bindActionCreators(
    {
      fetch: fetchUser,
    },
    dispatch,
  );
  const allActionProps = { ...boundActionCreators, dispatch };
  return allActionProps;
};

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(
//     {
//       fetchBegin: fetchUserProfileBegin,
//       fetch: fetchUser,
//     },
//     dispatch,
//   );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserContainer);
/* eslint-enable */
