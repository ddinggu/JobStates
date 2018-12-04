import React, { Component } from 'react';
import { Button, Icon, Modal, Grid } from 'semantic-ui-react';

class JobDetailHeader extends Component {
  state = { open: false };

  toggle = () => this.setState({ open: !this.state.open });

  render() {
    console.log('jobDetailHeader render!!');
    const { open } = this.state;
    const {
      provider,
      commentId,
      companyId,
      hireId,
      scheduleId,
      loading,
      deleteJobData,
    } = this.props;

    return (
      <>
        <Grid>
          <Grid.Row>
            <Grid.Column width={2} />
            <Grid.Column width={12} textAlign="left">
              <Grid column="two">
                <Grid.Column width={12} />
                <Grid.Column width={4} textAlign="right">
                  <Button labelPosition="left" onClick={this.toggle}>
                    <Icon name="eraser" />
                    삭제
                  </Button>
                </Grid.Column>
              </Grid>
            </Grid.Column>
            <Grid.Column width={2} />
          </Grid.Row>
        </Grid>

        <Modal size={'mini'} open={open} onClose={this.toggle}>
          <Modal.Header>삭제</Modal.Header>
          <Modal.Content />
          <Modal.Actions>
            <Button negative onClick={this.toggle}>
              취소
            </Button>
            <Button
              positive
              icon={loading ? null : 'checkmark'}
              labelPosition="right"
              content="삭제"
              onClick={() =>
                deleteJobData({
                  provider,
                  commentId,
                  companyId,
                  hireId,
                  scheduleId,
                })
              }
              loading={loading}
            />
          </Modal.Actions>
        </Modal>
      </>
    );
  }
}

export default JobDetailHeader;
