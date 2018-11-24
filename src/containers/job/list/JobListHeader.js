import React, { Component } from 'react';
import { Button, Select, Input, Form } from 'semantic-ui-react';
<<<<<<< HEAD:src/containers/job/list/JobListHeader.js
import * as util from 'utils/jobutils';
=======
import { current } from 'utils/jobutils';

const options = [{ text: '전체', value: '전체' }, ...current];
>>>>>>> 10758eb442f583a7b0a99582bd6c07013a980ec2:src/containers/job/JobListHeader.js

export default class JobListHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '전체',
      inputValue: '',
    };
  }

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

  _onClickSearch = e => {
    e.preventDefault();
    const { value, inputValue } = this.state;
    this.props._filterSearch(value, inputValue);
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <Form>
        {/* <Button.Group floated="right" style={{marginRight: '12rem' }}>
          <Form.Button primary>수정</Form.Button>
          <Form.Button secondary>삭제</Form.Button>
        </Button.Group> */}

        <Form.Input  type="text" placeholder="Search..." action style={{marginLeft: '25rem'}}>
          <Form.Select
            options={util.options}
            defaultValue="전체"
            onChange={this._onSelectChange}
            style={{width: '3rem'}}
          />
          <Form.Input
            placeholder="회사명 검색"
            value={this.state.inputValue}
            onChange={this._onInputChange}
            style={{width: '30rem'}}
          />
<<<<<<< HEAD:src/containers/job/list/JobListHeader.js
=======
          <Form.Input
            placeholder="회사명 검색"
            value={this.state.inputValue}
            onChange={this._onInputChange}
          />
>>>>>>> 10758eb442f583a7b0a99582bd6c07013a980ec2:src/containers/job/JobListHeader.js
          <Form.Button onClick={this._onClickSearch} type="submit">
            Search
          </Form.Button>
        </Form.Input>
      </Form>
    );
  }
}
