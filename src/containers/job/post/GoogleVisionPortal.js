import React, { Component } from 'react';
import {
  Button,
  Icon,
  Portal,
  Form,
  Input,
  Container,
  Grid,
} from 'semantic-ui-react';
import './GoogleVisionPortal.css';
import * as api from 'api/api';

export default class GoogleVision extends Component {
  state = {
    open: false,
    text: '',
  };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  onSubmitGoogle = async image => {
    try {
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
      const detectedText = await api.postImageToGetText(jsonStrData);
      this.setState({
        text: detectedText.data.responses[0].fullTextAnnotation.text,
      });
    } catch (err) {
      console.error(err);
    }
  };

  handleOnFileUpload = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const imageData = reader.result.split(',')[1];

      this.onSubmitGoogle(imageData);
    };
  };

  render() {
    const { open } = this.state;
    return (
      <div>
        <Button
          floated="right"
          labelPosition="left"
          style={{ marginRight: '2rem' }}
          onClick={this.handleClick}
        >
          <Icon name="sync alternate" />
          이미지 > 텍스트 변환
        </Button>
        <Portal open={open}>
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
              right: '5%',
              position: 'fixed',
              top: '176px',
              zIndex: 1000,
            }}
          >
            <Grid textAlign="center">
              <Grid.Row>
                <Form onSubmit={e => e.preventDefault}>
                  <div className="googleVisionPortal">
                    <Form.Field>
                      {/* <Input type="file" id="img" /> */}
                      <Input
                        type="file"
                        id="img"
                        name="image"
                        onChange={this.handleOnFileUpload}
                        accept=".jpg, .png, .bmp, .jpeg"
                      />
                    </Form.Field>
                  </div>
                </Form>
              </Grid.Row>
              <Grid.Row>
                <div className="googleVisionText">{this.state.text}</div>
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
