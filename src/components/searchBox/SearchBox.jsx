import React from 'react';
import './SearchBox_style.css';

const SearchBox = ({ placeholder, onChange }) => {
  return (
    <div>
      <input
        className='search'
        type='search'
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBox;
