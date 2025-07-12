import React, { useState, useEffect } from "react";
import "./sidebar.scss";
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

function Sidebar() {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSidebarVisible(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className={`sidebar ${isSidebarVisible ? "" : "hidden"}`}>
      <button className="toggle" onClick={toggleSidebar}>
        <MenuOutlinedIcon />
      </button>
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
                <div>
                  <span className="title m-name">Updates</span>
                </div>
                <div className="badge upt-bdg"></div>
              </NavLink>
            </div>
            <div>
              <NavLink id="menu-itm" to="general">
                <div className="m-icn">
                  <SettingsOutlinedIcon />
                </div>
                <div>
                  <span className="title m-name">General</span>
                </div>
                <div className="badge upt-bdg"></div>
              </NavLink>
            </div>
            <div>
            <NavLink id="menu-itm" to="explore">
              <div className="m-icn">
                <ExploreOutlinedIcon />
              </div>
              <div>
                <span className="title m-name">Explore</span>
              </div>
              <div className="badge upt-bdg"></div>
            </NavLink>
          </div>

          <div>
            <div>
              <h4 className="title m-title">Workstation</h4>
            </div>
          </div>

          <div>
            <NavLink id="menu-itm" to="storebook">
              <div className="m-icn">
                <StorefrontOutlinedIcon />
              </div>
              <div>
                <span className="title m-name">Storebook</span>
              </div>
              <div className="badge upt-bdg"></div>
            </NavLink>
          </div>
          <div>
            <NavLink id="menu-itm" to="teams">
              <div className="m-icn">
                <PeopleOutlineOutlinedIcon />
              </div>
              <div>
                <span className="title m-name">Teams</span>
              </div>
              <div className="badge upt-bdg"></div>
            </NavLink>
          </div>
          <div>
            <NavLink id="menu-itm" to="catalogue">
              <div className="m-icn">
                <ViewInArOutlinedIcon />
              </div>
              <div>
                <span className="title m-name">Catalogue</span>
              </div>
              <div className="badge upt-bdg"></div>
            </NavLink>
          </div>
          <div>
            <NavLink id="menu-itm" to="marketing">
              <div className="m-icn">
                <CampaignOutlinedIcon />
              </div>
              <div>
                <span className="title m-name">Marketing</span>
              </div>
              <div className="badge upt-bdg"></div>
            </NavLink>
          </div>
          <div>
            <NavLink id="menu-itm" to="supplydock">
              <div className="m-icn">
                <DirectionsBoatOutlinedIcon />
              </div>
              <div>
                <span className="title m-name">Supply Dock</span>
              </div>
              <div className="badge upt-bdg"></div>
            </NavLink>
          </div>
          <div>
            <NavLink id="menu-itm" to="documents">
              <div className="m-icn">
                <InsertDriveFileOutlinedIcon />
              </div>
              <div>
                <span className="title m-name">Documents</span>
              </div>
              <div className="badge upt-bdg"></div>
            </NavLink>
          </div>
          </div>
        </div>
        <div className="usr-prof">
          <UserProfile />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;



