import React, { Component } from 'react';
import { Container, Button, Grid } from 'semantic-ui-react';
import * as api from 'api/api';
import './login.css';

// import kakaobtn from './Login_KAKAO.png';
// import naverbtn from './Login_NAVER.png';
// import naver from './icon.PNG';

export default class Login extends Component {
  render() {
    return (
      <div id="container-login">
        <Container>
          <Grid centered>
            <Grid.Row verticalAlign="middle" />
            <Grid.Row>
              <Grid.Column />
              <Grid.Column width={7}>
                {/* <img alt="naver login" src={naverbtn} />
              <img alt="kakao login" src={kakaobtn} /> */}
                <Grid padded>
                  <Button
                    align="center"
                    href={`${api.URL}/auth/google`}
                    fluid
                    className="loginbtn"
                    id="google"
                  >
                    구글로 로그인
                  </Button>
                  <Grid.Row>
                    <Button
                      align="center"
                      href={`${api.URL}/auth/github`}
                      fluid
                      className="loginbtn"
                      id="naver"
                    >
                      깃헙으로 로그인
                    </Button>
                  </Grid.Row>
                  <Button
                    align="center"
                    href={`${api.URL}/auth/kakao`}
                    fluid
                    className="loginbtn"
                    id="kakao"
                  >
                    카카오로 로그인
                  </Button>
                </Grid>

                {/* <Button color="test" fluid>
                구글 로그인
              </Button> */}
                {/* <Button fluid>카카오 로그인</Button>
              <Button fluid>네이버 로그인</Button> */}
                {/* <Segment></Segment> */}
              </Grid.Column>
              <Grid.Column />
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}
