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
    console.log('edu props', this.props);
    const { onButtonClick } = this;
    const { createOrEdit } = this.state;
    const { edu, funcs } = this.props;

    // handling onChange & onSubmit //
    const updateFieldEvent = key => ev => updateField(key, ev.target.value);
    const changeOrg = updateFieldEvent('nick');
    const changePhone = updateFieldEvent('phone');
    const changeEmail = updateFieldEvent('email');
    const changeBlog = updateFieldEvent('blog');
    const changeGithub = updateFieldEvent('github');
    const onSubmitPost = e => {
      e.preventDefault();
      submit(this.props.editedData);
    };
    ///////////////////////////////////

    if (this.props.edu === undefined) {
      return <div>loading...</div>;
    }
    return (
      <div className="UserEducation">
        <hr />
        <button type="button" onClick={onButtonClick}>
          +
        </button>
        <h3>학력</h3>
        <div className="UserEducation read">
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
          <form>
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
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    editedData: state.fetchedProfile.editor,
  };
};

export default connect(mapStateToProps)(UserEducation);

/* eslint-enable */
