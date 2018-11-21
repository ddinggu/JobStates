/* eslint-disable */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Container, Form, TextArea, Input } from 'semantic-ui-react';
// import PropTypes from 'prop-types';
// import './UserEducation.css';

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
        <div className="ui grid centered">
          {
            //////////////11111
          }
          <span className="column profilename two wide">Education</span>

          {
            //////////////222222
          }
          <div className="column UserEducation read ten wide profilebox">
            {
              /////////22222의 첫 row////////////
            }
            <div className="row">
              {edu.map(eduProp => (
                <div>
                  <div className="row">
                    <div className="ui grid">
                      <div className="column four wide left aligned" />
                      <div className="column eight wide center aligned">
                        <span>{eduProp.organization}</span>
                        &nbsp;<span>({eduProp.term})</span>
                      </div>
                      <div className="column four wide right aligned">
                        <span className="ui mini basic icon buttons">
                          <button type="button" className="ui button">
                            <i className="edit icon" />
                          </button>
                          <button
                            type="button"
                            className="ui button"
                            onClick={() => funcs.delete({ eduProp })}
                          >
                            <i className="delete icon" />
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <li>{eduProp.content}</li>
                  </div>
                </div>
              ))}
            </div>
            {
              /////////22222의 둘째 row////////////
            }
            <div className="row">
              <div style={createOrEdit ? null : { display: 'none' }}>
                <Form onSubmit={onSubmitPost} className="create">
                  <Form.Field
                    label="학교"
                    control={Input}
                    onChange={e => this.onChange(e, 'organization')}
                  />
                  <Form.Field
                    label="재학 기간"
                    control={Input}
                    onChange={e => this.onChange(e, 'term')}
                  />
                  <Form.Field
                    label="간단 설명"
                    control={TextArea}
                    onChange={e => this.onChange(e, 'description')}
                  />
                  <Button
                    compact
                    content="취소"
                    onClick={e => {
                      e.preventDefault();
                      onButtonClick();
                    }}
                  />
                  <Button
                    compact
                    content="추가"
                    onClick={e => {
                      e.preventDefault();
                    }}
                  />
                </Form>
              </div>
            </div>
          </div>

          {
            //////////////33333
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

const mapStateToProps = state => ({
  editedData: state.fetchedProfile.editor,
});

export default connect(mapStateToProps)(UserEducation);

/* eslint-enable */
