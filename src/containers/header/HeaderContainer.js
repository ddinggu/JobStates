import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Image, Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import options from 'utils/headerHelper';
import './HeaderContainer.css';

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
      <div className="nav-container">
        <span className="nav-logo" onClick={() => push('/joblist')}>
          JOB | STATES
        </span>
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
        {/* <Image
          className="nav-userprofile"
          circular
          src={userProfileImage}
          size="mini"
          style={{ marginRight: '3rem' }}
          onClick={() => alert('hello!')}
        /> */}
        {/* <div className="nav-userdetail">
          <div style={{ display: 'inline-block' }}>
            <Image circular src={userProfileImage} size="mini" />
          </div>
          <div style={{ display: 'inline-block' }}>
            <h4>{localStorage.getItem('nick')}</h4>
            <div style={{ display: 'inline-block' }}>123</div>
            <div style={{ display: 'inline-block' }}>456</div>
          </div>
        </div> */}
        <Dropdown
          trigger={trigger}
          pointing="top left"
          icon={null}
          options={options}
          onChange={this._onHandleChange}
        />
      </div>
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
