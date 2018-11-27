import React, { Component } from 'react';
import { Grid, Button, TextArea } from 'semantic-ui-react';

class JobComment extends Component {
  state = {
    edit: false,
    commentId: this.props.commentId,
    advantage: this.props.advantage,
    disAdvantage: this.props.disAdvantage,
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
    const { edit, commentId, advantage, disAdvantage, strategy } = this.state;
    const { onSubmitEditData } = this.props;

    return (
      <>
        {!edit ? (
          <>
            <Grid.Row reversed>
              <Button
                basic
                icon="edit"
                floated="right"
                onClick={this.onEditing}
              />
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
                <div>내가 생각하는 이 공고의 장점</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                {this.props.advantage}
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
                <div>내가 생각하는 이 공고의 단점</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                {this.props.disAdvantage}
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
                <div>해당 공고만의 취업 전략</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                {this.props.strategy}
              </Grid.Column>
            </Grid.Row>
          </>
        ) : (
          <>
            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
                <div>내가 생각하는 이 공고의 장점</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                <TextArea
                  style={{ minHeight: 100 }}
                  onChange={this.onHandleChange('advantage')}
                  value={advantage}
                />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
                <div>내가 생각하는 이 공고의 단점</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                <TextArea
                  style={{ minHeight: 100 }}
                  onChange={this.onHandleChange('disAdvantage')}
                  value={disAdvantage}
                />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
                <div>해당 공고만의 취업 전략</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                <TextArea
                  style={{ minHeight: 100 }}
                  onChange={this.onHandleChange('strategy')}
                  value={strategy}
                />
              </Grid.Column>
            </Grid.Row>

            <Button
              compact
              onClick={() => {
                onSubmitEditData(this.state, 'comment');
              }}
            >
              추가
            </Button>
            <Button compact onClick={this.onEditing}>
              취소
            </Button>
          </>
        )}
      </>
    );
  }
}

export default JobComment;
