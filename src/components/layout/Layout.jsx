import React from 'react';
import Sidebar from './sidebar/Sidebar';
import Main from './main/Main';
import './styles/Layout.scss';

function Layout() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="layout__content">
        <Main />
      </div>
    </div>
  );
}

export default Layout;