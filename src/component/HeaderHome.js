import React from "react";
import "./kepala.css";

import "bootstrap/dist/css/bootstrap.min.css";
const HeaderHome = () => {
  return (
    <div className="navhome daco container-fluid">
      <div className="carikbrand carikpos">CaRik</div>
      <div className="konten">
        <div className="tittle">Cari Lirikmu</div>
        <div className="tittle1">Cari lirik musik favoritmu dan jelajahi</div>
        <div className="tittle1">tanpa batas tanpa biaya</div>
        <a href="/main">
          <button className="but">Get Started</button>
        </a>

        {/* <button className="but" href="https://www.google.com/">Get Started</button> */}
      </div>
      <nav style={{ marginLeft: "1280px", marginTop: "-230px" }}>
        <ul>
          <li>
            <a href="/">HOME</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/about">ABOUT</a>
          </li>
        </ul>
      </nav>

      {/* <div className="logoo">
            <img
          src={ logo }
          width="489"
          height="476"
          alt=""
        />
    </div> */}
    </div>
  );
};
export default HeaderHome;
