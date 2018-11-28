import React, { Component } from 'react';
import {
  Button,
  Icon,
  Portal,
  Segment,
  Form,
  Input,
  Container,
  Label,
  Grid,
} from 'semantic-ui-react';
import './GoogleVisionPortal.css';
import axios from 'axios';

export default class GoogleVision extends Component {
  state = {
    open: false,
    text: '',
  };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  onSubmitGoogle = image => {
    const POST_URL = 'https://vision.googleapis.com/v1/images:annotate?key=';
    const API_KEY = 'AIzaSyA-XcBARrid85Mes5hsaBE6I3gQYx9jStg';
    const POST = POST_URL + API_KEY;
    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    console.log('sending image', image);

    const data = {
      requests: [
        {
          image: {
            content: image,
          },
          features: [
            {
              type: 'TEXT_DETECTION',
            },
          ],
        },
      ],
    };

    const jsonStrData = JSON.stringify(data);

    axios
      .post(POST, jsonStrData, header)
      .then(res => {
        console.log('response', res.data.responses[0]);
        console.log('response', res.data.responses[0].fullTextAnnotation.text);
        this.setState({ text: res.data.responses[0].fullTextAnnotation.text });
      })
      .catch(error => console.log(error));
  };

  handleOnFileUpload = e => {
    console.log('here e', e.target.files);
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      console.log('reader.result', reader.result);
      const imageData = reader.result.split(',')[1];
      console.log('imageData', imageData);
      this.onSubmitGoogle(imageData);
    };
    reader.readAsDataURL(file);
    console.log('here fie', file);

    // this.onSubmitGoogle(imageData);
  };

  render() {
    const { open } = this.state;
    return (
      <div>
        <Button
          floated="right"
          labelPosition="left" /* onClick={this.show(true)} */
          style={{ marginRight: '2rem' }}
          onClick={this.handleClick}
        >
          <Icon name="sync alternate" />
          이미지 > 텍스트 변환
        </Button>
        <Portal /*onClose={this.handleClick}*/ open={open}>
          <Container
            label={{
              as: 'a',
              color: 'black',
              content: 'Hotel',
              icon: 'hotel',
              ribbon: true,
            }}
            className="googleVisionBox"
            style={{
              width: '20%',
              left: '75%',
              position: 'fixed',
              top: '20%',
              zIndex: 1000,
            }}
          >
            <Grid textAlign="center">
              <Grid.Row>
                <Form onSubmit={e => e.preventDefault}>
                  <Form.Field>
                    {/* <Input type="file" id="img" /> */}
                    <input
                      type="file"
                      id="img"
                      name="image"
                      onChange={this.handleOnFileUpload}
                      onChange={e => this.handleOnFileUpload(e)}
                      accept=".jpg, .png, .bmp, .jpeg"
                    />
                    {/* <input type="button" value="upload" /> */}
                  </Form.Field>
                </Form>
              </Grid.Row>
              <Grid.Row>
                <div>{this.state.text}</div>
              </Grid.Row>
              <Grid.Row>
                <Button compact onClick={this.handleClick}>
                  닫기
                </Button>
              </Grid.Row>
            </Grid>
          </Container>
        </Portal>
      </div>
    );
  }
}
