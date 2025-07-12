import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import "../navBarStyle/navbar.scss";

function General() {
  return (
    <div>
      <title>General</title>
      <nav className="nav-btns">
        <div className="nav-wrpr">
          <div className="container">
            <aside className="main-nav">
              <main className="nav-lnks">
                <div>
                  <NavLink to="settings" id="btn-lnk">
                    Settings
                  </NavLink>
                </div>
                <div>
                  <NavLink to="billing" id="btn-lnk">
                    Billing
                  </NavLink>
                </div>
                <div>
                  <NavLink to="support" id="btn-lnk">
                    Support
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

export default General;
