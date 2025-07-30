import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./assets/ateker-logo.png";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Header() {
  const [open, setOpen] = useState(false);
  const nav = useNavigate();

  return (
    <div className="header-wrapper">
      <header className="landing-header">
        <img src={logo} alt="Ateker Storebook" className="logo" />
        <nav>
          <div className="hamburger" onClick={() => setOpen(!open)}>
            {open ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
          </div>
          <div className={`nav-links ${open ? "open" : ""}`}>
            <button onClick={() => nav("/auth/signin")}>Sign In</button>
            <button onClick={() => nav("/auth/signup")}>Sign Up</button>
          </div>
        </nav>
      </header>
    </div>
  );
}