/* eslint-disable */
import React, { Component } from 'react';
import { Button, Container } from 'semantic-ui-react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

class UserProject extends Component {
  constructor() {
    super();
    this.state = {
      createOrEdit: false,
      title: '',
      term: '',
      content: '',
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

  // /* eslint-disable */

  render() {
    const { onButtonClick } = this;
    const { createOrEdit } = this.state;
    const { project, funcs } = this.props;

    const onSubmitPost = e => {
      e.preventDefault();
      const { title, term, content } = this.state;
      const obj = { title, term, content };
      // console.log(this.state);
      funcs.submit(obj);
    };

    return (
      <Container className="UserProject">
        <div className="ui grid centered">
          <span className="column profilename two wide">Project</span>
          <div className="column UserProject read ten wide profilebox">
            {project.map(proj => (
              <div className="row">
                <b>{proj.title} </b>
                <span>({proj.term})</span>
                &nbsp;
                <li>{proj.description}</li>
                <br />
              </div>
            ))}
            <div
              className="UserProejct create ten wide profilebox row"
              style={createOrEdit ? null : { display: 'none' }}
            >
              <form onSubmit={onSubmitPost}>
                프로젝트명 : <input onChange={e => this.onChange(e, 'title')} />
                <br />
                프로젝트 기간 :{' '}
                <input onChange={e => this.onChange(e, 'term')} />
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

export default UserProject;

/* eslint-enable */
