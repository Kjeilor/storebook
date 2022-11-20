import { NavLink, Outlet } from "react-router-dom";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import "../styles/navbar.scss";

function Catalogue() {
  return (
    <div>
      <title>Inventory | Ateker</title>
      <nav className="nav-btns">
        <div className="nav-wrpr">
          <div className="container">
            <aside className="main-nav">
              <div className="fxd-btn" id="menu-btn">
                <MenuOutlinedIcon />
              </div>

              <main className="nav-lnks">
                <div>
                  <NavLink to="products" id="btn-lnk">
                    Products
                  </NavLink>
                </div>
                <div>
                  <NavLink to="services" id="btn-lnk">
                    Services
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

export default Catalogue;
