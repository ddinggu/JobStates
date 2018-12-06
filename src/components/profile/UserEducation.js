import React, { Component } from 'react';
import {
 Button, Form, TextArea, Input 
} from 'semantic-ui-react';
import * as Styled from 'StyledComponents';
import EducationList from './EducationListItem';

export default class UserEducation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      create: false,
      organization: '',
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
    const { edu, funcs } = this.props;
    const onSubmitPost = (e) => {
      e.preventDefault();
      const { organization, term, content } = this.state;
      const obj = { organization, term, content };
      funcs.submit(obj, 'education');
      this.onButtonClick();
    };

    if (this.props.edu === undefined) {
      return <div>loading...</div>;
    }
    return (
      <Styled.Wrapper>
        <Styled.Box column="1" row="1">
          <Styled.Header>Education</Styled.Header>
          <Styled.Line />
        </Styled.Box>
        <Styled.BoxWithBackground column="2/5" row="1">
          {create ? (
            <Form onSubmit={onSubmitPost} className="create">
              <Form.Field
                label="학교"
                control={Input}
                onChange={e => this.onChange(e, 'organization')}
              />
              <Form.Field
                label="재학 기간"
                control={Input}
                onChange={e => this.onChange(e, 'term')}
              />
              <Form.Field
                label="간단 설명"
                control={TextArea}
                name="description"
                onChange={e => this.onChange(e, 'content')}
              />
              <Button
                compact
                content="취소"
                onClick={(e) => {
                  e.preventDefault();
                  onButtonClick();
                }}
              />
              <Button compact content="추가" />
            </Form>
          ) : null}
          {edu.map(eduProp => (
            <div>
              <EducationList key={eduProp.id} edu={eduProp} funcs={funcs} />
            </div>
          ))}
          <Styled.SpanPlusButton className="ui mini basic icon buttons">
            <button
              type="button"
              className="ui button"
              onClick={() => {
                onButtonClick();
              }}
            >
              <i className="plus icon" />
            </button>
          </Styled.SpanPlusButton>
        </Styled.BoxWithBackground>
      </Styled.Wrapper>
    );
  }
}
