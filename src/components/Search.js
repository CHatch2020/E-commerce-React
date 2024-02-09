import React, { useState } from "react";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const products = [
    { name: "ZLR", type: "Shoe" },
    { name: "Flys", type: "Shoe" },
    { name: "Weight Master", type: "Machine" },
    { name: "Cruncher", type: "Machine" },
  ];

  const handleInputChange = (event) => {
    const searchInput = event.target.value;
    setSearchInput(searchInput);
    if (searchInput === "") {
      // If search Input is empty, reset search results
      setSearchResults([]);
    } else {
      const filteredResults = products.filter((product) =>
        product.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setSearchResults(filteredResults);
    }
  };

  return (
    <div className="absolute right-80">
      <input
        type="text"
        placeholder="Search..."
        value={searchInput}
        onChange={handleInputChange}
      />
      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((result, index) => (
            <li key={index}>
              {result.name} - {result.type}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
