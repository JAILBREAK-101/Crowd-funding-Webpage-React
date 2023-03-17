import React from "react";
import NavBar from "./NavBar";

import logo from "./images/logo.svg";

export default function Header() {
  return (
    <div className="header-container">
      <header className="header">
        <img src={logo} alt="Main Logo" />
        {/* The above is a normal attribute for the HTML Document, and the below is a prop for our comtom component*/}
        <NavBar className="NavBar" name="Hello" />
      </header>
    </div>
  );
}
