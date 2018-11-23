import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container } from 'semantic-ui-react';
import UserBasicInfo from '../../components/profile/UserBasicInfo';
import UserEducation from '../../components/profile/UserEducation';
import UserProject from '../../components/profile/UserProject';
import UserExperience from '../../components/profile/UserExperience';
import {
  fetchUser,
  onSubmitPostUser,
  deleteUserProfile,
  onSubmitPatchUser,
} from '../../actions/action_userprofile';
import UserInterestTech from './UserInterestTech';
import UserInterestField from './UserInterestField';
import './UserContainer.css';

class UserContainer extends Component {
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
      updateField: this.props.updateField,
      submit: this.props.submit,
    };

    const funcs = {
      updateField: this.props.updateField,
      submit: this.props.submit,
      delete: this.props.delete,
      update: this.props.update,
    };

    return (
      <Container className="usercontainer">
        <UserBasicInfo basicinfo={basicinfo} funcs={funcs} />
        <UserEducation edu={this.props.education} funcs={funcs} />
        <UserExperience exps={this.props.experience} funcs={funcs} />
        <UserProject project={this.props.project} funcs={funcs} />
        <UserInterestTech userFavTech={this.props.userFavTech} funcs={funcs} />
        <UserInterestField
          userFavField={this.props.userFavField}
          funcs={funcs}
        />
      </Container>
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

const mapStateToProps = (state) => {
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
      userFavTech: state.fetchedProfile.items.user.favoriteTech,
      userFavField: state.fetchedProfile.items.user.favoriteCategory,
    };
  }
};

const mapDispatchToProps = (dispatch) => {
  const boundActionCreators = bindActionCreators(
    {
      fetch: fetchUser,
      submit: onSubmitPostUser,
      delete: deleteUserProfile,
      update: onSubmitPatchUser,
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
