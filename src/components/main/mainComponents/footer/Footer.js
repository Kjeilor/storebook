import "./footer.scss";
import { NavLink } from "react-router-dom";

function Footer() {
  const today = new Date();
  return (
    <div className="ftr-wrpr">
      <div className="footer">
        <nav className="links">
          <div className="lnk-cntr">
            <small>
              <NavLink id="ftr-lnk">Privacy</NavLink>
            </small>
          </div>
          <div className="lnk-cntr">
            <small>
              <NavLink id="ftr-lnk">Terms of Service</NavLink>
            </small>
          </div>
          <div className="lnk-cntr">
            <small>
              &copy; {today.getFullYear()} - Storefront | Ateker
            </small>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Footer;
