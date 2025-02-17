import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [keyword, setKeyword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword) {
      onSearch(keyword);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Enter a keyword"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
