import { useState } from 'react';
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

export const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = e => {
    setSearchQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      toast.error('Please enter a value to search!');
      return;
    }
    onSubmit(searchQuery);
    reset();
  };

  const reset = () => {
    setSearchQuery('');
  };

  return (
    <SearchbarHeader>
      <SearchformForm onSubmit={handleSubmit}>
        <SearchformButton type="submit">
          <HiSearchCircle style={{ width: 25, height: 25 }} />
        </SearchformButton>

        <SearchformLabel>
          <SearchformInput
            onChange={handleChange}
            value={searchQuery}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchformLabel>
      </SearchformForm>
    </SearchbarHeader>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
