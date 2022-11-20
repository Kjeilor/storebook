import "./navbar.scss";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";

function Navbar() {
  return (
    <div className="nav-wrpr">
      <div className="container">
        <aside className="main-nav">
          <div className="menu-btn">
            <button>
              <MenuOutlinedIcon />
            </button>
          </div>

          <main className="nav-scenes">

          </main>
        </aside>
        <div className="app-btn">
          <AppsOutlinedIcon />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
