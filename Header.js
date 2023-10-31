import React from "react";
import logo from "./Image/WhatsApp Image 2023-08-29 at 15.47.39.jpg";

const Header = () => {
  return (
    <>
      <div className="header">
          <img src={logo} width="105" height="80" />
          <h1 className="hed">SATYAM KEEP</h1>
      </div>
    </>
  );
};

export default Header;
