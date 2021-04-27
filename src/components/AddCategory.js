import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 1) {
      setCategories((category) => [inputValue, ...category]);
      setInputValue('');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input className="search-bar" type="text" value={inputValue} onChange={handleInputChange} placeholder="Search Gif" />
      </form>
    </>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
