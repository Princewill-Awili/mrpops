import React from "react";
import "./navbar.css";

import Logo from '../Logo/Logo'
import Misc from '../Misc/Misc'

const Navbar = () => {
  return (
     <div className="navbar">
          <Logo/>
          <Misc/> 
     </div>
  );
};

export default Navbar;
