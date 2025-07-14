import React, { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "../..//finder.scss"; // Corrected path to its own SCSS

// FIX: Ensure onSearch prop is accepted
function Finder({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload on form submission
    onSearch(searchQuery); // Pass the query to the parent component
  };

  return (
    <form className="finder-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
        className="finder-input"
      />
      <button type="submit" className="finder-button">
        <SearchOutlinedIcon className="finder-icon" />
      </button>
    </form>
  );
}

export default Finder;