import React from "react";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "../navBarStyle/navbar.scss";

function Explore() {
  return (
    <div>
      <title>Explore</title>
      <nav className="nav-btns">
        <div className="nav-wrpr">
          <div className="container">
            <aside className="main-nav">

              <main className="finder">
                <form action="" className="find-bar">
                  <input type="text" placeholder="Find" className="input" name="q"/>
                  <button type="submit" className="find-btn">
                    <SearchOutlinedIcon />
                  </button>
                </form>
              </main>
            </aside>
            <div className="app-btn" id="app-btn">
              <AppsOutlinedIcon />
            </div>
          </div>
        </div>
      </nav>

      <main>
        Explore
      </main>
    </div>
  );
}

export default Explore;
