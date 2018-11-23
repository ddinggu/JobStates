import React, { Component } from 'react';
import { Button, Select, Input, Form } from 'semantic-ui-react';

const options = [
  { text: '전체', value: '전체' },
  { text: '합격', value: '합격' },
  { text: '불합격', value: '불합격' },
  { text: ' 서류대기', value: '서류대기' },
  { text: '면접대기', value: '면접대기' },
  { text: '지원하지 않음', value: '지원하지 않음' },
];

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
        value
    }));
  };

  _onInputChange = e => {
    this.setState({
        inputValue: e.target.value
    })
    // console.log(this.state.inputValue)
  }

  _onClickSearch = e => {
    e.preventDefault();
    const { value, inputValue } = this.state;
    this.props._filterSearch(value, inputValue);
    this.setState({inputValue: ''})
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
          <Form.Input placeholder="회사명 검색" value={this.state.inputValue} onChange={this._onInputChange}  />
          <Form.Button onClick={this._onClickSearch} type="submit">
            Search
          </Form.Button>
        <Button.Group>
          <Form.Button primary>수정</Form.Button>
          <Form.Button secondary>삭제</Form.Button>
        </Button.Group>
        </Form.Input>
      </Form>
    );
  }
}
