import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { Image, Dropdown } from 'semantic-ui-react';

import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: false,
      redirect: false,
    };
  }

  componentDidMount() {
    const { fetchHeader } = this.props;
    fetchHeader();
  }

  // _onDropdownClick = async () => {
  //  await this.setState({ optionValue: true });
  //   console.log(this.state.optionValue);
  // };

  _onHandleChange = async (e, { value }) => {
    await this.setState({ value });
    if (this.state.value === 'signout') {
      await this.setState({ redirect: true });
    }
    // console.log('value state::;', this.state.value);
    // console.log('redirect state::', this.state.redirect);
  };

  render() {
    const { header } = this.props;
    const { redirect } = this.state;
    if (header.length === 0) {
      return <div>loading..</div>;
    }
    if (redirect === true) {
      return <Redirect to="/" />;
    }

    const trigger = (
      <Image
        circular
        src={header[0].profile}
        size="tiny"
        style={{ marginRight: '3rem' }}
      />
    );

    const options = [
      { key: 'user', text: 'Account', icon: 'user' },
      { key: 'settings', text: 'Settings', icon: 'settings' },
      { key: 'sign-out', text: 'Sign Out', value: 'signout', icon: 'sign out' },
    ];

    return (
      <div className="nav-container">
        <Link exact to="/">
          <span className="nav-logo">JOB | STATES</span>
        </Link>
        {/* <a className="logo" /> 나중에 <a href> 태그로 수정하자 (+) nav-link도 각각의 도메인으로 연결 */}
        <nav role="navigation" className="nav-menu">
          <Link to="/user">
            <span className="main-nav-link content-mypage">마이페이지</span>
          </Link>
          <Link to="/joblist">
            <span className="main-nav-link content-joblist">정리페이지</span>
          </Link>
          <Link to="/analysis">
            <span className="main-nav-link content-analysis">분석</span>
          </Link>
          {/* <span className="main-nav-link content-login">로그아웃</span> */}
        </nav>
        <Dropdown
          trigger={trigger}
          pointing="top left"
          icon={null}
          options={options}
          onChange={this._onHandleChange}
          onClick={this._onDropdownClick}
        />
        <span className="nav-profile">
          {/* <span className="nav-profile img">
            <img
              src={header[0] ? header[0].profile : null}
              alt=""
              height="50"
              width="35"
            />
          </span> */}
          {/* <span className="nav-profile nick">
            {header[0] ? header[0].nick : null}
          </span> */}
        </span>
      </div>
    );
  }
}

Header.propTypes = {
  fetchHeader: PropTypes.func.isRequired,
  header: PropTypes.instanceOf(Array).isRequired,
};

Header.defaultProp = {
  fetchHeader: () => {},
  header: [],
};

export default Header;
