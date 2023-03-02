import { Component } from 'react';
import PropTypes from 'prop-types';
import { HiSearchCircle } from 'react-icons/hi';

import {
  SearchbarHeader,
  SearchformForm,
  SearchformButton,
  SearchformInput,
  SearchformLabel,
} from './Searchbar.styled.js';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleChange = e => {
    this.setState({ searchQuery: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchQuery.trim() === '') {
      toast.error('Please enter a value to search!');
      return;
    }
    this.props.onSubmit(this.state.searchQuery);
    this.reset();
  };

  reset = () => {
    this.setState({ searchQuery: '' });
  };

  render() {
    const { searchQuery } = this.state;
    return (
      <SearchbarHeader>
        <SearchformForm onSubmit={this.handleSubmit}>
          <SearchformButton type="submit">
            <HiSearchCircle style={{ width: 25, height: 25 }} />
          </SearchformButton>

          <SearchformLabel>
            <SearchformInput
              onChange={this.handleChange}
              value={searchQuery}
              type="text"
              autocomplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </SearchformLabel>
        </SearchformForm>
      </SearchbarHeader>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
