import React, { Component } from 'react';
import queryString from 'query-string';

export default class GetToken extends Component {
  _getToken = () => {
    const userInfo = queryString.parse(this.props.location.search);

    if (userInfo.token) {
      localStorage.setItem('token', userInfo.token);
      localStorage.setItem('nick', userInfo.nick);
      localStorage.setItem('profile', userInfo.profile);
    } else {
      alert('로그인 에러! 다시 로그인 해주세요');
      window.location.href = '/login';
    }
  };

  async componentDidMount() {
    await this._getToken();
    window.location.href = '/joblist';
  }

  render() {
    return <div />;
  }
}
