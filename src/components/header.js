import React, { Component } from 'react';

import './header.css';

class Header extends Component {
  render() {
    return (
      <div className="nav-container">
        <span className="nav-logo">JOB STATES</span>
        {/* <a className="logo" /> 나중에 <a href> 태그로 수정하자 (+) nav-link도 각각의 도메인으로 연결 */}
        <nav role="navigation" className="nav-menu">
          <span className="main-nav-link content-mypage">마이페이지</span>
          <span className="main-nav-link content-joblist">정리페이지</span>
          <span className="main-nav-link content-analysis">분석</span>
          <span className="main-nav-link content-login">로그인</span>
        </nav>
      </div>
    );
  }
}

export default Header;
