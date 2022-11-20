import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Main from "../../components/main/Main";
import "./layout.scss";

function Layout() {
  return (
    <div className="layout">
      <Sidebar />
      <Main />
    </div>
  );
}

export default Layout;
