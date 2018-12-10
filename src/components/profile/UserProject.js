import React, { Component } from 'react';
import { Button, Input, Form, TextArea } from 'semantic-ui-react';
import * as Styled from 'StyledComponents';
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
    const onSubmitPost = e => {
      e.preventDefault();
      const { title, term, description } = this.state;
      const obj = { title, term, description };
      funcs.submit(obj, 'project');
      this.onButtonClick();
    };

    return (
      <Styled.Wrapper>
        <Styled.Box column="1" row="1">
          <Styled.Header>Project</Styled.Header>
          <Styled.Line />
        </Styled.Box>
        <Styled.BoxWithBackground column="2/5" row="1">
          {create ? (
            <Form onSubmit={onSubmitPost}>
              <br />
              <Form.Field>
                <label>프로젝트명</label>
                <input size="mini" onChange={e => this.onChange(e, 'title')} />
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
                onClick={e => {
                  e.preventDefault();
                  onButtonClick();
                }}
              />
              <Button type="submit" compact content="추가" />
            </Form>
          ) : null}
          {project.map(proj => (
            <div>
              <ProjectListItem key={proj.id} proj={proj} funcs={funcs} />
            </div>
          ))}
          <Styled.SpanPlusButton className="ui mini basic icon buttons">
            <button type="button" className="ui button" onClick={onButtonClick}>
              <i className="plus icon" />
            </button>
          </Styled.SpanPlusButton>
        </Styled.BoxWithBackground>
      </Styled.Wrapper>
    );
  }
}
