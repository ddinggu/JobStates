import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from 'actions/action_authenticate';
import { unsubscribePush } from 'utils/webpush';
import { push } from 'connected-react-router';

class Logout extends Component {
  componentDidMount() {
    unsubscribePush();
    const { push, logout } = this.props;
    alert('로그아웃 되었습니다.');
    logout();
    push('/login');
  }

  render() {
    return <div />;
  }
}

Logout.propTypes = {
  push: PropTypes.func,
  logout: PropTypes.func,
};

export default connect(
  null,
  { logout, push },
)(Logout);
