import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

/* eslint-disable */

class UserEducation extends Component {
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
    const { edu } = this.props;

    if (edu === undefined) {
      return <div>loading...</div>;
    }
    return (
      <div className="UserEducation">
        <hr />
        <button type="button" onClick={onButtonClick}>
          +
        </button>
        <h3>학력</h3>
        <div
          className="UserEducation read"
          // style={!createOrEdit ? null : { display: 'none' }}
        >
          {edu.map(eduProp => (
            <div>
              <span>{eduProp.organization} </span>
              <span>({eduProp.term})</span>
              <div>
                <li>{eduProp.content}</li>
              </div>
              <br />
            </div>
          ))}
        </div>
        <div
          className="UserEducation create"
          style={createOrEdit ? null : { display: 'none' }}
        >
          학교 : <input />
          &nbsp; 재학 기간 : <input />
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

export default connect()(UserEducation);

/* eslint-enable */
