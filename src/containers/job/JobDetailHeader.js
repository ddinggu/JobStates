import React, { Component } from 'react';
import { Button, Icon, Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { deleteJobData } from 'actions/action_Job';
import { Redirect } from 'react-router-dom';

class JobDetailHeader extends Component {
  state = { open: false };

  onModifyClick = () => {};

  onDeleteClick = () => {};

  show = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  render() {
    const { open } = this.state;
    const { hireId, deleteJobData, loading, error } = this.props;

    if (!hireId) return <Redirect to="/list" />;

    return (
      <div style={{ float: 'right' }}>
        <Button icon labelPosition="left" style={{ marginRight: '2rem' }}>
          <Icon name="cut" />
          수정
        </Button>
        <Button
          icon
          labelPosition="left"
          style={{ marginRight: '4rem' }}
          onClick={this.show}
        >
          <Icon name="eraser" />
          삭제
        </Button>

        <Modal size={'mini'} open={open} onClose={this.close}>
          <Modal.Header>삭제</Modal.Header>
          <Modal.Content>
            <p>정말 삭제하시겠습니까?</p>
          </Modal.Content>
          <Modal.Actions>
            <Button negative onClick={this.close}>
              취소
            </Button>
            <Button
              positive
              icon={loading ? null : 'checkmark'}
              labelPosition="right"
              content="삭제"
              onClick={() => deleteJobData(hireId)}
              loading={loading}
            />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hireId: state.job.currentData.data.hireId,
  loading: state.job.loading,
  error: state.job.error,
});

export default connect(
  mapStateToProps,
  { deleteJobData },
)(JobDetailHeader);
