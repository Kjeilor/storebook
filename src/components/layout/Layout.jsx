import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar/Sidebar';
import Main from './main/Main';
import './styles/Layout.scss';

function Layout() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="layout">
      <Sidebar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
      <div className="layout__content">
        <Outlet />
        <Main />
      </div>
    </div>
  );
}

export default Layout;