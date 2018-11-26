import React, { Component } from 'react';
import {
  Container,
  Form,
  Input,
  Button,
  Grid,
  Segment,
} from 'semantic-ui-react';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { createButton } from 'react-social-login-buttons';
import kakaobtn from './Login_KAKAO.png';
import naverbtn from './Login_NAVER.png';
import naver from './icon.PNG';

export default class Login extends Component {
  render() {
    const confignaver = {
      text: 'Login with Naver',
      icon: 'naver',
      iconFormat: name => `fa fa-${name}`,
      style: { background: '#1EC800' },
      activeStyle: { background: '#1a9e00' },
    };

    const configkakao = {
      text: 'Login with Kakao',
      icon: 'kakao',
      iconFormat: name => `fa fa-${name}`,
      style: { background: '#ffde01' },
      activeStyle: { background: '#e2c400' },
    };

    const NaverLoginButton = createButton(confignaver);
    const KakaoLoginButton = createButton(configkakao);

    return (
      <Container>
        <Grid centered>
          <Grid.Row verticalAlign="middle" />
          <Grid.Row>
            <Grid.Column />
            <Grid.Column width={7}>
              {/* <img alt="naver login" src={naverbtn} />
              <img alt="kakao login" src={kakaobtn} /> */}

              <GoogleLoginButton align="center" />
              <NaverLoginButton align="center" />
              <KakaoLoginButton align="center" />
              {/* <Button color="test" fluid>
                구글 로그인
              </Button> */}
              {/* <Button fluid>카카오 로그인</Button>
              <Button fluid>네이버 로그인</Button> */}
            </Grid.Column>
            <Grid.Column />
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
