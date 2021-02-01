import React from "react";
import SearchResultItem from "./SearchResultItem";

function SearchResults(props) {
  const { superheroData = [] } = props;

  return (
    <div>
      {superheroData.length ? <div>Results: {superheroData.length}</div> : ""}
      {superheroData.map((superhero) => (
        <SearchResultItem data={superhero} />
      ))}
    </div>
  );
}

export default SearchResults;
