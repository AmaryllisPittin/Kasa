import React from "react";
import logo from "../img/LOGO(2).png";

const Footer = () => {
  return (
    <footer className="footer">
        <img src={logo} className="kasa-logo" alt="logo de Kasa" />
        <h3 className="footer__copyright">© 2020 Kasa. All rights reserved</h3>
    </footer>
    )
}

export default Footer;