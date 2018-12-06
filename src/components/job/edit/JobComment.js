import React, { Component } from 'react';
import {
  Grid,
  Button,
  TextArea,
  Container,
  Header,
  List,
  Form,
} from 'semantic-ui-react';

class JobComment extends Component {
  state = {
    edit: false,
    commentId: this.props.commentId || null,
    advantage: this.props.advantage || null,
    disAdvantage: this.props.disAdvantage || null,
    strategy: this.props.strategy || null,
  };

  onEditing = () => this.setState({ edit: !this.state.edit });

  onHandleChange = key => e =>
    this.setState({
      ...this.state,
      [key]: e.target.value ? e.target.value : e.target.innerText,
    });

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.edit !== nextState.edit) {
      return true;
    }
    if (this.state.advantage !== nextState.advantage) {
      return true;
    }
    if (this.state.disAdvantage !== nextState.disAdvantage) {
      return true;
    }
    if (this.state.strategy !== nextState.strategy) {
      return true;
    }
    if (JSON.stringify(this.props) !== JSON.stringify(nextProps)) {
      return true;
    }
    return false;
  }

  render() {
    const { edit, advantage, disAdvantage, strategy } = this.state;
    const { onSubmitEditData } = this.props;
    console.log('jobComment render!');
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
                    {this.props.disAdvantage}
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
                            value={advantage}
                            onChange={this.onHandleChange('advantage')}
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
                            value={disAdvantage}
                            onChange={this.onHandleChange('disAdvantage')}
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
                            value={strategy}
                            onChange={this.onHandleChange('strategy')}
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
                        onSubmitEditData(this.state, 'comment');
                        this.onEditing();
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
