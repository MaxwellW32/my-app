import React from "react";
import logo from "../raw/Logo.svg";
import { HashLink as Link } from "react-router-hash-link";

function Footer(props) {
  return (
    <footer id="mainFooter">
      <img src={logo} />

      <div>
        <h3 className="footerLinkTitle">Doormat Navigation</h3>
        <ul>
          <li>
            <Link className="footerLink" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="footerLink" to="menu">
              Menu
            </Link>
          </li>
          <li>
            <Link className="footerLink" to="reservations">
              Reservations
            </Link>
          </li>
          <li>
            <Link className="footerLink" to="order-online">
              Order Online
            </Link>
          </li>
          <li>
            <Link className="footerLink" to="login">
              Login
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="footerLinkTitle">Contact</h3>
        <ul>
          <li>
            <a className="footerLink" href="#">
              Address
            </a>
          </li>
          <li>
            <a className="footerLink" href="#">
              Contact
            </a>
          </li>
          <li>
            <a className="footerLink" href="#">
              Email
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="footerLinkTitle">Social Media Links</h3>
        <ul>
          <li>
            <a className="footerLink" href="#">
              Instagram
            </a>
          </li>
          <li>
            <a className="footerLink" href="#">
              Facebook
            </a>
          </li>
          <li>
            <a className="footerLink" href="#">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
