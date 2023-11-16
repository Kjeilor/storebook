import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./SearchBar.scss"

function SearchBar() {
  return (
    <div>
      <main className="finder">
        <form action="" className="find-bar">
          <input type="text" placeholder="Find" className="input" name="q" />
          <button type="submit" className="find-btn">
            <SearchOutlinedIcon />
          </button>
        </form>
      </main>
    </div>
  );
}

export default SearchBar;
