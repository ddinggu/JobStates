/* eslint-disable */
import React, { Component } from 'react';
import { Button, Container, Form, Input, TextArea } from 'semantic-ui-react';
// import PropTypes from 'prop-types';

class UserExperience extends Component {
  constructor() {
    super();
    this.state = {
      createOrEdit: false,
      title: '',
      term: '',
      content: '',
      description: '',
    };

    this.onButtonClick = () => {
      const { createOrEdit } = this.state;
      this.setState({
        createOrEdit: !createOrEdit,
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
    const { createOrEdit } = this.state;
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
      // console.log(this.state);
      funcs.submit(obj);
    };

    if (this.props.exps === undefined) {
      return <div>Experience loading...</div>;
    }

    return (
      <Container className="UserExperience">
        <div className="ui grid centered">
          {
            //////// 111111컬럼
          }
          <span className="column profilename two wide">Experience</span>

          {
            //////// 222222컬럼
          }
          <div className="userExperience read ten wide column profilebox">
            {
              ///// 2222컬럼의 1row - view
            }
            <div className="row">
              {exps.map(exp => (
                <div className="">
                  <div>
                    <div className="row">
                      <div className="ui grid">
                        <div className="column four wide left aligned" />
                        <div className="column eight wide center aligned">
                          <b>{exp.title}</b> <span>({exp.term})</span>
                        </div>
                        <div className="column four wide right aligned">
                          <span className="ui mini basic icon buttons">
                            <button type="button" className="ui button">
                              <i className="edit icon" />
                            </button>
                            <button
                              type="button"
                              className="ui button"
                              onClick={() => funcs.delete(exp)}
                            >
                              <i className="delete icon" />
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <br />
                      <div>{exp.description}</div>
                      <li className="row">{exp.content}</li>
                    </div>
                  </div>
                  <br />
                </div>
              ))}
            </div>

            {
              ///// 2222컬럼의 1row - edit
            }
            <div className="row">
              <div
                className="UserExperience create"
                style={createOrEdit ? null : { display: 'none' }}
              >
                <Form onSubmit={onSubmitPost}>
                  <Form.Field>
                    <label>기업명</label>
                    <input
                      size="mini"
                      onChange={e => this.onChange(e, 'title')}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>기간</label>
                    <input onChange={e => this.onChange(e, 'term')} />
                  </Form.Field>
                  <Form.Field>
                    <label>역할</label>
                    <input onChange={e => this.onChange(e, 'description')} />
                  </Form.Field>
                  <Form.Field
                    control={TextArea}
                    label="간단 설명"
                    onChange={e => this.onChange(e, 'content')}
                  />
                  <Button compact content="취소" onClick={onButtonClick} />
                  <Button compact content="추가" />
                </Form>
              </div>
            </div>
          </div>

          {
            ////////////////33333 컬럼
          }
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

export default UserExperience;
