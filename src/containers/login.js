import React, { Component } from 'react';
import {
  Container,
  Form,
  Input,
  Button,
  Grid,
  Segment,
} from 'semantic-ui-react';

export default class Login extends Component {
  render() {
    return (
      <Container>
        <Grid centered>
          <Grid.Row verticalAlign="middle">
            <Form>
              <Form.Field>
                <Input label=" email " />
              </Form.Field>
              <Form.Field>
                <Input label="password" type="password" />
              </Form.Field>
              <Button type="submit">Submit</Button>
            </Form>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column />
            <Grid.Column width={7}>
              <Button fluid>구글 로그인</Button>
              <Button fluid>카카오 로그인</Button>
              <Button fluid>네이버 로그인</Button>
            </Grid.Column>
            <Grid.Column />
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
