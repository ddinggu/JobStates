import React, { Component } from 'react';
import {
  Button,
  Container,
  Input,
  Form,
  TextArea,
  Header,
} from 'semantic-ui-react';
import ProjectListItem from './ProjectListItem';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

export default class UserProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      create: false,
      title: '',
      term: '',
      description: '',
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
    const onSubmitPost = (e) => {
      e.preventDefault();
      const { title, term, description } = this.state;
      const obj = { title, term, description };
      funcs.submit(obj, 'project');
      this.onButtonClick();
    };

    return (
      <Container className="UserProject">
        <div className="ui grid centered">
          <span className="column profilename two wide">
            <Header>Project</Header>
          </span>
          <div className="column UserProject read ten wide profilebox">
            {project.map(proj => (
              <div>
                <ProjectListItem key={proj.id} proj={proj} funcs={funcs} />
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
                  onChange={e => this.onChange(e, 'description')}
                />
                <Button
                  compact
                  content="취소"
                  onClick={(e) => {
                    e.preventDefault();
                    onButtonClick();
                  }}
                />
                <Button type="submit" compact content="추가" />
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
