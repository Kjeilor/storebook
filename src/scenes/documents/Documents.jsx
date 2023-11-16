import { NavLink, Outlet } from "react-router-dom";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import "../navBarStyle/navbar.scss";

function Documents() {
  return (
    <div>
      <title>Documents</title>
      <nav className="nav-btns">
        <div className="nav-wrpr">
          <div className="container">
            <aside className="main-nav">
              <main className="nav-lnks">
                <div>
                  <NavLink to="reports" id="btn-lnk">
                    Reports
                  </NavLink>
                </div>
                <div>
                  <NavLink to="archive" id="btn-lnk">
                    Archive
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

export default Documents;
