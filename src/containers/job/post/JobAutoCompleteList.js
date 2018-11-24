import React, { Component } from 'react';
import { Image, List, Modal, Button } from 'semantic-ui-react';
import './JobAutoCompleteList.css';
import { connect } from 'react-redux';
import { filterAutoCompleteData } from 'actions/action_autocomplete';

const renderList = (job, onChangeTargetClick, currentId) => (
  <List.Item
    id={currentId === `${job.hireId}` ? 'autocomplete' : null}
    jobid={job.hireId}
    onClick={onChangeTargetClick}
  >
    <Image avatar src={job.logo} />
    <List.Content>
      <List.Header>{job.brand}</List.Header>
      <List.Description>iOS 개발자</List.Description>
    </List.Content>
  </List.Item>
);

class JobAutoCompleteList extends Component {
  state = {
    currentClicked: null,
  };

  onListClick = e => {
    const { currentClicked } = this.state;
    const jobid = e.currentTarget.getAttribute('jobid');
    if (currentClicked === jobid) {
      this.setState({
        currentClicked: null,
      });
    } else {
      this.setState({
        currentClicked: jobid,
      });
    }
  };

  render() {
    const { list, close, filterAutoCompleteData } = this.props;
    const { currentClicked } = this.state;

    return (
      <div>
        <List
          selection
          verticalAlign="middle"
          style={{
            marginTop: '1.1rem',
            borderBottom: '1px solid rgba(34,36,38,.15)',
          }}
        >
          {list.map(job =>
            renderList(job, this.onListClick, this.state.currentClicked),
          )}
        </List>
        <Modal.Actions>
          <div style={{ float: 'right', paddingBottom: '1.2rem' }}>
            <Button color="black" onClick={close}>
              취소
            </Button>
            <Button
              positive
              icon="checkmark"
              labelPosition="right"
              content="선택"
              onClick={() => {
                close();
                filterAutoCompleteData(currentClicked);
              }}
              disabled={currentClicked ? false : true}
            />
          </div>
        </Modal.Actions>
      </div>
    );
  }
}

export default connect(
  null,
  { filterAutoCompleteData },
)(JobAutoCompleteList);
