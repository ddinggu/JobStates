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
      name: props.basicinfo.name,
      phoneNum: props.basicinfo.phoneNum,
      email: props.basicinfo.email,
      snsBlog: props.basicinfo.snsBlog,
      snsGithub: props.basicinfo.snsGithub,
      picture: props.basicinfo.picture,
      update: props.funcs.update,
      delete: props.funcs.delete,
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

    const {
      edit,
      name,
      phoneNum,
      email,
      snsBlog,
      snsGithub,
      picture,
      update,
    } = this.state;

    // const deletedData = {
    //   name,
    //   phoneNum,
    //   email,
    //   snsBlog,
    //   snsGithub,
    // };

    return (
      <Container className="UserBasicInfo">
        {/* <img alt="userpicture" src={picture} /> */}
        <div className="ui grid centered">
          <Grid>
            <Grid.Column />
            <Grid.Column textAlign="center">
              <Grid.Row>
                {' '}
                <img
                  alt="userpicture"
                  src="http://cdn.onlinewebfonts.com/svg/img_508630.png"
                  width="100"
                />
              </Grid.Row>
              <UserImagePortal />
            </Grid.Column>
            <Grid.Column textAlign="right" floated="right" />
          </Grid>
        </div>

        <div className="ui grid centered">
          <span className="column profilename two wide">
            <Header>Basic Info.</Header>
          </span>
          {!edit ? (
            <div className="UserBasicInfo read ten wide column profilebox">
              <List>
                <List.Item icon="users" content={name} />
                <List.Item icon="phone" content={phoneNum} />
                <List.Item icon="mail" content={email} />
                <List.Item icon="home" content={snsBlog} />
                <List.Item icon="github" content={snsGithub} />
              </List>
            </div>
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
                  onChange={e => this.onChange(e, 'phoneNum')}
                  value={phoneNum}
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
                  onChange={e => this.onChange(e, 'snsBlog')}
                  value={snsBlog}
                />
                <Form.Field
                  label="대표 깃헙"
                  size="mini"
                  control={Input}
                  onChange={e => this.onChange(e, 'snsGithub')}
                  value={snsGithub}
                />
                <Button compact content="취소" onClick={onButtonClick} />
                <Button compact content="변경" type="submit" />
              </Form>
            </div>
          )}
          <div className="column two wide">
            <span className="ui mini basic icon buttons ">
              <button
                type="button"
                className="ui button"
                onClick={onButtonClick}
              >
                <i className="edit icon" />
              </button>
              <button type="button" className="ui button" onClick={() => {}}>
                <i className="delete icon" />
              </button>
            </span>
          </div>
        </div>
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
