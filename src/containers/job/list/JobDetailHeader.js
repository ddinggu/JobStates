import React, { Component } from 'react';
import { Button, Icon, Modal, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class JobDetailHeader extends Component {
  state = { open: false, value: '' };

  toggle = () => this.setState({ open: !this.state.open });

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.open !== nextState.open) {
      return true;
    }
    if (this.state.value !== nextState.value) {
      return true;
    }
    if (JSON.stringify(this.props) !== JSON.stringify(nextProps)) {
      return true;
    }
    return false;
  }

  render() {
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
          <Modal.Content>
            <b>삭제 하시겠습니까?</b>
          </Modal.Content>
          <Modal.Actions>
            <Button negative onClick={this.toggle}>
              취소
            </Button>
            <Button
              positive
              icon={loading ? null : 'checkmark'}
              labelPosition="right"
              content="삭제"
              value={this.state.value}
              onClick={e =>
                deleteJobData({
                  provider,
                  commentId,
                  companyId,
                  hireId,
                  scheduleId,
                })(this.setState({ value: e.target.value }))
              }
              loading={loading}
            />
          </Modal.Actions>
        </Modal>
      </>
    );
  }
}

JobDetailHeader.propTypes = {
  provider: PropTypes.string,
  commentId: PropTypes.number,
  companyId: PropTypes.number,
  hireId: PropTypes.number,
  scheduleId: PropTypes.number,
  loading: PropTypes.bool,
  deleteJobData: PropTypes.func,
};

export default JobDetailHeader;
