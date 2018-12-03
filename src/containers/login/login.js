import React, { Component } from 'react';
import * as api from 'api/api';
import styled from 'styled-components';

// ============= Styled Components ============= //
const Button_st = styled.button`
  border-radius: 50px;
  border: none;
  height: 35px;
  width: 300px;
  color: black;
  background-color: ${props => (props.google ? '#dd4b39;' : props.kakao ? '#ffeb04;' : '#03c73c;')};
  display: inline-block;
`;
const Anchor = styled(Button_st.withComponent('a'))``;

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 50px 35px 35px 35px;
  grid-gap: 5px;
`;

const Box = styled.div`
  display: inline-block;
  text-align: center;
  line-height: 35px;
  grid-column: ${props => props.column};
  grid-row: ${props => props.row};
`;

// ============================================= //

export default class Login extends Component {
  render() {
    return (
      <Wrapper>
        <Box column="1/2" row="2/3">
          <Anchor google href={`${api.URL}/auth/google`}>
            구글로 로그인
          </Anchor>
        </Box>
        <Box column="1/2" row="3/4">
          <Anchor github href={`${api.URL}/auth/github`}>
            깃헙으로 로그인
          </Anchor>
        </Box>
        <Box column="1/2" row="4/5">
          <Anchor kakao href={`${api.URL}/auth/kakao`}>
            카카오로 로그인
          </Anchor>
        </Box>
      </Wrapper>
    );
  }
}
