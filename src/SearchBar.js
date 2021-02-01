import React, { useState } from "react";

function SearchBar(props) {
  const { handleChange } = props;
  return (
    <div>
      <input
        id="search-bar"
        type="search"
        placeholder="Hunt Superheroes here..."
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
