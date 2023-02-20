import React from "react";
import { HashLink as Link } from "react-router-hash-link";

function Nav(props) {
  return (
    <nav id="topNav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="menu">Menu</Link>
        </li>
        <li>
          <Link to="reservations">Reservations</Link>
        </li>
        <li>
          <Link to="order-online">Order Online</Link>
        </li>
        <li>
          <Link to="login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
