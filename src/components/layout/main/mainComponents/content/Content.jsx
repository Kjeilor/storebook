import React from "react";
import { Outlet } from "react-router-dom";
import "./content.scss";

function Content() {
  return (
    <div className="cont-wrpr">
      <Outlet />
    </div>
  );
}

export default Content;
