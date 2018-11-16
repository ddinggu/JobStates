import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class UserBasicInfo extends Component {
  render() {
    const { name, phoneNum, email, snsBlog, snsGithub, picture } = this.props;
    return (
      <div>
        <img alt="userpicture" src={picture} />
        <h3>이름</h3>
        <div>{name}</div>
        <hr />
        <h3>연락처</h3>
        <div>휴대폰 번호: {phoneNum}</div>
        <div>이메일 주소: {email}</div>
        <hr />
        <h3>SNS</h3>
        <div>대표 블로그: {snsBlog}</div>
        <div>대표 깃헙: {snsGithub}</div>
        {/* <hr />
        <h3>약력</h3>
        <hr />
        <h3>프로젝트</h3>
        <hr /> */}
      </div>
    );
  }
}

UserBasicInfo.propTypes = {
  // profile: PropTypes.
  name: PropTypes.string,
  phoneNum: PropTypes.string,
  email: PropTypes.string,
  snsBlog: PropTypes.string,
  snsGithub: PropTypes.string,
  picture: PropTypes.string,
};

UserBasicInfo.defaultProps = {
  name: 'default name',
  phoneNum: 'default phoneNum',
  email: 'default email',
  snsBlog: 'default snsBlog',
  snsGithub: 'default snsGithub',
  picture: 'default img',
};

const mapStateToProps = state => ({
  name: state.Profile.name,
  email: state.Profile.email,
  phoneNum: state.Profile.phoneNum,
  snsBlog: state.Profile.snsBlog,
  snsGithub: state.Profile.snsGithub,
  picture: state.Profile.picture,
});

export default connect(mapStateToProps)(UserBasicInfo);
