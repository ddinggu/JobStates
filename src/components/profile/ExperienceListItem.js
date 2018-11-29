import React, { Component } from 'react';
import {
 Button, Container, Form, TextArea, Input 
} from 'semantic-ui-react';

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
    const {
 id, edit, title, term, content, description 
} = this.state;

    const { funcs } = this.props;

    const onSubmitPatch = (e) => {
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
      <Container>
        <div className="">
          {edit ? null : (
            <div>
              <div className="row">
                <div className="ui grid">
                  <div className="column four wide left aligned" />
                  <div className="column eight wide center aligned">
                    <b>{title}</b> <span>({term})</span>
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
                <br />
                <div>{description}</div>
                <li className="row">{content}</li>
              </div>
            </div>
          )}

          <br />
          {edit ? (
            <div>
              <Form className="edit" onSubmit={onSubmitPatch}>
                <Form.Field
                  label="학교"
                  control={Input}
                  onChange={e => this.onChange(e, 'title')}
                  value={title}
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
                  name="description"
                  onChange={e => this.onChange(e, 'description')}
                  value={description}
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
            </div>
          ) : null}
        </div>
      </Container>
    );
  }
}
