import React, { Component } from 'react';
import { Button, Input, Modal, Icon } from 'semantic-ui-react';
import JobAutoCompleteList from './JobAutoCompleteList';
import { connect } from 'react-redux';
import { setAutoCompleteData } from 'actions/action_autocomplete';

class JobAutoComplete extends Component {
  state = { open: false, err: null, search: null, autoCompleteDatas: [] };

  show = dimmer => () => this.setState({ dimmer, open: true });

  close = () => this.setState({ open: false });

  keyPress = e => {
    const { search } = this.state;
    const { getAutocompleteData } = this.props;
    if (e.keyCode === 13) getAutocompleteData(search);
  };

  onHandleChange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { open, dimmer, search } = this.state;
    const { autoCompleteDatas, getAutocompleteData } = this.props;

    return (
      <div style={{ float: 'right', marginRight: '2rem' }}>
        <Button floated="right" labelPosition="left" onClick={this.show(true)}>
          <Icon name="sync alternate" />
          자동완성
        </Button>

        <Modal size={'tiny'} dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>로켓펀치 자동완성</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Input
                icon={
                  <Icon
                    name="search"
                    circular
                    link
                    onClick={() => getAutocompleteData(search)}
                  />
                }
                placeholder="회사명"
                onKeyDown={this.keyPress}
                onChange={this.onHandleChange}
              />
              <JobAutoCompleteList
                list={autoCompleteDatas}
                close={this.close}
              />
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  autoCompleteDatas: state.job.autocompleteData,
});

const mapDispatchToProps = dispatch => ({
  getAutocompleteData: company => dispatch(setAutoCompleteData(company)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(JobAutoComplete);
