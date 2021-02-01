import React, { useState } from "react";

import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

function App() {
  const [searchText, setSearchText] = useState("");
  const [superheroData, setSuperheroData] = useState([]);

  async function searchSuperheroes(searchTerm) {
    const response = await fetch(
      `https://superheroapi.com/api.php/3297641807007838/search/${searchTerm}`
    );
    const data = await response.json();
    // console.log("searchSuperheroes-> data", data);
    setSuperheroData(data.results);
  }

  function handleChange(e) {
    const searchTerm = e.target.value;
    // console.log("handleChange-> searchTerm", searchTerm);
    setSearchText(searchTerm);
    if (searchTerm.length === 0) {
      setSuperheroData([]);
    }
    if (searchTerm.length > 2) {
      searchSuperheroes(searchTerm);
    }
  }
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <img
          src="https://www.comicbasics.com/wp-content/uploads/2019/05/Definitive-Superheroes-List.jpg"
          style={{ width: "100%", marginBottom: "30px" }}
        />
        <SearchBar handleChange={handleChange} />
        <SearchResults superheroData={superheroData} />
      </div>
    </div>
  );
}

export default App;
