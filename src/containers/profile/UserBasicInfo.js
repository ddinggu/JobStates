import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Container } from 'semantic-ui-react';
import './UserBasicInfo.css';

/* eslint-disable */

class UserBasicInfo extends Component {
  constructor() {
    super();
    this.state = {
      createOrEdit: false, // false : 정보 확인 뷰 & true : 정보 추가/수정 뷰
    };

    this.onButtonClick = () => {
      const { createOrEdit } = this.state;
      this.setState({
        createOrEdit: !createOrEdit,
      });
    };
  }

  // /* eslint-disable  */

  render() {
    const { createOrEdit } = this.state;
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
    const onSubmitPost = e => {
      e.preventDefault();
      submit(this.props.editedData);
    };
    // /////////////////////////////////

    return (
      <Container className="UserBasicInfo">
        {/* <img alt="userpicture" src={picture} /> */}
        <div className="ui grid">
          <div className="column centered ui grid">
            <img
              alt="userpicture"
              src="http://cdn.onlinewebfonts.com/svg/img_508630.png"
              width="100"
            />
          </div>
        </div>
        <Button type="button" onClick={onButtonClick}>
          +
        </Button>
        &nbsp;
        <button
          type="button"
          onClick={() => {
            console.log(deletedData);
            funcs.delete(deletedData);
          }}
        >
          x
        </button>
        <div className="ui two column grid centered">
          <span className="cloumn profilename">Basic Info.</span>
          {!createOrEdit ? (
            <div className="UserBasicInfo read ten wide column profilebox">
              <span class="ui mini basic icon buttons">
                <button class="ui button">
                  <i class="edit icon" />
                </button>
                <button class="ui button">
                  <i class="delete icon" />
                </button>
              </span>
              <span>이름 : {name}</span>
              <br />
              <span>휴대폰 번호: {phoneNum}</span>
              <br />
              <span>이메일 주소: {email}</span>
              <div>대표 블로그: {snsBlog}</div>
              <div>대표 깃헙: {snsGithub}</div>
            </div>
          ) : (
            <div className="UserBasicInfo create ten wide column profilebox">
              {/* <div className="ten wide column profilebox"> */}
              <form onSubmit={onSubmitPost}>
                <span>이름: </span>
                <input onChange={changeName} />
                <br />
                휴대폰 번호: <input onChange={changePhone} />
                <br />
                이메일 주소: <input onChange={changeEmail} />
                <br />
                대표 블로그: <input onChange={changeBlog} />
                <br />
                대표 깃헙: <input onChange={changeGithub} />
                <br />
                <button type="button" onClick={onButtonClick}>
                  취소
                </button>{' '}
                <button type="submit">변경</button>
              </form>
            </div>
          )}
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
