import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  List,
  Grid,
  Input,
  Form,
  Button,
  Header,
} from 'semantic-ui-react';
import './UserBasicInfo.css';
import UserImagePortal from '../../containers/profile/UserImagePortal';

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
    console.log('funcs', this.props.funcs);
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
      console.log('ojb', obj);
      submit(obj, 'profile');
      onButtonClick();
    };

    const onDelete = () => {
      const data = {
        name: '',
        phone: '',
        email: 'null@gmail.com',
        blog: '',
        github: '',
      };
      submit(data, 'profile');
      this.setState({
        name: '',
        phone: '',
        email: 'null@gmail.com',
        blog: '',
        github: '',
      });
    };

    return (
      <Container>
        <div className="ui grid centered">
          <Grid>
            <Grid.Column />
            <Grid.Column textAlign="center">
              <UserImagePortal />
            </Grid.Column>
            <Grid.Column textAlign="right" floated="right" />
          </Grid>
        </div>
        <Grid textAlign="center">
          <Grid.Column className="profilename" width={2}>
            <Header>Basic Info.</Header>
          </Grid.Column>
          {!edit ? (
            <Grid.Column className="profilebox" width={10} textAlign="center">
              <Grid verticalAlign="middle">
                <Grid.Row>
                  <Grid.Column width={4} textAlign="left" />
                  <Grid.Column width={8} textAlign="center">
                    <b>{name}</b>
                  </Grid.Column>
                  <Grid.Column width={4} textAlign="right">
                    <span className="ui mini basic icon buttons ">
                      <button
                        type="button"
                        className="ui button"
                        onClick={onButtonClick}
                      >
                        <i className="edit icon" />
                      </button>
                      <button
                        type="button"
                        className="ui button"
                        onClick={onDelete}
                      >
                        <i className="delete icon" />
                      </button>
                    </span>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid textAlign="left">
                    <List textAlign="left">
                      <List.Item icon="phone" content={phone} />
                      <List.Item icon="mail" content={email} />
                      <List.Item icon="home" content={blog} />
                      <List.Item icon="github" content={github} />
                    </List>
                  </Grid>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          ) : (
            <div className="UserBasicInfo create ten wide column profilebox">
              <Form onSubmit={update}>
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
              </Form>
            </div>
          )}
          <div className="column two wide" />
        </Grid>
      </Container>
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
