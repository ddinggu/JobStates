import React, { Component } from 'react';

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
      <div className="UserInterestTech">
        <hr />
        <button type="button">+</button>
        <h3>관심 스택</h3>
        {userFavTech.map(tech => (
          <span>{tech} </span>
        ))}
      </div>
    );
  }
}

/* eslint-enable */
