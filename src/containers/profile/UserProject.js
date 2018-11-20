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
        <button type="button" onClick={onButtonClick}>
          +
        </button>
        <div className="ui two column grid centered">
          <span className="cloumn profilename">Project</span>
          <div className="UserProject read ten wide column profilebox">
            {project.map(proj => (
              <div>
                <b>{proj.title} </b>
                <span>({proj.term})</span>
                &nbsp;
                <button
                  type="button"
                  onClick={() => {
                    console.log(proj);
                    funcs.delete(proj);
                  }}
                >
                  x
                </button>
                <li>{proj.description}</li>
                <br />
              </div>
            ))}
            <div
              className="UserProejct create ten wide column profilebox"
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
        </div>
      </Container>
    );
  }
}

export default UserProject;

/* eslint-enable */
