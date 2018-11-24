import React, { Component } from 'react';
import { Button, Select, Input, Form } from 'semantic-ui-react';
import { current } from 'utils/jobutils';

const options = [{ text: '전체', value: '전체' }, ...current];

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
        <Form.Input type="text" placeholder="Search..." action>
          <Form.Select
            options={options}
            defaultValue="전체"
            onChange={this._onSelectChange}
          />
          <Form.Input
            placeholder="회사명 검색"
            value={this.state.inputValue}
            onChange={this._onInputChange}
          />
          <Form.Button onClick={this._onClickSearch} type="submit">
            Search
          </Form.Button>
        </Form.Input>
      </Form>
    );
  }
}
