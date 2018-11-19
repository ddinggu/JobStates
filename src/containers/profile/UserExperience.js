import React, { Component } from 'react';
// import PropTypes from 'prop-types';

/* eslint-disable*/

class UserExperience extends Component {
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

  render() {
    const { onButtonClick } = this;
    const { createOrEdit } = this.state;
    const { exps } = this.props;

    if (this.props.exps === undefined) {
      return <div>Experience loading...</div>;
    }

    return (
      <div className="UserExperience">
        <hr />
        <button type="button" onClick={onButtonClick}>
          +
        </button>
        <h3>약력</h3>
        <div className="userExperience read">
          {exps.map(exp => (
            <div>
              <span>
                <b>{exp.title}</b>{' '}
              </span>
              <span>({exp.term})</span>
              <div>{exp.description}</div>
              <li>{exp.content}</li>
              <br />
            </div>
          ))}
        </div>
        <div
          className="UserExperience create"
          style={createOrEdit ? null : { display: 'none' }}
        >
          기업명 : <input />
          <br />
          역할 : <input />
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

// UserExperience.propTypes = {};

export default UserExperience;

/* eslint-enable */
