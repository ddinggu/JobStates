import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import queryString from 'query-string';

export default class GetToken extends Component {
  state = {
    getLoginData: false,
  };

  _getToken = () => {
    const { getLoginData } = this.state;
    const userInfo = queryString.parse(this.props.location.search);

    if (userInfo.token) {
      localStorage.setItem('token', userInfo.token);
      localStorage.setItem('nick', userInfo.nick);
      localStorage.setItem('profile', userInfo.profile);
      this.setState({
        getLoginData: !getLoginData,
      });
    } else {
      alert('로그인 에러! 다시 로그인 해주세요');
      this.setState({
        getLoginData: !getLoginData,
      });
    }
  };

  componentDidMount() {
    this._getToken();
  }

  render() {
    console.log('redirect');
    return <div>{this.state.getLoginData ? <div /> : <Redirect to="/" />}</div>;
  }
}
