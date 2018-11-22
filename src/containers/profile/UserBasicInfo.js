import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
 Container, List, Grid, Input, Form, Button 
} from 'semantic-ui-react';
import './UserBasicInfo.css';

class UserBasicInfo extends Component {
  constructor() {
    super();
    this.state = {
      edit: false,
    };

    this.onButtonClick = () => {
      const { edit } = this.state;
      this.setState({
        edit: !edit,
      });
    };

    this.onButtonClickEdit = () => {
      const { edit } = this.state;
      this.setState({
        edit: !edit,
      });
    };
  }

  render() {
    console.log('here', this.props);
    const { edit } = this.state;
    const { onButtonClick } = this;
    const {
      name,
      phoneNum,
      email,
      snsBlog,
      snsGithub,
      picture,
      updateField,
      submit,
    } = this.props.basicinfo;

    const { funcs } = this.props;

    const deletedData = {
      name,
      phoneNum,
      email,
      snsBlog,
      snsGithub,
    };

    // handling onChange & onSubmit //
    const updateFieldEvent = key => ev => updateField(key, ev.target.value);
    const changeName = updateFieldEvent('nick');
    const changePhone = updateFieldEvent('phone');
    const changeEmail = updateFieldEvent('email');
    const changeBlog = updateFieldEvent('blog');
    const changeGithub = updateFieldEvent('github');
    const onSubmitPost = (e) => {
      e.preventDefault();
      submit(this.props.editedData);
    };
    // /////////////////////////////////

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
            </Grid.Column>
            <Grid.Column textAlign="right" floated="right">
              {' '}
              <button>+</button>
            </Grid.Column>
          </Grid>
        </div>

        <div className="ui grid centered">
          <span className="column profilename two wide">Basic Info.</span>
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
              <Form onSubmit={onSubmitPost}>
                <Form.Field
                  label="이름"
                  size="mini"
                  control={Input}
                  onChange={changeName}
                />
                <Form.Field
                  label="전화번호"
                  size="mini"
                  control={Input}
                  onChange={changePhone}
                />
                <Form.Field
                  label="이메일 주소"
                  size="mini"
                  control={Input}
                  onChange={changeEmail}
                />
                <Form.Field
                  label="대표 블로그"
                  size="mini"
                  control={Input}
                  onChange={changeBlog}
                />
                <Form.Field
                  label="대표 깃헙"
                  size="mini"
                  control={Input}
                  onChange={changeGithub}
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
              <button
                type="button"
                className="ui button"
                onClick={() => funcs.delete(deletedData)}
              >
                <i className="delete icon" />
              </button>
            </span>
          </div>
        </div>
        {/* </div> */}
        {/* </div> */}
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

const mapStateToProps = state => ({
  editedData: state.fetchedProfile.editor,
});
export default connect(mapStateToProps)(UserBasicInfo);

/* eslint-enable */
