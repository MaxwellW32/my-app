import React from "react";
import logo from "../raw/Logo.svg";

function Footer(props) {
  return (
    <footer id="mainFooter">
      <img src={logo} />

      <div>
        <h3 className="footerLinkTitle">Doormat Navigation</h3>
        <ul>
          <li>
            <a className="footerLink" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="footerLink" href="#">
              Menu
            </a>
          </li>
          <li>
            <a className="footerLink" href="#">
              Reservations
            </a>
          </li>
          <li>
            <a className="footerLink" href="#">
              Order Online
            </a>
          </li>
          <li>
            <a className="footerLink" href="#">
              Login
            </a>
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
