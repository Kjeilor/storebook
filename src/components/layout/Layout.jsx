import React, { useState, useEffect } from "react";
import Sidebar from "./sidebar/Sidebar";
import Main from "./main/Main";
import Splash from "../splash/Splash.jsx";
import "./styles/Layout.scss";

function Layout() {
  const [showSplash, setShowSplash] = useState(true);
  const [isSidebarVisible, setSidebarVisible] = useState(true); // desktop sidebar
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false); // mobile sidebar

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const toggleSidebarDesktop = () => {
    setSidebarVisible(prev => !prev);
  };

  const toggleSidebarMobile = () => {
    setMobileSidebarOpen(prev => !prev);
  };

  if (showSplash) return <Splash />;

  return (
    <div
      className={`layout
        ${!isSidebarVisible ? "sidebar-hidden" : ""}
        ${isMobileSidebarOpen ? "sidebar-open-mobile" : ""}
      `}
    >
      <Sidebar
        toggleSidebar={toggleSidebarDesktop}
        isSidebarVisible={isSidebarVisible}
        sidebarOpen={isMobileSidebarOpen}
        toggleSidebarMobile={toggleSidebarMobile}
      />
      <div className="layout__content">
        <Main />
      </div>
    </div>
  );
}

export default Layout;
