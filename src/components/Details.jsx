import React from "react";
import styled from "styled-components";
import certif from "../images/certiif.svg";
import diplome from "../Files/DiplomeLicence.pdf";
const Details = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <div>
        <h1 style={{ textAlign: "center" }}>Diplomas</h1>
        <Experience
          style={{
            marginTop: "50px",
            marginBottom: "50px",
            display: "flex",
            width: "100%",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="exp" style={{ position: "relative" }}>
            <h1>Master Degree in Network and Telecommunications</h1>
            <h2>University of Science and Technology Houari Boumediene</h2>
            <h2 className="ongoing">On Going</h2>
            <small>Electrical Engineering Faculty</small> <br />
            <small>2022 - Now</small>
            <small className="Contenu">
              {" "}
              <ul>
                <li>Mastered IP routing and advanced digital communications</li>
                <li>
                  Gained expertise in signal processing, propagation, and
                  antenna technologies
                </li>
                <li>
                  Developed strong object-oriented programming skills using
                  Python
                </li>
                <li>
                  Acquired advanced knowledge of Linux systems and Windows
                  Server network administration
                </li>
                <li>
                  Studied high-speed networks, satellite networks, and VoIP
                  infrastructure
                </li>
                <li>
                  Learned coding and compression techniques, along with
                  transmission channels and optical components
                </li>
                <li>
                  Developed skills in web development and Internet of Things
                  (IoT) technologies
                </li>
                <li>
                  Specialized in artificial intelligence, focusing on machine
                  learning algorithms and their applications
                </li>
                <li>
                  Gained in-depth understanding of cryptography and network
                  security
                </li>
                <li>
                  Explored wireless and mobile networks, including the latest
                  advancements in 5G technology
                </li>
                <li>
                  Worked with digital signal processing (DSP) and
                  field-programmable gate arrays (FPGA)
                </li>
              </ul>
            </small>
          </div>
          <div className="exp" style={{ position: "relative" }}>
            <h1>Bachelor's Degree in Telecommunications</h1>
            <h2>University of Science and Technology Houari Boumediene</h2>
            <a href={diplome}>
              <img className="diplome" src={certif}></img>
            </a>
            <small>Electrical Engineering Faculty</small> <br />
            <small>2019 - 2022</small>
            <small className="Contenu">
              <ul>
                <li>
                  Acquired skills in signal processing and both analog and
                  digital communications
                </li>
                <li>
                  Gained foundational knowledge in telecommunications and
                  electronic systems
                </li>
                <li>Studied electrotechnics and local computer networks</li>
                <li>
                  Learned the principles of telephony and telecommunication
                  network systems
                </li>
                <li>
                  Gained experience with microprocessors and interfacing,
                  specifically the 8086
                </li>
                <li>
                  Explored wave propagation, antennas, and transmission lines
                </li>
                <li>
                  Developed understanding of coding theory and information
                  theory
                </li>
                <li>Studied optoelectronics and its applications</li>
                <li>Gained insights into information security</li>
              </ul>
            </small>
          </div>
          <div className="exp" style={{ position: "relative" }}>
            <h1 className="dipl">
              The Full-Stack Javascript Bootcamp Certificate
            </h1>
            <h2>GOMYCODE</h2>
            <a href="https://diploma.gomycode.app/?id=31670094882735491">
              <img className="diplome" src={certif}></img>
            </a>
            <small>Bab Ezzouar</small> <br />
            <small>Aug 2022 - Feb 2023</small>
            <small className="Contenu">
              <ul>
                <li>
                  Mastered web development fundamentals (HTML, CSS, JavaScript)
                  and advanced techniques (CSS Layout, ES6)
                </li>
                <li>
                  Proficient in Git and GitHub for version control, utilizing
                  Git-Flow workflow
                </li>
                <li>
                  Developed skills in React JS, including JSX, components,
                  state, hooks, and Redux
                </li>
                <li>
                  Gained experience in backend development with Node.js,
                  Express, and MongoDB, including REST API creation
                </li>
                <li>
                  Studied algorithms, data structures, and procedural
                  programming
                </li>
                <li>
                  Learned about databases (SQL vs NoSQL), entity-relationship
                  models, and cloud integration fundamentals
                </li>
                <li>Built a fully functional app during the lab phase</li>
              </ul>
            </small>
          </div>
        </Experience>
      </div>
    </div>
  );
};

export default Details;
const Experience = styled.div`
  margin: 10px 0 0;
  width: 100%;
  font-size: 14px;
  color: #777;
  line-height: 1.4;
  display: grid;
  gap: 10px;
  .exp {
    padding: 10px;
    width: 80%;
    border: 1px solid black;
    border-radius: 20px;
  }
  .exp h1 {
    font-size: 25px;
    color: rgb(52, 63, 85);
  }
  .exp h2 {
    font-size: 16px;
    color: rgb(52, 63, 85);
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  ul li {
    margin: 10px 0;
  }
  ul li::before {
    content: "• ";
    color: #2e8b57;
    font-weight: bold;
  }
  .sub-list {
    margin-left: 20px;
  }
  .Contenu {
    font-size: 14px;
  }
`;
