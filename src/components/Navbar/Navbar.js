import React from "react";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <nav className="nav_menu">
      <div className="close_nav_menu hover_in_shadow">&times;</div>
      <div className="nav_menu_inner">
        <ul className="">
          <li className="nav-item">
            <a href="#" className="nav-link hover_in_shadow active">
              home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link hover_in_shadow">
              about
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link hover_in_shadow">
              services
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link hover_in_shadow">
              protfolio
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link hover_in_shadow">
              testimonial
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link hover_in_shadow">
              contact
            </a>
          </li>
        </ul>
      </div>
      <div className="copyright_text">&copy; 2021 by Tanvir Ahamed</div>
    </nav>
  );
};

export default Navbar;
