import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CommonLoading from 'components/common/Loading';
import UserInterests from 'components/profile/UserInterests';
import HaveTech from 'components/profile/HaveTech';
import UserBasicInfo from 'components/profile/UserBasicInfo';
import UserEducation from 'components/profile/UserEducation';
import UserProject from 'components/profile/UserProject';
import UserExperience from 'components/profile/UserExperience';
import {
  fetchUser,
  onSubmitPostUser,
  onSubmitPatchUser,
  deleteUserProfile,
} from 'actions/action_userprofile';
import './UserContainer.css';
import UserImagePortal from 'containers/profile/UserImagePortal';

class UserContainer extends Component {
  componentDidMount() {
    const { fetch } = this.props;
    fetch();
  }

  render() {
    if (this.props.loading) {
      return (
        <>
          <CommonLoading />
        </>
      );
    }

    const basicinfo = {
      id: this.props.id,
      name: this.props.name,
      email: this.props.email,
      phoneNum: this.props.phoneNum,
      snsBlog: this.props.snsBlog,
      snsGithub: this.props.snsGithub,
      picture: this.props.picture,
    };

    const funcs = {
      submit: this.props.submit,
      delete: this.props.delete,
      update: this.props.update,
    };

    return (
      <div style={{ margin: '0px 100px;' }}>
        <UserImagePortal />
        <UserBasicInfo basicinfo={basicinfo} funcs={funcs} />
        <UserEducation edu={this.props.education} funcs={funcs} />
        <UserExperience exps={this.props.experience} funcs={funcs} />
        <UserProject project={this.props.project} funcs={funcs} />
        <HaveTech haveTech={this.props.haveTech} funcs={funcs} />
        <UserInterests
          userFavField={this.props.userFavField}
          userFavTech={this.props.userFavTech}
          funcs={funcs}
        />
      </div>
    );
  }
}

// ////////////////////////////////////////////////////////////////////////
// //////////////////////// PROP TYPE VALIDATION //////////////////////////
// ////////////////////////////////////////////////////////////////////////

UserContainer.propTypes = {
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
  loading: true,
  beginFetch: () => {},
  isFetching: () => {},
};

// ////////////////////////////////////////////////////////////////////////
// /////////////////////// CONNECT REDUX - REACT //////////////////////////
// ////////////////////////////////////////////////////////////////////////

const mapStateToProps = (state) => {
  if (state.fetchedProfile.items !== null) {
    return {
      id: state.fetchedProfile.items.user.id,
      name: state.fetchedProfile.items.user.name,
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
      haveTech: state.fetchedProfile.items.user.haveTech,
      loading: state.fetchedProfile.loading,
    };
  }
};

const mapDispatchToProps = (dispatch) => {
  const boundActionCreators = bindActionCreators(
    {
      fetch: fetchUser,
      submit: onSubmitPostUser,
      update: onSubmitPatchUser,
      delete: deleteUserProfile,
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
