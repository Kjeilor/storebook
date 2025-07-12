import React from "react";
import { Outlet } from "react-router-dom";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import "../navBarStyle/navbar.scss"; 
import "./catalogue.scss"; 

function Catalogue() {
  return (
    <div className="catalogue-layout">
      <title>Catalogue</title>
      {/* CATALOGUE-SPECIFIC HEADER/NAV (Your original nav-btns and app-btn) */}
      <nav className="nav-btns">
        <div className="nav-wrpr">
          <div className="container">
            <aside className="main-nav">
              {/* This section (main-nav nav-lnks) was empty in your old code. */}
              {/* If it holds any links specific to the catalogue header, they'd go here. */}
            </aside>
            <div className="app-btn" id="app-btn">
              <AppsOutlinedIcon />
            </div>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT AREA: SIDEBAR + OUTLET */}
      <div className="catalogue-main-area">
        <aside className="catalogue-sidebar">
          {/* These sections are moved from your old Products.jsx to be persistent */}
          <section className="sidebar-section category-section">
            <div>
              <h3>Category</h3>
            </div>
            <div>
              <small>No categories created</small>
            </div>
          </section>
          <section className="sidebar-section catalogues-section">
            <div>
              <h3>Catalogues</h3>
            </div>
            <div>
              <small>No catalogues created</small>
            </div>
          </section>
          <section className="sidebar-section top-rated-section">
            <div>
              <h3>Top Rated</h3>
            </div>
            <div>
              <small>No top rated items</small>
            </div>
          </section>
          {/* Any other persistent sidebar elements for the catalogue scene */}
        </aside>
        
        <main className="catalogue-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Catalogue;