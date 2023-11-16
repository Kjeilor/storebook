import React from "react";
import Priheadr from "./components/modules/header/Priheadr";
import SearchBar from "./components/modules/search/SearchBar";
import Categories from "./components/modules/categories/Categories"

import "./components/primary.scss";

function Primary() {
  return (
    <div className="prim-wrpr">
      <div className="scns">
        <section className="section-header">
          <Priheadr />
        </section>
        <section className="tools">
          <div className="searchbar">
            <SearchBar />
            {/* Add your search bar JSX code here */}
          </div>
        </section>
        <section>
          <Categories />
        </section>
      </div>
    </div>
  );
}

export default Primary;
