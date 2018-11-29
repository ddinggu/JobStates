import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import queryString from 'query-string';

export default class GetToken extends Component {
  state = {
    getLoginData: false,
  };

  _getToken = () => {
    console.log('login data in params', this.props.location.search);
    const userInfo = queryString.parse(this.props.location.search);
    console.log('parsed login data', userInfo);
    console.log('token in parsed login data', userInfo.token);

    if (userInfo.token) {
      localStorage.setItem('token', userInfo.token);
      localStorage.setItem('nick', userInfo.nick);
      localStorage.setItem('profile', userInfo.profile);
    } else alert('에러!!');
  };

  componentDidMount() {
    const { getLoginData } = this.state;
    this._getToken();
    this.setState({
      getLoginData: !getLoginData,
    });
  }

  render() {
    console.log('redirect');
    return <div>{this.state.getLoginData ? <div /> : <Redirect to="/" />}</div>;
  }
}
