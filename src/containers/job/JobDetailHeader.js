import React, { Component } from 'react';
import { Button, Icon, Modal } from 'semantic-ui-react';

class JobDetailHeader extends Component {
  state = { open: false };

  onModifyClick = () => {};

  onDeleteClick = () => {};

  show = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  render() {
    const { open } = this.state;

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
              icon="checkmark"
              labelPosition="right"
              content="삭제"
              onClick={this.close}
            />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default JobDetailHeader;
