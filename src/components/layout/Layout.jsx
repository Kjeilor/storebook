import React, { useState, useEffect } from "react";
import Sidebar from "./sidebar/Sidebar";
import Main from "./main/Main";
import Splash from "../splash/Splash.jsx";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import "./styles/Layout.scss";

function Layout() {
  const [showSplash, setShowSplash] = useState(true);
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const toggleSidebarDesktop = () => setSidebarVisible(p => !p);
  const toggleSidebarMobile = () => setMobileSidebarOpen(p => !p);

  const isOpen = window.innerWidth <= 768 ? isMobileSidebarOpen : isSidebarVisible;

  if (showSplash) return <Splash />;

  return (
    <div className="layout">
      {/* Pass the correct open/close flag down */}
      <Sidebar
        isSidebarVisible={window.innerWidth <= 768 ? isMobileSidebarOpen : isSidebarVisible}
        toggleSidebar={toggleSidebarDesktop}
        sidebarOpen={isMobileSidebarOpen}
        toggleSidebarMobile={toggleSidebarMobile}
      />

      {/* Single floating toggle */}
      <button
        className="layout__sidebar-toggle"
        onClick={window.innerWidth <= 768 ? toggleSidebarMobile : toggleSidebarDesktop}
      >
        {isOpen ? <CloseOutlinedIcon fontSize="small" /> : <MenuOutlinedIcon fontSize="small" />}
      </button>

      <div className="layout__content">
        <Main />
      </div>
    </div>
  );
}

export default Layout;