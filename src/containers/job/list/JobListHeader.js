import React, { Component } from 'react';
import { Button, Icon, Form, Grid } from 'semantic-ui-react';
import * as util from 'utils/jobutils';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import debounce from 'lodash/debounce';
import './JobListHeader.css';

class JobListHeader extends Component {
  state = {
    value: '전체',
    inputValue: '',
  };

  _onSelectChange = (e, { value }) => {
    this.setState(prevState => ({
      value,
    }));
  };

  _onInputChange = e => {
    this.setState({
      inputValue: e.target.value,
    });
    // console.log(this.state.inputValue)
  };

  _onClickSearch = debounce(() => {
    const { value, inputValue } = this.state;
    this.props._filterSearch(value, inputValue);
    // this.setState({ inputValue: '' });
  }, 400);

  // _keyPress = e => {
  //   if (e.keyCode == 13) {
  //     this.onClickSearch(e);
  //   }
  // };

  onInputDebounce = e => {
    e.preventDefault();
    this._onClickSearch();
  };

  render() {
    const { push } = this.props;
    return (
      <div id="list-header_contianer">
        <Button
          onClick={() => push('/jobpost')}
          floated="right"
          labelPosition="left"
          className="btn-post"
        >
          <Icon name="file outline" />
          등록
        </Button>
        <Grid>
          <Grid.Column width={6} />
          <Grid.Column width={7}>
            <Form.Input type="text" placeholder="Search..." action>
              <Form.Select
                options={util.options}
                defaultValue="전체"
                onChange={async (e, value) => {
                  await this._onSelectChange(e, value);
                  this.onInputDebounce(e);
                }}
              />
              <Form.Input
                placeholder="회사명 검색"
                value={this.state.inputValue}
                onChange={async e => {
                  await this._onInputChange(e);
                  this.onInputDebounce(e);
                }}
                // onKeyDown={this._keyPress}
              />
              {/* <Form.Button
                onClick={this._onClickSearch}
                type="submit"
                style={{ marginLeft: '1rem' }}
              >
                Search
              </Form.Button> */}
            </Form.Input>
          </Grid.Column>
          <Grid.Column width={3} />
        </Grid>
      </div>
    );
  }
}

export default connect(
  null,
  { push },
)(JobListHeader);
