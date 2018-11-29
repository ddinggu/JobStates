import React, { Component } from 'react';
import {
  Button,
  Grid,
  Portal,
  Segment,
  Header,
  Form,
  Input,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { uploadUserImage } from '../../actions/action_userprofile';

class AddUserImagePortal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };

    this.handleClick = () => {
      this.setState({ open: !this.state.open });
    };

    this.handleClose = () => {
      this.setState({ open: false });
    };

    this.sendImage = () => {
      const imageForm = new FormData();
      imageForm.append('img', document.getElementById('imagefile').files[0]);
      props.uploadUserImage(imageForm);
    };
  }

  render() {
    const { open } = this.state;
    return (
      <Grid column={2}>
        <Grid.Column>
          <Button
            compact
            size="mini"
            content={open ? 'ADD PICTURE' : 'ADD PICTURE'}
            negative={open}
            positive={!open}
            onClick={this.handleClick}
          />
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
                <Form onSubmit={this.sendImage}>
                  <Input type="file" id="imagefile" />
                  <Button compact type="submit" content="제출" />
                </Form>
              </div>
            </Segment>
          </Portal>
        </Grid.Column>
        <Grid.Column />
      </Grid>
    );
  }
}

export default connect(
  null,
  { uploadUserImage },
)(AddUserImagePortal);
