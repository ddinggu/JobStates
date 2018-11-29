/* eslint-disable */
import React, { Component } from 'react';
import { Button, Container, Grid, Header } from 'semantic-ui-react';

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

  render() {
    const { userFavField, funcs } = this.props;
    return (
      <Container>
        <Grid textAlign="center">
          <Grid.Column width={2} textAlign="left">
            <Header>관심 분야</Header>
          </Grid.Column>
          <Grid.Column width={10} className="profilebox read">
            {userFavField.map(field => (
              <span>{field} </span>
            ))}
          </Grid.Column>
          <Grid.Column width={2} textAlign="left">
            <span className="ui mini basic icon buttons">
              <button
                type="button"
                className="ui button"
                onClick={() => {
                  onButtonClick();
                }}
              >
                <i className="plus icon" />
              </button>
            </span>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

/* esint-enable */
