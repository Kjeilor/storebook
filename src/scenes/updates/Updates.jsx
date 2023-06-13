import { NavLink, Outlet } from "react-router-dom";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import "../styles/navbar.scss";

const Updates = () => {
  return (
    <div>
      <title>Updates</title>
      <nav className="nav-btns">
        <div className="nav-wrpr">
          <div className="container">
            <aside className="main-nav">
              <main className="nav-lnks">
                <div>
                  <NavLink to="inbox" id="btn-lnk">
                    Inbox
                  </NavLink>
                </div>
                <div>
                  <NavLink to="track" id="btn-lnk">
                    Track
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
};

export default Updates;
