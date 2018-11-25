import React from 'react';
import PropTypes from 'prop-types';
import styles from './Search.module.scss';

const Search = ({ handleInputChange, search }) => (
  <input
    onChange={e => handleInputChange(e.target.value)}
    className={`${styles['emoji-search-input']} ${search || 'input-background-image'}`}
    type="text"
    placeholder="Search"
  />
);

Search.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};

export default Search;
