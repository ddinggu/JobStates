import React, { Component } from 'react';
import { Container, Button, Grid } from 'semantic-ui-react';
import * as api from 'api/api';
import styled from 'styled-components';

const Button_st = styled.button`
  border-radius: 50px;
  border: none;
  height: 35px;
  margin: auto;
  color: white;
  width: 50%;
  background-color: ${props => (props.google ? '#dd4b39;' : props.kakao ? '#ffeb04;' : '#03c73c;')};
`;
const Anchor = styled(Button_st.withComponent('a'))``;

export default class Login extends Component {
  render() {
    return (
      <Container>
        <Grid centered>
          <Grid.Row verticalAlign="middle" />
          <Grid.Row>
            <Grid.Column />
            <Grid.Column width={7}>
              <Grid padded>
                <Anchor google href={`${api.URL}/auth/google`}>
                  구글로 로그인
                </Anchor>
                <Grid.Row>
                  <Button_st github href={`${api.URL}/auth/github`}>
                    깃헙으로 로그인
                  </Button_st>
                </Grid.Row>
                <Button_st kakao href={`${api.URL}/auth/kakao`}>
                  카카오로 로그인
                </Button_st>
              </Grid>
            </Grid.Column>
            <Grid.Column />
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
