import React from "react";
import { NavLink } from "react-router-dom";
import BizProfile from "./sidebarComponents/bizProfile/BizProfile";
import UserProfile from "./sidebarComponents/userProfile/UserProfile";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import DirectionsBoatOutlinedIcon from "@mui/icons-material/DirectionsBoatOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import "../styles/Sidebar.scss";

function Sidebar({
  isSidebarVisible,
  toggleSidebar,
  sidebarOpen,
  toggleSidebarMobile,
}) {
  return (
    <>
      {/* Toggle Button */}
      <button className="sidebar-toggle" onClick={toggleSidebarMobile}>
        <MenuOutlinedIcon />
      </button>

      <div
        className={`sidebar ${isSidebarVisible ? "" : "hidden"} ${
          sidebarOpen ? "open" : ""
        }`}
      >
        <div className="sidebar-content">
          <div className="biz-prof">
            <BizProfile />
          </div>
          <div className="menu-bar">
            <div className="menu-wrp">
              <div>
                <NavLink id="menu-itm" to="/Updates">
                  <div className="m-icn">
                    <NotificationsOutlinedIcon />
                  </div>
                  <span className="title m-name">Updates</span>
                  <div className="badge upt-bdg"></div>
                </NavLink>
              </div>

              <div>
                <NavLink id="menu-itm" to="/general">
                  <div className="m-icn">
                    <SettingsOutlinedIcon />
                  </div>
                  <span className="title m-name">General</span>
                  <div className="badge upt-bdg"></div>
                </NavLink>
              </div>

              <div>
                <NavLink id="menu-itm" to="/explore">
                  <div className="m-icn">
                    <ExploreOutlinedIcon />
                  </div>
                  <span className="title m-name">Explore</span>
                  <div className="badge upt-bdg"></div>
                </NavLink>
              </div>

              <div className="divider">
                <h4 className="title m-title">Workstation</h4>
              </div>

              <NavLink id="menu-itm" to="/storebook">
                <div className="m-icn">
                  <StorefrontOutlinedIcon />
                </div>
                <span className="title m-name">Storebook</span>
              </NavLink>

              <NavLink id="menu-itm" to="/teams">
                <div className="m-icn">
                  <PeopleOutlineOutlinedIcon />
                </div>
                <span className="title m-name">Teams</span>
              </NavLink>

              <NavLink id="menu-itm" to="/catalogue">
                <div className="m-icn">
                  <ViewInArOutlinedIcon />
                </div>
                <span className="title m-name">Catalogue</span>
              </NavLink>

              <NavLink id="menu-itm" to="/marketing">
                <div className="m-icn">
                  <CampaignOutlinedIcon />
                </div>
                <span className="title m-name">Marketing</span>
              </NavLink>

              <NavLink id="menu-itm" to="/supplydock">
                <div className="m-icn">
                  <DirectionsBoatOutlinedIcon />
                </div>
                <span className="title m-name">Supply Dock</span>
              </NavLink>

              <NavLink id="menu-itm" to="/documents">
                <div className="m-icn">
                  <InsertDriveFileOutlinedIcon />
                </div>
                <span className="title m-name">Documents</span>
              </NavLink>
            </div>
          </div>
          <div className="usr-prof">
            <NavLink to="/profile/user" className="user-link">
              <UserProfile />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
