import React, { Component } from 'react';

export default class UserInterestField extends Component {
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
    const { userFavField } = this.props;
    return (
      <div className="UserInterestTech">
        <h3>관심 분야</h3>
        {userFavField.map(field => (
          <span>{field} </span>
        ))}
      </div>
    );
  }
}

/* esint-enable */
