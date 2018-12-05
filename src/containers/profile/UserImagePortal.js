import React, { Component } from 'react';
import { Button, Portal, Segment, Form, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as api from 'api/api';
import { onSubmitPostUser } from 'actions/action_userprofile';

class AddUserImagePortal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      photo:
        this.props.photo || 'http://cdn.onlinewebfonts.com/svg/img_508630.png',
      photoKey: '',
    };
  }

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  sendImage = async () => {
    let imageForm = new FormData();
    imageForm.append('img', document.getElementById('imagefileUser').files[0]);
    try {
      const data = await api.jobPostImage(imageForm);
      this.setState({ photo: data.data.url, photoKey: data.data.key });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { open } = this.state;
    return (
      <div align="center">
        <img alt="userphoto" src={this.state.photo} width="100" />
        <div>
          <Button
            compact
            style={{ marginLeft: '1rem' }}
            size="mini"
            content="ADD PICTURE"
            negative={open}
            positive={!open}
            onClick={this.handleClick}
          />
        </div>
        <Portal onClose={this.handleClose} open={open}>
          <Segment
            style={{
              left: '51%',
              position: 'fixed',
              top: '20%',
              zIndex: 1000,
            }}
          >
            <div>
              <Form>
                <div className="upload-btn-wrapper">
                  <button className="btn">등록</button>
                  <input
                    type="file"
                    name="file"
                    id="imagefileUser"
                    onChange={this.sendImage}
                  />
                </div>
                <Image src={this.state.photo} size="medium" />
                <Button
                  compact
                  type="submit"
                  content="제출"
                  color="blue"
                  onClick={() => {
                    this.handleClick();
                    this.props.onSubmitPostUser(this.state, 'profile');
                  }}
                />
              </Form>
            </div>
          </Segment>
        </Portal>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  photo: state.fetchedProfile.items.user.photo,
  photoKey: state.fetchedProfile.items.user.photoKey,
});

export default connect(
  mapStateToProps,
  { onSubmitPostUser },
)(AddUserImagePortal);
