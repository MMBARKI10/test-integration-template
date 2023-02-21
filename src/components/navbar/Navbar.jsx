import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  let activeClassName = "active nav-link";

  return (
    <div>
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close">
            <span className="icon-close2 js-menu-toggle" />
          </div>
        </div>
        <div className="site-mobile-menu-body" />
      </div>
      <header className="site-navbar py-4" role="banner">
        <div className="container">
          <div className="d-flex align-items-center">
            <div className="site-logo">
              <a href="/">
                <img src="assets/images/logo.png" alt="Logo" />
              </a>
            </div>
            <div className="ml-auto">
              <nav
                className="site-navigation position-relative text-right"
                role="navigation"
              >
                <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? activeClassName : "nav-link"
                      }
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/matches"  >
                      Matches
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/players" className="nav-link">
                      Players
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/blog" className="nav-link">
                      Blog
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact" className="nav-link">
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </nav>
              <a
                href="#"
                className="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black float-right text-white"
              >
                <span className="icon-menu h3 text-white" />
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar