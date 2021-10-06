import React from "react";
import "../component/style.css";
import HeaderBiasa from "../component/HeaderBiasa";

const About = () => {
  return (
    <>
      <HeaderBiasa />
      <div className="vecbout ">
        <div className="container-fluid">
          <h1
            style={{
              marginTop: "150px",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            ABOUT CaRik
          </h1>

          <p
            style={{
              fontSize: "24px",
              marginTop: "10px",
              marginLeft: "-6px",
              paddingRight: "600px",
              lineHeight: "28px",
            }}
          >
            CaRik adalah web karya anak bangsa yang menyediakan ribuan lirik
            dari musik mancanegara.Web ini dibuat untuk memenuhi sebuah Mini
            Project.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
