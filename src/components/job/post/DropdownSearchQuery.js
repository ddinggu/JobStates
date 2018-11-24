import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';

class DropdownExampleSearchQuery extends Component {
  state = { searchQuery: '', value: [] };

  handleChange = (e, { searchQuery, value }) =>
    this.setState({ searchQuery, value });

  handleSearchChange = (e, { searchQuery }) => this.setState({ searchQuery });

  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.value });
  }

  render() {
    const { searchQuery, value } = this.state;
    const { stateOptions, title, handleArrayChange } = this.props;
    console.log('final load', value);

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
