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
    const { fetch } = this.props;
    fetch();
  }

  render() {
    if (this.props.name === 'default name') {
      return (
        <div>
          <img src="https://i.gifer.com/4V0b.gif" />
        </div>
      );
    }
    const basicinfo = {
      name: this.props.name,
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
        <UserEducation edu={this.props.education} />
        <UserExperience exp={this.props.experience} />
        <UserProject project={this.props.project} />
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

  if (!(state.fetchedProfile.items === null)) {
    return {
      name: state.fetchedProfile.items.user.nick,
      email: state.fetchedProfile.items.user.email,
      phoneNum: state.fetchedProfile.items.user.phone,
      snsBlog: state.fetchedProfile.items.user.blog,
      snsGithub: state.fetchedProfile.items.user.github,
      picture: state.fetchedProfile.items.user.photo,
      education: state.fetchedProfile.items.user.education,
      experience: state.fetchedProfile.items.user.experience,
      project: state.fetchedProfile.items.user.project,
    };
  }
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserContainer);
/* eslint-enable */
