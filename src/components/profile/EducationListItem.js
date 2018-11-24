import React, { Component } from 'react';
import { Button, Container, Form, TextArea, Input } from 'semantic-ui-react';

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
    const { edit, organization, term, content, id } = this.state;

    const onSubmitPatch = e => {
      e.preventDefault();
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
      <Container>
        <div className="row">
          <div>
            <div className="read" style={edit ? { display: 'none' } : null}>
              <div className="row">
                <div className="ui grid">
                  <div className="column four wide left aligned" />
                  <div className="column eight wide center aligned">
                    <b>{edu.organization}</b>
                    &nbsp;<span>({edu.term})</span>
                  </div>
                  <div className="column four wide right aligned">
                    <span className="ui mini basic icon buttons">
                      <button
                        type="button"
                        className="ui button"
                        onClick={this.onButtonClick}
                      >
                        <i className="edit icon" />
                      </button>
                      <button
                        type="button"
                        className="ui button"
                        onClick={onDelete}
                      >
                        <i className="delete icon" />
                      </button>
                    </span>
                  </div>
                </div>
              </div>
              <div className="row">
                <li>{edu.content}</li>
              </div>
            </div>
            {edit ? (
              <div>
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
                    onClick={e => {
                      e.preventDefault();
                      this.onButtonClick();
                    }}
                  />
                  <Button compact content="추가" />
                </Form>
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    );
  }
}
