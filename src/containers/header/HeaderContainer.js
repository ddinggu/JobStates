import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Image, Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import options from 'utils/headerHelper';
import './HeaderContainer.css';
import * as Styled from 'StyledComponents';

class Header extends Component {
  state = {
    optionValue: false,
  };

  _onHandleChange = async (e, { value }) => {
    await this.setState({ value });
    if (this.state.value === 'signout') {
      this.props.push('/logout');
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
        src={userProfileImage}
        size="mini"
        style={{ marginRight: '3rem' }}
      />
    );

    return (
      <Styled.HeaderContainer>
        <Styled.BoxWrapper>
          <Styled.Box column="1">
            <Styled.Nav onClick={() => push('/joblist')}>
              JOB | STATES
            </Styled.Nav>
          </Styled.Box>
          <Styled.Box colum="2">
            <nav role="navigation" className="nav-menu">
              <span
                className="main-nav-link content-mypage"
                onClick={() => push('/user')}
              >
                마이페이지
              </span>
              <span
                className="main-nav-link content-joblist"
                onClick={() => push('/joblist')}
              >
                정리페이지
              </span>
              <span
                className="main-nav-link content-analysis"
                onClick={() => push('/analysis')}
              >
                분석
              </span>
            </nav>
          </Styled.Box>
          <Styled.Box column="3">
            <Dropdown
              trigger={trigger}
              pointing="top left"
              icon={null}
              options={options}
              onChange={this._onHandleChange}
            />
          </Styled.Box>
        </Styled.BoxWrapper>
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
