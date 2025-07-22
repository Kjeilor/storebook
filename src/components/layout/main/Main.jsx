import React from 'react';
import {Outlet} from 'react-router-dom';
import './Main.scss';

function Main() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Main;