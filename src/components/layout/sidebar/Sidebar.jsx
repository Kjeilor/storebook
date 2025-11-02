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
import "../styles/Sidebar.scss";

function Sidebar({ isSidebarVisible }) {
  return (
    <div className={`sidebar ${!isSidebarVisible ? "hidden" : ""}`}>
      <div className="sidebar-content">
        <div className="biz-prof"><BizProfile /></div>
        <div className="menu-bar">
          <div className="menu-wrp">
            <NavLink id="menu-itm" to="/Updates">
              <NotificationsOutlinedIcon />
              <span className="title m-name">Updates</span>
              <div className="badge upt-bdg"></div>
            </NavLink>

            <NavLink id="menu-itm" to="/general">
              <SettingsOutlinedIcon />
              <span className="title m-name">General</span>
              <div className="badge upt-bdg"></div>
            </NavLink>

            <NavLink id="menu-itm" to="/explore">
              <ExploreOutlinedIcon />
              <span className="title m-name">Explore</span>
              <div className="badge upt-bdg"></div>
            </NavLink>

            <div className="divider">
              <h4 className="title m-title">Workstation</h4>
            </div>

            <NavLink id="menu-itm" to="/storebook">
              <StorefrontOutlinedIcon />
              <span className="title m-name">Storebook</span>
            </NavLink>

            <NavLink id="menu-itm" to="/teams">
              <PeopleOutlineOutlinedIcon />
              <span className="title m-name">Teams</span>
            </NavLink>

            <NavLink id="menu-itm" to="/catalogue">
              <ViewInArOutlinedIcon />
              <span className="title m-name">Catalogue</span>
            </NavLink>

            <NavLink id="menu-itm" to="/marketing">
              <CampaignOutlinedIcon />
              <span className="title m-name">Marketing</span>
            </NavLink>

            <NavLink id="menu-itm" to="/supplydock">
              <DirectionsBoatOutlinedIcon />
              <span className="title m-name">Supply Dock</span>
            </NavLink>

            <NavLink id="menu-itm" to="/documents">
              <InsertDriveFileOutlinedIcon />
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
  );
}

export default Sidebar;