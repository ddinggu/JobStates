import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';
import { authCheck } from 'actions/action_authenticate';

export default (ComposedComponent) => {
  class Authenticate extends Component {
    componentDidMount() {
      this.checkAndRedirect();
    }

    componentWillUpdate(nextProps) {
      const { redirect } = this.props;
      if (!nextProps.isAuthenticated) {
        alert('다시 로그인 해주세요!');
        redirect();
      }
    }

    checkAndRedirect() {
      const { redirect, tokenvaildation } = this.props;
      if (!localStorage.getItem('token')) {
        alert('로그인이 필요합니다!');
        redirect();
      } else {
        tokenvaildation();
      }
    }

    render() {
      const { isAuthenticated } = this.props;

      return <>{isAuthenticated ? <ComposedComponent /> : null}</>;
    }
  }

  const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
  });

  const mapDispatchToProps = dispatch => bindActionCreators(
      {
        redirect: () => push('/login'),
        tokenvaildation: () => authCheck(),
      },
      dispatch,
    );

  Authenticate.propTypes = {
    isAuthenticated: PropTypes.bool,
    redirect: PropTypes.func,
    authCheck: PropTypes.func,
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Authenticate);
};
