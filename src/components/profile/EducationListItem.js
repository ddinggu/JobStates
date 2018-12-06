import React, { Component, Fragment } from 'react';
import {
 Button, Form, TextArea, Input 
} from 'semantic-ui-react';
import * as Styled from 'StyledComponents';

export default class EducationList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      id: props.edu.id,
      organization: props.edu.organization,
      term: props.edu.term,
      content: props.edu.content,
    };

    this.onButtonClick = () => {
      const { edit } = this.state;
      this.setState({
        edit: !edit,
      });
    };

    this.onChange = (e, attr) => {
      this.setState({
        [attr]: e.target.value,
      });
    };
  }

  render() {
    const { edu, funcs } = this.props;
    const {
 edit, organization, term, content, id 
} = this.state;

    const onSubmitPatch = () => {
      const obj = {
        id,
        organization,
        term,
        content,
      };
      funcs.update(obj, 'education');
      this.onButtonClick();
    };

    const onDelete = () => {
      const obj = {
        id,
      };
      funcs.delete(obj, 'education');
    };

    return (
      <Fragment>
        {!edit ? (
          <div>
            <Styled.BoxWrapper>
              <Styled.Box column="2" row="1">
                <b>{edu.organization}</b>
                &nbsp;<span>({edu.term})</span>
              </Styled.Box>
              <Styled.Box column="1/4" row="2">
                <li>{edu.content}</li>
              </Styled.Box>
              <Styled.Box column="2/3" row="3">
                <Styled.BottomLine />
              </Styled.Box>
              <Styled.SpanEditButtonList className="ui mini basic icon buttons">
                <button
                  type="button"
                  className="ui button"
                  onClick={this.onButtonClick}
                >
                  <i className="edit icon" />
                </button>
                <button type="button" className="ui button" onClick={onDelete}>
                  <i className="delete icon" />
                </button>
              </Styled.SpanEditButtonList>
            </Styled.BoxWrapper>
          </div>
        ) : null}

        {edit ? (
          <Form onSubmit={onSubmitPatch} className="edit">
            <Form.Field
              label="학교"
              control={Input}
              onChange={e => this.onChange(e, 'organization')}
              value={organization}
            />
            <Form.Field
              label="재학 기간"
              control={Input}
              onChange={e => this.onChange(e, 'term')}
              value={term}
            />
            <Form.Field
              label="간단 설명"
              control={TextArea}
              name="content"
              onChange={e => this.onChange(e, 'content')}
              value={content}
            />
            <Button
              compact
              content="취소"
              onClick={(e) => {
                e.preventDefault();
                this.onButtonClick();
              }}
            />
            <Button compact content="추가" />
          </Form>
        ) : null}
      </Fragment>
    );
  }
}
