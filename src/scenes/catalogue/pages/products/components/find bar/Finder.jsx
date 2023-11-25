import React, { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./finder.scss";

function Finder({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState("");
  
    const handleSearch = (e) => {
      e.preventDefault();
      onSearch(searchQuery);
    };
  
    return (
      <form action="" className="find-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Find Products..."
          className="input"
          name="q"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="find-btn">
          <SearchOutlinedIcon />
        </button>
      </form>
    );
  }
  
  export default Finder;