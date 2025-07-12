import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import Main from "../main/Main";
// import Splash from "./components/splash/Splash";
import "./layout.scss";

function Layout() {
  
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="layout">
      <Sidebar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
      <Main />
    </div>
  );
}

export default Layout;
