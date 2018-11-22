import React, { Component } from 'react';
import {
 Button, Container, Form, TextArea, Input 
} from 'semantic-ui-react';

export default class UserEducationList extends Component {
  constructor(props) {
    super(props);

    console.log('edulistProps: ', props);
    this.state = {
      edit: false,
      organization: props.edu.organization,
      term: props.edu.term,
      content: props.edu.term,
    };

    this.onButtonClick = () => {
      const { edit } = this.state;
      this.setState({
        edit: !edit,
      });
    };

    this.onChange = (e, attr) => {
      this.setState({
        [attr]: e.target.value,
      });
    };
  }

  render() {
    const { edu, funcs } = this.props;
    const { edit } = this.state;
    return (
      <Container>
        <div className="row">
          <div>
            <div className="read" style={edit ? { display: 'none' } : null}>
              <div className="row">
                <div className="ui grid">
                  <div className="column four wide left aligned" />
                  <div className="column eight wide center aligned">
                    <b>{edu.organization}</b>
                    &nbsp;<span>({edu.term})</span>
                  </div>
                  <div className="column four wide right aligned">
                    <span className="ui mini basic icon buttons">
                      <button
                        type="button"
                        className="ui button"
                        onClick={this.onButtonClick}
                      >
                        <i className="edit icon" />
                      </button>
                      <button
                        type="button"
                        className="ui button"
                        onClick={() => funcs.delete({ edu })}
                      >
                        <i className="delete icon" />
                      </button>
                    </span>
                  </div>
                </div>
              </div>
              <div className="row">
                <li>{edu.content}</li>
              </div>
            </div>
            {edit ? (
              <div>
                <Form onSubmit={funcs.onSubmitPost} className="edit">
                  <Form.Field
                    label="학교"
                    control={Input}
                    onChange={e => this.onChange(e, 'organization')}
                    value={this.state.organization}
                  />
                  <Form.Field
                    label="재학 기간"
                    control={Input}
                    onChange={e => this.onChange(e, 'term')}
                    value={this.state.term}
                  />
                  <Form.Field
                    label="간단 설명"
                    control={TextArea}
                    name="description"
                    onChange={e => this.onChange(e, 'description')}
                    value={this.state.content}
                  />
                  <Button
                    compact
                    content="취소"
                    onClick={(e) => {
                      e.preventDefault();
                      this.onButtonClick();
                    }}
                  />
                  <Button
                    compact
                    content="추가"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  />
                </Form>
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    );
  }
}
