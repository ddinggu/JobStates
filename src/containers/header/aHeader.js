import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import './aHeader.css';

class Header extends Component {
  constructor(props) {
    super(props);

    const { fetchHeader } = this.props;
    fetchHeader();
  }

  render() {
    const { header } = this.props;
    return (
      <div className="nav-container">
        <span className="nav-logo">JOB | STATES</span>
        {/* <a className="logo" /> 나중에 <a href> 태그로 수정하자 (+) nav-link도 각각의 도메인으로 연결 */}
        <nav role="navigation" className="nav-menu">
          <span className="main-nav-link content-mypage">마이페이지</span>
          <span className="main-nav-link content-joblist">정리페이지</span>
          <span className="main-nav-link content-analysis">분석</span>
          <span className="main-nav-link content-login">로그아웃</span>
        </nav>
        <span className="nav-profile">
          <span className="nav-profile img">
            <img
              src={header[0] ? header[0].profile : null}
              alt=""
              height="50"
              width="35"
            />
          </span>
          <span className="nav-profile nick">
            {header[0] ? header[0].nick : null}
          </span>
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
