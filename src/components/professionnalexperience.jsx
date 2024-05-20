import React from "react";
import styled from "styled-components";
const professionnalexperience = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <h1 style={{ textAlign: "center" }}>Professional Experience</h1>
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
          <h1>Ericsson</h1>
          <h2>NMSD Department</h2>
          <h2 style={{ position: "absolute", right: "10px", top: "10px" }}>
            Project Intern
          </h2>
          <small>Bab Ezzouar, Algiers</small> <br />
          <small>Jan 2024 - Jun 2024</small>
          <small className="Contenu">
            {" "}
            <ul>
              <li>
                Learned about the various domains in which the company operates
              </li>
              <li>Gained insight into the work of each department</li>
              <li>
                Observed the configuration of several mobile network equipment
                (digital unit, RRU, antennas, BB, DUW)
              </li>
              <li>
                Completed our final year project focused on developing an
                intelligent firewall based on artificial intelligence, which
                included:
                <ul class="sub-list">
                  <li>
                    Generating our dataset and performing data preprocessing
                  </li>
                  <li>
                    Developing our anomaly detection framework using two
                    different models: GAN and Random Forest
                  </li>
                  <li>
                    Deploying our solution by creating a graphical user
                    interface using React for the front end and Flask for the
                    back end
                  </li>
                </ul>
              </li>
            </ul>
          </small>
        </div>
        <div className="exp" style={{ position: "relative" }}>
          <h1>Sonelgaz</h1>
          <h2>ELIT</h2>
          <h2 style={{ position: "absolute", right: "10px", top: "10px" }}>
            Intern
          </h2>
          <small>Gué de Constantine, Algiers</small> <br />
          <small>Mar 2023 - Apr 2023</small>
          <small className="Contenu">
            <ul>
              <li>Learned about the company's operations</li>
              <li>
                Handled switches and routers (basic configuration, router
                stacking, VLANs, DHCP)
              </li>
              <li>
                Gained knowledge in network systems administration with
                Microsoft Windows Server (Active Directory, DHCP, DNS)
              </li>
              <li>Learned the basics of Linux</li>
              <li>Learned how their VoIP infrastructure operates</li>
            </ul>
          </small>
        </div>
      </Experience>
    </div>
  );
};
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
    font-size: 18px;
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
export default professionnalexperience;
