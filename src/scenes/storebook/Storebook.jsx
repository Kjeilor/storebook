import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import "../navBarStyle/navbar.scss";
import "./storebook.scss";

function Storebook() {
  return (
    <div className="storefront">
      <title>Storebook</title>
      <nav className="nav-btns">
        <div className="nav-wrpr">
          <div className="container">
            <aside className="main-nav">
              <main className="nav-lnks">
                <div>
                  <NavLink to="dashboard" id="btn-lnk">
                    Dashboard
                  </NavLink>
                </div>
                <div>
                  <NavLink to="customers" id="btn-lnk">
                    Customers
                  </NavLink>
                </div>
                <div>
                  <NavLink to="orders" id="btn-lnk">
                    Orders
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

export default Storebook;
