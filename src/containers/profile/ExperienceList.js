import React, { Component } from 'react';
import {
 Button, Container, Form, TextArea, Input 
} from 'semantic-ui-react';

export default class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      title: '',
      term: '',
      content: '',
      description: '',
    };
  }

  render() {
    return <div>test</div>;
  }
}
