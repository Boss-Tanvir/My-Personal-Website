import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="container d-flex justify-content-between">
        <div className="row">
          <div className="logo">
            <a href="#">T</a>
          </div>
        </div>
        <div className="humberger_btn hover_in_shadow">
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
