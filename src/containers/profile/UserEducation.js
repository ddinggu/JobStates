/* eslint-disable */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Container } from 'semantic-ui-react';
// import PropTypes from 'prop-types';

class UserEducation extends Component {
  constructor() {
    super();
    this.state = {
      createOrEdit: false,
      organization: '',
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

  render() {
    // console.log('edu props', this.props);
    const { onButtonClick } = this;
    const { createOrEdit } = this.state;
    const { edu, funcs } = this.props;

    // handling onChange & onSubmit //
    // const updateFieldEvent = key => ev => funcs.updateField(key, ev.target.value);
    // const changeOrg = updateFieldEvent('nick');

    const onSubmitPost = e => {
      e.preventDefault();
      const { organization, term, content } = this.state;
      const obj = { organization, term, content };
      // console.log(this.state);
      funcs.submit(obj);
    };

    // /////////////////////////////////

    if (this.props.edu === undefined) {
      return <div>loading...</div>;
    }
    return (
      <Container className="UserEducation">
        <div className=" ui grid">
          <div className="profilename column four wide">Education</div>

          <div className="profilebox column ten wide">
            {edu.map(eduProp => (
              <div>
                <div>{eduProp.organization}</div>
                <span>({eduProp.term})</span>
                <li>{eduProp.content}</li>
              </div>
            ))}
            <div style={createOrEdit ? null : { display: 'none' }}>
              <form onSubmit={onSubmitPost}>
                학교 :{' '}
                <input onChange={e => this.onChange(e, 'organization')} />
                <br />
                재학 기간 :
                <input onChange={e => this.onChange(e, 'term')} />
                <br />
                간단 설명 :{' '}
                <input onChange={e => this.onChange(e, 'description')} />
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

const mapStateToProps = state => ({
  editedData: state.fetchedProfile.editor,
});

export default connect(mapStateToProps)(UserEducation);

/* eslint-enable */
