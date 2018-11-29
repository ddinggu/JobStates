import React, { Component } from 'react';
import {
 Button, Container, Grid, Header 
} from 'semantic-ui-react';

export default class UserInterestTech extends Component {
  constructor() {
    super();
    this.state = {
      createOrEdit: false,
    };

    this.onButtonClick = () => {
      const { createOrEdit } = this.state;
      this.setState({
        createOrEdit: !createOrEdit,
      });
    };
  }

  /* eslint-disable */
  render() {
    const { userFavTech } = this.props;

    return (
      <Container>
        <Grid textAlign="center">
          <Grid.Column width={2} textAlign="left">
            <Header>관심 테크</Header>
          </Grid.Column>
          <Grid.Column width={10} className="profilebox read">
            {userFavTech.map(tech => (
              <span>{tech} </span>
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

/* eslint-enable */
