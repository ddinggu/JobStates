import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
 List, Input, Form, Button 
} from 'semantic-ui-react';
import * as Styled from 'StyledComponents';

export default class UserBasicInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      id: props.basicinfo.id,
      delete: props.funcs.delete,
      name: props.basicinfo.name,
      phone: props.basicinfo.phoneNum,
      email: props.basicinfo.email,
      blog: props.basicinfo.snsBlog,
      github: props.basicinfo.snsGithub,
      picture: props.basicinfo.picture,
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
    const { onButtonClick } = this;
    const { submit } = this.props.funcs;
    const {
 edit, phone, email, blog, github, update, name 
} = this.state;

    const onSubmitUpdate = () => {
      const {
 name, phone, email, blog, github 
} = this.state;
      const obj = {
        name,
        phone,
        email,
        blog,
        github,
      };
      submit(obj, 'profile');
      onButtonClick();
    };

    const onDelete = () => {
      const data = {
        name: '',
        phone: '',
        email: null,
        blog: '',
        github: '',
      };
      submit(data, 'profile');
      this.setState({
        name: '',
        phone: '',
        email: null,
        blog: '',
        github: '',
      });
    };

    return (
      <Styled.Wrapper>
        <Styled.Box column="1" row="2">
          <Styled.Header>Basic Info</Styled.Header>
          <Styled.Line />
        </Styled.Box>
        {!edit ? (
          <Styled.BoxWithBackground column="2/5" row="2">
            <Styled.BoxWrapper>
              <Styled.Box column="2" row="1">
                {name}
              </Styled.Box>
              <Styled.Box column="2" row="2">
                <List textAlign="left">
                  <List.Item icon="phone" content={phone} />
                  <List.Item icon="mail" content={email} />
                  <List.Item icon="home" content={blog} />
                  <List.Item icon="github" content={github} />
                </List>
              </Styled.Box>
            </Styled.BoxWrapper>
            <Styled.SpanEditButton className="ui mini basic icon buttons ">
              <button
                type="button"
                className="ui button"
                onClick={onButtonClick}
              >
                <i className="edit icon" />
              </button>
              <button type="button" className="ui button" onClick={onDelete}>
                <i className="delete icon" />
              </button>
            </Styled.SpanEditButton>
          </Styled.BoxWithBackground>
        ) : (
          <Styled.BoxWithBackground column="2/5" row="2">
            <Form onSubmit={update}>
              <Styled.Box>
                <Form.Field
                  label="이름"
                  size="mini"
                  control={Input}
                  onChange={e => this.onChange(e, 'name')}
                  value={name}
                />
                <Form.Field
                  label="전화번호"
                  size="mini"
                  control={Input}
                  onChange={e => this.onChange(e, 'phone')}
                  value={phone}
                />
                <Form.Field
                  label="이메일 주소"
                  size="mini"
                  control={Input}
                  onChange={e => this.onChange(e, 'email')}
                  value={email}
                />
                <Form.Field
                  label="대표 블로그"
                  size="mini"
                  control={Input}
                  onChange={e => this.onChange(e, 'blog')}
                  value={blog}
                />
                <Form.Field
                  label="대표 깃헙"
                  size="mini"
                  control={Input}
                  onChange={e => this.onChange(e, 'github')}
                  value={github}
                />
                <Button compact content="취소" onClick={onButtonClick} />
                <Button compact content="변경" onClick={onSubmitUpdate} />
              </Styled.Box>
            </Form>
          </Styled.BoxWithBackground>
        )}
        <div className="column two wide" />
      </Styled.Wrapper>
    );
  }
}

UserBasicInfo.propTypes = {
  name: PropTypes.string,
  phoneNum: PropTypes.string,
  email: PropTypes.string,
  snsBlog: PropTypes.string,
  snsGithub: PropTypes.string,
  picture: PropTypes.string,
};

UserBasicInfo.defaultProps = {
  name: 'default name',
  phoneNum: 'default phoneNum',
  email: 'default email',
  snsBlog: 'default snsBlog',
  snsGithub: 'default snsGithub',
  picture: 'default img',
};
