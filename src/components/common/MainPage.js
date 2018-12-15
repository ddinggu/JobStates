import React from 'react';
import './MainPage.css';
import { subscribePush } from 'utils/webpush';

const isLogined = localStorage.getItem('token');

const MainPage = () => (
  <>
    <section id="explication">
      <div className="main-container">
        <header className="main-header">
          <div className="main-line" />
          <h2>나만의 채용공고 정리</h2>
          <p className="main-subtitle">
            여러 사이트에 분산된 채용공고들을 저희 사이트를 통해 정리하세요!
          </p>
        </header>
        <p style={{ textAlign: 'right' }} />
      </div>
    </section>

    <section id="explication-kakao" className="main-kakao">
      <div className="main-container">
        <img
          src="https://cdn-images-1.medium.com/max/550/1*yJCtKgPdIk5lcEPkxBf86Q.png"
          alt=""
        />
        <header className="main-header">
          <div className="main-line" />
          <h2>카카오톡 플러스 친구</h2>
          <p className="main-subtitle">
            JobStates 카카오톡 플러스 친구를 통해 관심분야에 따른 뉴스를
            받아보세요!
          </p>
        </header>
      </div>
    </section>

    <section id="explication-webpush">
      <div className="main-container">
        <header className="main-header">
          <div className="main-line" />
          <h2>웹 푸시 알람</h2>
          <p className="main-subtitle">
            웹 푸시 알람을 통해 저희 사이트에 방문하지 않더라도 매일 새로운
            채용공고들을 받아볼 수 있습니다!
          </p>
          <div
            className="webpush-btn"
            onClick={
              isLogined ? subscribePush : () => alert('로그인 해주세요!')
            }
          >
            구독하기
          </div>
        </header>
        <div className="main-image-container">
          <img
            src="./image/webpush_default.jpg"
            className="main-image"
            alt=""
          />
        </div>
      </div>
    </section>
  </>
);

export default MainPage;
