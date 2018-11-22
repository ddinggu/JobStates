import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';

class DropdownExampleSearchQuery extends Component {
  state = { searchQuery: '' };

  handleChange = (e, { searchQuery, value }) =>
    this.setState({ searchQuery, value });

  handleSearchChange = (e, { searchQuery }) => this.setState({ searchQuery });

  render() {
    const { searchQuery, value } = this.state;
    const { stateOptions, title, handleArrayChange } = this.props;

    return (
      <Dropdown
        fluid
        multiple
        onChange={async (e, { value }) => {
          await this.handleChange(e, { value });
          handleArrayChange(this.state.value);
        }}
        onSearchChange={this.handleSearchChange}
        options={stateOptions}
        placeholder={title}
        search
        searchQuery={searchQuery}
        selection
        value={value}
      />
    );
  }
}

export default DropdownExampleSearchQuery;
