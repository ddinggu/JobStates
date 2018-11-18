import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class UserBasicInfo extends Component {
  constructor() {
    super();
    this.state = {
      status: true, // true : 정보 확인 뷰 & false : 정보 추가/수정 뷰
    };

    this.onButtonClick = () => {
      const { status } = this.state;
      this.setState({
        status: !status,
      });
    };
  }

  /* eslint-disable  */

  render() {
    const {
      name,
      phoneNum,
      email,
      snsBlog,
      snsGithub,
      picture,
    } = this.props.basicinfo;

    /* eslint-enable */

    const { onButtonClick } = this;
    const { status } = this.state;

    return (
      <div className="UserBasicInfo">
        <img alt="userpicture" src={picture} />
        <hr />
        <button type="button" onClick={onButtonClick}>
          +
        </button>
        <div
          className="read UserBasicInfo"
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
          className="create UserBasicInfo"
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

export default connect()(UserBasicInfo);
