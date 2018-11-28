import React, { Component } from 'react';
import { Input, Form, Button } from 'semantic-ui-react';
import axios from 'axios';

export default class GoogleVision extends Component {
  state = {
    text: '하하',
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
    const text = '하하';
    return (
      <div>
        <Form onSubmit={this.onSubmitGoogle}>
          <Form.Field>
            {/* <Input type="file" id="img" /> */}
            <Input
              type="file"
              id="img"
              name="image"
              // onChange={this.handleOnFileUpload}
              onChange={e => this.handleOnFileUpload(e)}
              // value={this.state.file.name}
              // accept=".jpg, .png, .bmp, .jpeg"
            />
          </Form.Field>
          <Button>submit</Button>
          <canvas>ㅇㅇㅇㅇㅇㅇ</canvas>
        </Form>
        <div>
          <h1>Result</h1>
          <div>{this.state.text}</div>
        </div>
      </div>
    );
  }
}
