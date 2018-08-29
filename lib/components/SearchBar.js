import React from 'react';
import debounce from 'lodash.debounce';
import storeProvider from './storeProvider';

class SearchBar extends React.PureComponent {
  state = {
    searchTerm: '',
  };

  doSearch = debounce(() => {
    this.props.store.setSearchTerm(this.state.searchTerm);
  }, 300);

  handleSearch = event => {
    this.setState({ searchTerm: event.target.value }, () => {
      this.doSearch();
    });
  };

  shouldComponentUpdate(nextProps, nextSTate) {
    return true;
  }

  componentWillUpdate(nextProps, nextSTate) {}

  render() {
    return (
      <input
        type="search"
        placeholder="Enter search term"
        onChange={this.handleSearch}
      />
    );
  }
}

export default storeProvider()(SearchBar);
