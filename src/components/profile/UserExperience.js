import React, { Component } from 'react';
import { Button, Form, TextArea, Input } from 'semantic-ui-react';
import * as Styled from 'StyledComponents';
import ExperienceList from './ExperienceListItem';

class UserExperience extends Component {
  constructor() {
    super();
    this.state = {
      create: false,
      title: '',
      term: '',
      content: '',
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
    const { exps, funcs } = this.props;

    const onSubmitPost = e => {
      e.preventDefault();
      const { title, description, term, content } = this.state;
      const obj = {
        title,
        description,
        term,
        content,
      };
      this.onButtonClick();
      funcs.submit(obj, 'experience');
    };

    if (this.props.exps === undefined) {
      return <div>Experience loading...</div>;
    }

    return (
      <Styled.Wrapper>
        <Styled.Box column="1" row="1">
          <Styled.Header>Experience</Styled.Header>
          <Styled.Line />
        </Styled.Box>
        <Styled.BoxWithBackground column="2/5" row="1">
          {create ? (
            <Form onSubmit={onSubmitPost}>
              <Form.Field
                label="기업명"
                control={Input}
                onChange={e => this.onChange(e, 'title')}
              />
              <Form.Field
                label="기간"
                control={Input}
                onChange={e => this.onChange(e, 'term')}
              />
              <Form.Field
                label="역할"
                control={Input}
                onChange={e => this.onChange(e, 'description')}
              />
              <Form.Field
                control={TextArea}
                label="간단 설명"
                onChange={e => this.onChange(e, 'content')}
              />
              <Button compact content="취소" onClick={onButtonClick} />
              <Button compact content="추가" />
            </Form>
          ) : null}
          {exps.map(exp => (
            <ExperienceList key={exp.id} exp={exp} funcs={funcs} />
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

export default UserExperience;
