/* eslint-disable */
import React, { Component } from 'react';
import { Button, Container } from 'semantic-ui-react';
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
        <div className="ui two column grid centered">
          <span className="cloumn profilename">Experience</span>
          <div className="userExperience read ten wide column profilebox">
            {exps.map(exp => (
              <div className="ui equal width grid">
                <div>
                  <span>
                    <b>{exp.title}</b>{' '}
                  </span>
                  <span>({exp.term})</span>
                  &nbsp;
                  <br />
                  <button
                    type="button"
                    onClick={() => {
                      console.log(exp);
                      funcs.delete(exp);
                    }}
                  >
                    x
                  </button>
                  <span>{exp.description}</span>
                  <li>{exp.content}</li>
                </div>
                <br />
                <div className="column top right aligned">
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
            ))}
            <div
              className="UserExperience create"
              style={createOrEdit ? null : { display: 'none' }}
            >
              <form onSubmit={onSubmitPost}>
                기업명 : <input onChange={e => this.onChange(e, 'title')} />
                <br />
                기간 : <input onChange={e => this.onChange(e, 'term')} />
                <br />
                역할 : <input onChange={e => this.onChange(e, 'description')} />
                <br />
                간단 설명 :{' '}
                <input onChange={e => this.onChange(e, 'content')} />
                <br />
                <br />
                <button type="button" onClick={onButtonClick}>
                  취소
                </button>{' '}
                <button type="submit">추가</button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

// UserExperience.propTypes = {};

export default UserExperience;

/* eslint-enable */
