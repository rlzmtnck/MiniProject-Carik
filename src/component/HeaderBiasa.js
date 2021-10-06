import React from "react";
import "./kepala.css";
import { Navbar, Nav } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
const HeaderBiasa = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-xl navbar-dark bg-dark navvbar">
        <a
          className="navbar-brand"
          style={{ fontWeight: "bold", marginLeft: "30px", fontSize: "50px" }}
          href="#"
        >
          CaRik
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navbar-nav ml-auto"
            style={{ marginLeft: "1200px", marginTop: "1px" }}
          >
            <li className="nav-item">
              <a className="nav-link" href="/">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                ABOUT
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default HeaderBiasa;
