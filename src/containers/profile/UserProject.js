import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

class UserProject extends Component {
  constructor() {
    super();
    this.state = {
      createOrEdit: false,
    };

    this.onButtonClick = () => {
      const { createOrEdit } = this.state;
      this.setState({
        createOrEdit: !createOrEdit,
      });
    };
  }

  /* eslint-disable */

  render() {
    const { onButtonClick } = this;
    const { createOrEdit } = this.state;
    const { project } = this.props;

    return (
      <div className="UserProject">
        <hr />
        <button type="button" onClick={onButtonClick}>
          +
        </button>
        <h3>프로젝트</h3>
        <div className="UserProject create">
          {project.map(proj => (
            <div>
              <b>{proj.title} </b>
              <span>({proj.term})</span>
              <li>{proj.description}</li>
              <br />
            </div>
          ))}
        </div>
        <div
          className="UserProejct create"
          style={createOrEdit ? null : { display: 'none' }}
        >
          프로젝트명 : <input />
          <br />
          프로젝트 기간 : <input />
          <br />
          간단 설명 : <input />
          <br />
          <br />
          <button type="button" onClick={onButtonClick}>
            취소
          </button>{' '}
          <button type="button">추가</button>
        </div>
      </div>
    );
  }
}

export default UserProject;

/* eslint-enable */
