import React, { Component } from 'react';
import {
  Button,
  Container,
  Form,
  TextArea,
  Input,
  Header,
} from 'semantic-ui-react';
import EducationList from './EducationListItem';

export default class UserEducation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      create: false,
      organization: '',
      term: '',
      content: '',
    };

    this.onButtonClick = () => {
      const { create } = this.state;
      this.setState({
        create: !create,
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
    const { create } = this.state;
    const { edu, funcs } = this.props;
    const onSubmitPost = (e) => {
      e.preventDefault();
      const { organization, term, content } = this.state;
      const obj = { organization, term, content };
      funcs.submit(obj, 'education');
      this.onButtonClick();
    };

    if (this.props.edu === undefined) {
      return <div>loading...</div>;
    }
    return (
      <Container className="UserEducation">
        <div className="ui grid centered">
          <span className="column profilename two wide">
            <Header>Education</Header>
          </span>
          <div className="column UserEducation read ten wide profilebox">
            <div className="row">
              <div style={create ? null : { display: 'none' }}>
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
                    name="description"
                    onChange={e => this.onChange(e, 'content')}
                  />
                  <Button
                    compact
                    content="취소"
                    onClick={(e) => {
                      e.preventDefault();
                      onButtonClick();
                    }}
                  />
                  <Button compact content="추가" />
                </Form>
              </div>
            </div>
            {edu.map(eduProp => (
              <div>
                <EducationList key={eduProp.id} edu={eduProp} funcs={funcs} />
              </div>
            ))}
          </div>
          <span className="column two wide">
            <span className="ui mini basic icon buttons">
              <button
                type="button"
                className="ui button"
                onClick={() => {
                  onButtonClick();
                }}
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
