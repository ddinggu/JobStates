import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Image, Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import options from 'utils/headerHelper';
import logout from 'utils/logout';
import './HeaderContainer.css';
import * as Styled from 'StyledComponents';

class Header extends Component {
  state = {
    optionValue: false,
  };

  _onHandleChange = async (e, { value }) => {
    await this.setState({ value });
    if (this.state.value === 'signout') {
      logout();
    }
  };

  render() {
    const { push } = this.props;
    const storeProfile = localStorage.getItem('profile') || '';
    const userProfileImage =
      storeProfile.slice(-3) === '?sz' ? `${storeProfile}=50` : storeProfile;

    const trigger = (
      <Image
        className="nav-userprofile"
        circular
        src={userProfileImage || './image/default_user.png'}
        size="mini"
        style={{ marginRight: '3rem' }}
      />
    );

    const loginButton = (
      <div className="login-btn" onClick={() => push('/login')}>
        로그인
      </div>
    );

    return (
      <Styled.HeaderContainer>
        <Styled.NavLogo onClick={() => push('/')}>JOB | STATES</Styled.NavLogo>
        <Styled.NavMenu role="navigation">
          <span
            className="main-nav-link content-mypage"
            onClick={() => push('/user')}
          >
            이력서
          </span>
          <span
            className="main-nav-link content-joblist"
            onClick={() => push('/joblist')}
          >
            스크랩
          </span>
          <span
            className="main-nav-link content-analysis"
            onClick={() => push('/analysis')}
          >
            대시보드
          </span>
        </Styled.NavMenu>
        <Styled.NavAccount>
          {localStorage.getItem('token') ? (
            <Dropdown
              trigger={trigger}
              pointing="top left"
              icon={null}
              options={options}
              onChange={this._onHandleChange}
            />
          ) : (
            loginButton
          )}
        </Styled.NavAccount>
      </Styled.HeaderContainer>
    );
  }
}

Header.propTypes = {
  push: PropTypes.func,
};

export default connect(
  null,
  { push },
)(Header);
