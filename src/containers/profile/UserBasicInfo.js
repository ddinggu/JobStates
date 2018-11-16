import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class UserBasicInfo extends Component {
  constructor() {
    super();
    this.state = {
      status: true, // true가 '정보 확인 ' false가 '정보 추가/수정'
    };

    this.onButtonClick = () => {
      const { status } = this.state;
      this.setState({
        status: !status,
      });
    };
  }

  render() {
    const { name, phoneNum, email, snsBlog, snsGithub, picture } = this.props;
    const { onButtonClick } = this;
    const { status } = this.state;

    // const createupdateDiv = {
    //   display: 'none',
    // };

    return (
      <div className="UserBasicInfo">
        <img alt="userpicture" src={picture} />
        <hr />
        <button type="button" onClick={onButtonClick}>
          +
        </button>
        <div
          className="readUserBasicInfo"
          style={
            status
              ? null
              : {
                  display: 'none',
                }
          }
        >
          <h3>이름</h3>
          <div>{name}</div>
          <h3>연락처</h3>
          <div>휴대폰 번호: {phoneNum}</div>
          <div>이메일 주소: {email}</div>
          <h3>SNS</h3>
          <div>대표 블로그: {snsBlog}</div>
          <div>대표 깃헙: {snsGithub}</div>
        </div>
        <div
          className="createUserBasicInfo"
          style={
            status
              ? {
                  display: 'none',
                }
              : null
          }
        >
          <hr />
          <h3>이름</h3>
          <div>
            <form>
              <input />
            </form>
          </div>
          <h3>연락처</h3>
          <form>
            휴대폰 번호: <input />
            <br />
            이메일 주소: <input />
          </form>
          <h3>SNS</h3>
          <form>
            대표 블로그: <input />
            <br />
            대표 깃헙: <input />
          </form>
        </div>
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
