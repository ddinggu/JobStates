import React, { Component } from 'react';
import {
  Grid,
  Button,
  Container,
  Form,
  TextArea,
  Input,
} from 'semantic-ui-react';

export default class ProjectListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      id: props.proj.id,
      title: props.proj.title,
      description: props.proj.description,
      term: props.proj.term,
      update: props.funcs.update,
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
    const { funcs } = this.props;
    const {
 id, title, description, term, update, edit 
} = this.state;

    const onSubmitUpdate = () => {
      const obj = {
        id,
        title,
        description,
        term,
      };
      this.onButtonClick();
      update(obj, 'project');
    };

    const onDelete = () => {
      const obj = {
        id,
      };
      funcs.delete(obj, 'project');
    };

    return (
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column width={12} txtAlign="left">
              {' '}
              {edit ? null : (
                <div>
                  <div>
                    <b>{title}</b> <span>({term})</span>
                  </div>
                  <div>{description}</div>
                </div>
              )}
              {edit ? (
                <div>
                  <Form className="edit">
                    <Form.Field
                      label="프로젝트명"
                      control={Input}
                      onChange={e => this.onChange(e, 'title')}
                      value={title}
                    />
                    <Form.Field
                      label="프로젝트 기간"
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
                    <Button
                      type="submit"
                      compact
                      content="변경"
                      onClick={onSubmitUpdate}
                    />
                  </Form>
                </div>
              ) : null}
            </Grid.Column>
            <Grid.Column width={4} textAlign="right">
              {' '}
              <span className="ui mini basic icon buttons">
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
              </span>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
