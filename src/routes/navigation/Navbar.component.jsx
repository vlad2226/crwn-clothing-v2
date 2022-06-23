import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";

const Navbar = () => {
  return (
    <>
      <div className="navigation">
        <div className="logo-container">
          <Link to="/">
            <CrownLogo />
          </Link>
        </div>
        <div className="nav-links-container">
          <div className="nav-link">
            <Link to="/shop">SHOP</Link>
          </div>
          <div className="nav-link">
            <Link to="/outlet">OUTLET</Link>
          </div>
          <div className="nav-link">
            <Link to="/sign-in">SIGN IN</Link>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
