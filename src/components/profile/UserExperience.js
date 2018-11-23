import React, { Component } from 'react';
import {
  Button,
  Container,
  Form,
  TextArea,
  Input,
  Header,
} from 'semantic-ui-react';
import ExperienceList from './ExperienceListItem';

// import PropTypes from 'prop-types';

class UserExperience extends Component {
  constructor() {
    super();
    this.state = {
      create: false,
      title: '',
      term: '',
      content: '',
      description: '',
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
    const { exps, funcs } = this.props;

    const onSubmitPost = (e) => {
      e.preventDefault();
      const {
 title, description, term, content 
} = this.state;
      const obj = {
        title,
        description,
        term,
        content,
      };
      funcs.submit(obj);
    };

    if (this.props.exps === undefined) {
      return <div>Experience loading...</div>;
    }

    return (
      <Container className="UserExperience">
        <div className="ui grid centered">
          <span className="column profilename two wide">
            <Header>Experience</Header>
          </span>

          <div className="userExperience read ten wide column profilebox">
            <div className="row">
              <div
                className="UserExperience create"
                style={create ? null : { display: 'none' }}
              >
                <Form onSubmit={onSubmitPost}>
                  <Form.Field
                    label="기업명"
                    control={Input}
                    onChange={e => this.onChange(e, 'title')}
                  />
                  <Form.Field
                    label="기간"
                    control={Input}
                    onChange={e => this.onChange(e, 'term')}
                  />
                  <Form.Field
                    label="역할"
                    control={Input}
                    onChange={e => this.onChange(e, 'description')}
                  />
                  <Form.Field
                    control={TextArea}
                    label="간단 설명"
                    onChange={e => this.onChange(e, 'content')}
                  />
                  <Button compact content="취소" onClick={onButtonClick} />
                  <Button compact content="추가" />
                </Form>
              </div>
            </div>
            <div className="row">
              {exps.map(exp => (
                <ExperienceList key={exp.id} exp={exp} />
              ))}
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

export default UserExperience;
