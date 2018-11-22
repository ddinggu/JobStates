/* eslint-disable */
import React, { Component } from 'react';
import { Button, Container } from 'semantic-ui-react';

export default class UserInterestField extends Component {
  constructor() {
    super();
    this.state = {
      createOrEdit: false,
      favfield: [],
    };

    this.onButtonClick = () => {
      const { createOrEdit } = this.state;
      this.setState({
        createOrEdit: !createOrEdit,
      });
    };
  }

  // /* eslint-disable */

  render() {
    const { userFavField, funcs } = this.props;
    return (
      <Container className="UserInterestTech">
        <h3>관심 분야</h3>
        {userFavField.map(field => (
          <span>{field} </span>
        ))}
      </Container>
    );
  }
}

/* esint-enable */
