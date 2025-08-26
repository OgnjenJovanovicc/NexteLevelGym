import React from 'react';
import './Navbar.css';

function Navbar({ onAboutClick,onServicesClick, onMemberShipClick, onContactClick, onHomeClick}) {
  return (
    <nav className="navbar">
      <div className="logo"><span className="logo-icon"></span>NextLevel</div>
      <ul className="nav-links">
        <li><span className="nav-link" onClick={onHomeClick}>HOME</span></li>
        <li><span className="nav-link" onClick={onAboutClick}>ABOUT</span></li>
        <li><span className="nav-link" onClick={onServicesClick}>CLASSES</span></li>
        <li><span className="nav-link" onClick={onContactClick}>CONTACT</span></li>
        <li><span className="nav-link" onClick={onMemberShipClick}>CLANARINE</span></li>
      </ul>
    </nav>
  );
}

export default Navbar;

