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
      title: props.proj.title,
      description: props.proj.description,
      term: props.proj.term,
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
 edit, title, description, term 
} = this.state;

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
                      compact
                      content="추가"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
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
                <button type="button" className="ui button" onClick={() => {}}>
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
