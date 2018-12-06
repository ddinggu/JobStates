import React, { Component, Fragment } from 'react';
import { Button, Form, TextArea, Input } from 'semantic-ui-react';
import * as Styled from 'StyledComponents';

export default class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      id: props.exp.id,
      title: props.exp.title,
      term: props.exp.term,
      content: props.exp.content,
      description: props.exp.description,
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
    const { id, edit, title, term, content, description } = this.state;

    const { funcs } = this.props;

    const onSubmitPatch = e => {
      e.preventDefault();

      const obj = {
        id,
        term,
        title,
        content,
        description,
      };
      funcs.update(obj, 'experience');
      this.onButtonClick();
    };

    const onDelete = () => {
      const obj = {
        id,
      };
      funcs.delete(obj, 'experience');
    };

    return (
      <Fragment>
        {edit ? null : (
          <div>
            <Styled.BoxWrapper>
              <Styled.Box column="2" row="1">
                <b>{title}</b> <span>({term})</span>
              </Styled.Box>

              <Styled.Box column="1/4" row="2">
                <div style={{ marginBottom: '1rem' }}>{description}</div>
                <li>{content}</li>
              </Styled.Box>

              <Styled.Box column="2/3" row="3">
                <Styled.BottomLine />
              </Styled.Box>
              <Styled.SpanEditButton className="ui mini basic icon buttons">
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
              </Styled.SpanEditButton>
            </Styled.BoxWrapper>
          </div>
        )}

        <br />
        {edit ? (
          <div>
            <Form className="edit" onSubmit={onSubmitPatch}>
              <Form.Field
                label="회사명"
                control={Input}
                onChange={e => this.onChange(e, 'title')}
                value={title}
              />
              <Form.Field
                label="근무 기간"
                control={Input}
                onChange={e => this.onChange(e, 'term')}
                value={term}
              />
              <Form.Field
                label="간단 설명"
                control={TextArea}
                name="description"
                onChange={e => this.onChange(e, 'description')}
                value={description}
              />
              <Form.Field
                label="근무 내용"
                control={TextArea}
                name="content"
                onChange={e => this.onChange(e, 'content')}
                value={content}
              />
              <Button
                compact
                content="취소"
                onClick={e => {
                  e.preventDefault();
                  this.onButtonClick();
                }}
              />
              <Button compact content="추가" />
            </Form>
          </div>
        ) : null}
      </Fragment>
    );
  }
}
