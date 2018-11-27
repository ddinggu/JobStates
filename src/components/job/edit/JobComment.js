import React, { Component } from 'react';
import {
  Grid,
  Button,
  TextArea,
  Container,
  Header,
  List,
  Form,
  Input,
} from 'semantic-ui-react';

class JobComment extends Component {
  state = {
    edit: false,
    commentId: this.props.commentId,
    advantage: this.props.advantage,
    disadvantage: this.props.disadvantage,
    strategy: this.props.strategy,
  };

  onEditing = () => this.setState({ edit: !this.state.edit });

  onHandleChange = key => e =>
    this.setState({
      ...this.state,
      [key]: e.target.value ? e.target.value : e.target.innerText,
    });

  componentWillReceiveProps(nextProps) {
    this.setState({ edit: !this.state.edit });
  }

  render() {
    const { edit, commentId, advantage, disadvantage, strategy } = this.state;
    const { onSubmitEditData } = this.props;

    return (
      <Container className="jobContainer">
        <Grid textAlign="center">
          <Grid.Column width={2}>
            <Header>메모</Header>
          </Grid.Column>
          {!edit ? (
            <Grid.Column textAlign="left" width={10} className="jobbody">
              <div className="ItemsInContainer">
                <Grid.Row>
                  <List bulleted>
                    <List.Item className="jobpostItem">공고 장점</List.Item>
                    {this.props.advantage}
                  </List>
                </Grid.Row>
              </div>
              <div className="ItemsInContainer">
                <Grid.Row>
                  <List bulleted>
                    <List.Item className="jobpostItem">공고 단점</List.Item>
                    {this.props.disadvantage}
                  </List>
                </Grid.Row>
              </div>
              <Grid.Row className="ItemsInContainer">
                <List bulleted>
                  <List.Item className="jobpostItem">필요 전략</List.Item>
                  {this.props.strategy}
                </List>
              </Grid.Row>
            </Grid.Column>
          ) : (
            <Grid.Column textAlign="left" width={10} className="jobbody">
              <Grid.Row>
                <Form>
                  <Grid.Row>
                    <div class="ItemsInContainer">
                      <Form.Field>
                        <List bulleted>
                          <List.Item className="jobpostItem">
                            공고 장점
                          </List.Item>
                          <TextArea
                            control={TextArea}
                            value={this.props.advantage}
                          />
                        </List>
                      </Form.Field>
                    </div>
                  </Grid.Row>

                  <Grid.Row>
                    <div class="ItemsInContainer">
                      <Form.Field>
                        <List bulleted>
                          <List.Item className="jobpostItem">
                            공고 단점
                          </List.Item>
                          <TextArea
                            control={TextArea}
                            value={this.props.disadvantage}
                          />
                        </List>
                      </Form.Field>
                    </div>
                  </Grid.Row>

                  <Grid.Row>
                    <div class="ItemsInContainer">
                      <Form.Field>
                        <List bulleted>
                          <List.Item className="jobpostItem">
                            필요 취업 전략
                          </List.Item>
                          <TextArea
                            control={TextArea}
                            value={this.props.strategy}
                          />
                        </List>
                      </Form.Field>
                    </div>
                  </Grid.Row>
                </Form>
              </Grid.Row>
              <Grid textAlign="center">
                <Grid.Row>
                  <div class="ItemsInContainer">
                    <Button compact onClick={this.onEditing}>
                      취소
                    </Button>
                    <Button
                      compact
                      onClick={() => {
                        onSubmitEditData(this.state, 'commnet');
                      }}
                    >
                      변경
                    </Button>
                  </div>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          )}
          <Grid.Column width={2} textAlign="left">
            <Button basic icon="edit" onClick={this.onEditing} />
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default JobComment;
