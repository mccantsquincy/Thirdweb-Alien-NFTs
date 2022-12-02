import React from "react";
import "./Header.css";
import alienLogo from "../assets/alienlogo.svg";
import searchIcon from "../assets/search.png";
import themeToggle from "../assets/theme-switch.png" 


function Header() {
  return (
    <div className="header">
      <div className="logo__container">
        <img src={alienLogo} className="alien__logo" />
      </div>

      <div className="searchbar">
        <div className="search__icon-container">
          <img src={searchIcon} />
        </div>
        <input
          className="searchInput"
          placeholder="Collection, item or user..."
        />
      </div>

      <div className="headerItems">
         <p className="nodrop">Drops</p>
         <p className="nodrop">Marketplace</p>
         <p className="nodrop">Create</p>
      </div>

      <div className="headerActions">
         <div className="themeToggleContainer">
           <img src={themeToggle} alt="theme-toggle" className="themeToggleIcon nodrop"/>
         </div>

         <div className="loginBtn nodrop">
           GET IN
         </div>
      </div>
    </div>
  );
}

export default Header;
