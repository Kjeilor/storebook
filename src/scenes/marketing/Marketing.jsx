import React from 'react';
import { NavLink, Outlet } from "react-router-dom";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import "../navBarStyle/navbar.scss";

function Marketing() {
  return (
    <div>
      <title>Marketing</title>
      <nav className="nav-btns">
        <div className="nav-wrpr">
          <div className="container">
            <aside className="main-nav">
              <main className="nav-lnks">
                <div>
                  <NavLink to="campaigns" id="btn-lnk">
                    Campaigns
                  </NavLink>
                </div>
                <div>
                  <NavLink to="programs" id="btn-lnk">
                    Programs
                  </NavLink>
                </div>
                <div>
                  <NavLink to="assets" id="btn-lnk">
                    Assets
                  </NavLink>
                </div>
              </main>
            </aside>
            <div className="app-btn" id="app-btn">
              <AppsOutlinedIcon />
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Marketing;
