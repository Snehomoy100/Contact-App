//TODO: DONE: set NavbarBrand to go to home page and export Header

import React from "react";
import { Navbar, NavbarBrand, NavbarText } from "reactstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar color="info" light>
      <NavbarBrand tag={ Link } to="/" className="text-white">The Contact App</NavbarBrand>
      <NavbarText className="text-white float-right">
       Snehomoy's Contact app
      </NavbarText>
    </Navbar>
  );
};

export default Header
