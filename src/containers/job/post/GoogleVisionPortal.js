import React, { Component } from 'react';
import {
  Button,
  Icon,
  Portal,
  Form,
  Container,
  Grid,
  TextArea,
} from 'semantic-ui-react';
import './GoogleVisionPortal.css';
import * as api from 'api/api';

export default class GoogleVision extends Component {
  state = {
    open: false,
    text: '이미지를 등록해주세요!',
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

      this.setState({ text: '로딩중...' });
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
                      <div className="upload-btn-wrapper">
                        <button className="btn">채용공고 이미지 등록</button>
                        <input
                          type="file"
                          id="img"
                          name="image"
                          onChange={this.handleOnFileUpload}
                          accept=".jpg, .png, .bmp, .jpeg"
                        />
                      </div>
                    </Form.Field>
                  </div>
                </Form>
              </Grid.Row>

              {this.state.text === '로딩중...' ||
              this.state.text === '이미지를 등록해주세요!' ? (
                <div className="googleVisionText-none">{this.state.text}</div>
              ) : (
                <Grid.Row>
                  <Form>
                    <TextArea
                      className="googleVisionText"
                      value={this.state.text}
                    />
                  </Form>
                </Grid.Row>
              )}
              <Grid.Row>
                <Button
                  compact
                  onClick={this.handleClick}
                  style={{ boderRadius: '100%' }}
                >
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
