/* eslint-disable */
import React, { Component } from 'react';
import {
  Button,
  Container,
  Grid,
  Input,
  Form,
  TextArea,
} from 'semantic-ui-react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

class UserProject extends Component {
  constructor() {
    super();
    this.state = {
      create: false,
      title: '',
      term: '',
      content: '',
    };

    this.onButtonClick = () => {
      const { create } = this.state;
      this.setState({
        create: !create,
      });
    };
    this.onChange = (e, attr) => {
      this.setState({
        [attr]: e.target.value,
      });
    };
  }

  render() {
    const { onButtonClick } = this;
    const { create } = this.state;
    const { project, funcs } = this.props;

    const onSubmitPost = e => {
      e.preventDefault();
      const { title, term, content } = this.state;
      const obj = { title, term, content };
      // console.log(this.state);
      funcs.submit(obj);
    };

    const GridTest = (projName, button, description) => (
      <Grid>
        <Grid.Row>
          <Grid.Column>1</Grid.Column>
          <Grid.Column>projName</Grid.Column>
          <Grid.Column>button</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <span>description</span>
        </Grid.Row>
      </Grid>
    );

    const buttons = proj => (
      <span className="ui mini basic icon buttons">
        <button type="button" className="ui button">
          <i className="edit icon" />
        </button>
        <button
          type="button"
          className="ui button"
          onClick={() => funcs.delete(proj)}
        >
          <i className="delete icon" />
        </button>
      </span>
    );

    return (
      <Container className="UserProject">
        <div className="ui grid centered">
          <span className="column profilename two wide">Project</span>
          <div className="column UserProject read ten wide profilebox">
            {project.map(proj => (
              <div>
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={12} txtAlign="left">
                      {' '}
                      <div>
                        <b>{proj.title}</b>
                      </div>
                      <div>{proj.description}</div>
                    </Grid.Column>
                    <Grid.Column width={4} textAlign="right">
                      {' '}
                      <span className="ui mini basic icon buttons">
                        <button type="button" className="ui button">
                          <i className="edit icon" />
                        </button>
                        <button
                          type="button"
                          className="ui button"
                          onClick={() => funcs.delete({ proj })}
                        >
                          <i className="delete icon" />
                        </button>
                      </span>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </div>
            ))}
            <div className="row" style={create ? null : { display: 'none' }}>
              <Form onSubmit={onSubmitPost}>
                <br />
                <Form.Field>
                  <label>프로젝트명</label>
                  <input
                    size="mini"
                    onChange={e => this.onChange(e, 'title')}
                  />
                </Form.Field>
                <Form.Field>
                  <label>프로젝트 기간</label>
                  <Input size="mini" onChange={e => this.onChange(e, 'term')} />
                </Form.Field>
                <Form.Field
                  control={TextArea}
                  label="간단 설명"
                  onChange={e => this.onChange(e, 'content')}
                />
                <Button
                  compact
                  content="취소"
                  onClick={e => {
                    e.preventDefault();
                    onButtonClick();
                  }}
                />
                <Button compact content="추가" />
              </Form>
            </div>
          </div>
          <span className="column two wide">
            <span className="ui mini basic icon buttons">
              <button
                type="button"
                className="ui button"
                onClick={onButtonClick}
              >
                <i className="plus icon" />
              </button>
            </span>
          </span>
        </div>
      </Container>
    );
  }
}

export default UserProject;

/* eslint-enable */
