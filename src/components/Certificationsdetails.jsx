import React from "react";
import styled from "styled-components";
import certif from "../images/certiif.svg";
const Certificationsdetails = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{ textAlign: "center" }}>All Certifications</h1>
        <Experience
          style={{
            marginTop: "50px",
            marginBottom: "50px",
          }}
        >
          <div className="exp" style={{ position: "relative" }}>
            <h1>Google Cybersecurity Professional Certificate</h1>
            <h2>Google</h2>
            <a href="https://www.coursera.org/account/accomplishments/professional-cert/5K4PHFFHYC6C">
              <img className="cert" src={certif}></img>
            </a>
            <small>Apr 2024</small>
            <small className="Contenu">
              {" "}
              <ul>
                <li>
                  Acquired core principles of cybersecurity, including the CIA
                  triad (Confidentiality, Integrity, Availability).
                </li>
                <li>
                  Explored network security, including firewall configurations,
                  VPNs, and proxy servers.
                </li>
                <li>
                  Utilized cybersecurity tools such as SIEM and network protocol
                  analyzers.
                </li>
                <li>
                  Studied asset classification, data encryption, and user
                  authorization practices.
                </li>
                <li>
                  Developed skills in automating cybersecurity tasks using
                  Python.
                </li>
              </ul>
            </small>
          </div>
          <div className="exp" style={{ position: "relative" }}>
            <h1>
              Microsoft Azure Data Scientist Associate (DP-100) Certification
            </h1>
            <h2>Microsoft</h2>
            <a href="https://www.coursera.org/account/accomplishments/professional-cert/UNBDGPPCXXYR">
              <img src={certif} className="cert"></img>
            </a>
            <small>May 2024</small>
            <small className="Contenu">
              <ul>
                <li>
                  Designed and prepared machine learning solutions on Azure
                </li>
                <li>Created and managed Azure Machine Learning workspaces</li>
                <li>Prepared data for modeling and managed data assets</li>
                <li>Used Azure ML designer and notebooks for model training</li>
                <li>
                  Implemented automated machine learning for various data types
                </li>
                <li>Configured job runs and training scripts</li>
                <li>Developed training pipelines and managed model versions</li>
                <li>
                  Deployed models to various endpoints and implemented MLOps
                  practices
                </li>
              </ul>
            </small>
          </div>
          <div className="exp" style={{ position: "relative" }}>
            <h1>Google Advanced Data Analytics Professional Certificate</h1>
            <h2>Google</h2>
            <a href="https://www.coursera.org/account/accomplishments/professional-cert/L2BXBHFNLSX5">
              <img src={certif} className="cert"></img>
            </a>
            <small>Apr 2024</small>
            <small className="Contenu">
              <ul>
                <li>Introduction to Python programming</li>
                <li>Data structures and data manipulation in Python</li>
                <li>
                  Exploratory data analysis (EDA) and data visualization
                  techniques
                </li>
                <li>Data cleaning and preprocessing</li>
                <li>Advanced data visualization with Tableau</li>
                <li>
                  Statistical analysis using Python: descriptive statistics,
                  probability, sampling, hypothesis testing
                </li>
                <li>
                  Regression analysis: simple linear regression, multiple
                  regression, logistic regression
                </li>
                <li>Machine learning fundamentals and model building</li>
                <li>
                  Application of machine learning techniques in real-world
                  scenarios
                </li>
                <li>
                  Project-based learning and end-of-course projects to
                  demonstrate skills
                </li>
              </ul>
            </small>
          </div>
          <div className="exp" style={{ position: "relative" }}>
            <h1>Google Data Analytics Professional Certificate</h1>
            <h2>Google</h2>
            <a href="https://www.coursera.org/account/accomplishments/professional-cert/HSWACP3M68DC">
              <img src={certif} className="cert"></img>
            </a>
            <small>Apr 2024</small>
            <small className="Contenu">
              <ul>
                <li>
                  Learned the basics of data analytics, including understanding
                  data types and structures.
                </li>
                <li>
                  Explored SQL for data extraction and performed data cleaning
                  using spreadsheets and SQL.
                </li>
                <li>
                  Analyzed data to answer specific questions using advanced
                  spreadsheet formulas and SQL.
                </li>
                <li>
                  Created data visualizations and presentations using Tableau.
                </li>
                <li>
                  Gained skills in R programming for advanced data analysis.
                </li>
                <li>
                  Completed a capstone project involving a real-world data
                  analytics scenario.
                </li>
              </ul>
            </small>
          </div>
          <div className="exp" style={{ position: "relative" }}>
            <h1>Microsoft Cybersecurity Analyst Certification</h1>
            <h2>Microsoft</h2>
            <a href="https://www.coursera.org/account/accomplishments/professional-cert/PYBNJXUSY2D7">
              <img src={certif} className="cert"></img>
            </a>
            <small>Apr 2024</small>
            <small className="Contenu">
              <ul>
                <li>
                  Utilizing Microsoft Sentinel for threat detection, analysis,
                  and reporting
                </li>
                <li>
                  Configuring and using Microsoft Defender XDR and Microsoft
                  Defender for Cloud
                </li>
                <li>
                  Employing Kusto Query Language (KQL) for security operations
                </li>
                <li>Conducting threat management and response operations</li>
                <li>
                  Mitigating cyber threats using various security solutions
                </li>
                <li>Understanding compliance management and insider risk</li>
                <li>
                  Adhering to industry-specific regulations and standards (e.g.,
                  NIST, GDPR, ISO)
                </li>
                <li>
                  Performing security standard compliance and creating security
                  blueprints
                </li>
              </ul>
            </small>
          </div>
          <div className="exp" style={{ position: "relative" }}>
            <h1>Google IT Support Professional Certificate</h1>
            <h2>Google</h2>
            <a href="https://www.coursera.org/account/accomplishments/professional-cert/GDNBF7S8W9V2">
              <img src={certif} className="cert"></img>
            </a>
            <small>Apr 2024</small>
            <small className="Contenu">
              <ul>
                <li>
                  Gained foundational knowledge in technical support and
                  troubleshooting
                </li>
                <li>Learned to manage and configure computer networks</li>
                <li>
                  Acquired skills in operating systems, including Windows and
                  Linux
                </li>
                <li>
                  Developed proficiency in system administration and IT
                  infrastructure services
                </li>
                <li>Implemented IT security measures and best practices</li>
              </ul>
            </small>
          </div>
          <div className="exp" style={{ position: "relative" }}>
            <h1>Google IT Automation with Python Professional Certificate</h1>
            <h2>Google</h2>
            <a href="https://www.coursera.org/account/accomplishments/professional-cert/X8X956KWSLKJ">
              <img src={certif} className="cert"></img>
            </a>
            <small>Apr 2024</small>
            <small className="Contenu">
              <ul>
                <li>
                  Developed skills in Python programming, focusing on writing
                  scripts and automating tasks.
                </li>
                <li>
                  Learned to interact with the operating system using Python to
                  manage files and processes.
                </li>
                <li>
                  Gained proficiency in using Git and GitHub for version control
                  and collaboration on code.
                </li>
                <li>
                  Mastered troubleshooting and debugging techniques to write
                  more efficient and error-free code.
                </li>
                <li>
                  Understood configuration management and cloud automation using
                  tools like Puppet.
                </li>
                <li>
                  Completed real-world automation tasks, such as manipulating
                  images and interacting with web services using Python.
                </li>
              </ul>
            </small>
          </div>
          <div className="exp" style={{ position: "relative" }}>
            <h1>Cisco Junior Cybersecurity Analyst Path</h1>
            <h2>Cisco</h2>
            <a href="https://www.credly.com/badges/a23c6e14-66b7-4e35-8a42-2a16bec2ca60/public_url">
              <img src={certif} className="cert"></img>
            </a>
            <small>Apr 2024</small>
            <small className="Contenu">
              <ul>
                <li>
                  Understanding basic cybersecurity principles and the
                  importance of the field
                </li>
                <li>
                  Learning fundamental networking concepts and device
                  configurations
                </li>
                <li>Gaining knowledge on endpoint security practices</li>
                <li>
                  Developing skills in network defense and threat monitoring
                </li>
                <li>Managing cybersecurity threats effectively</li>
                <li>
                  Preparing for the Junior Cybersecurity Analyst certification
                  exam
                </li>
                <li>Implementing security measures and protocols</li>
                <li>
                  Utilizing tools and techniques for threat detection and
                  response
                </li>
                <li>
                  Learning about compliance standards and best practices in
                  cybersecurity
                </li>
              </ul>
            </small>
          </div>
        </Experience>
      </div>
    </div>
  );
};

export default Certificationsdetails;
const Experience = styled.div`
  margin: 10px 0 0;
  font-size: 14px;
  max-width: fit-content;
  color: #777;
  line-height: 1.4;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  justify-items: center;
  .exp {
    padding: 10px;
    width: 85%;
    border: 1px solid black;
    border-radius: 20px;
  }
  .exp h1 {
    font-size: 25px;
    color: rgb(52, 63, 85);
    width: 80%;
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
  @media screen and (max-width: 768px) {
    margin: 10px 0 0;
    font-size: 14px;
    max-width: fit-content;
    color: #777;
    line-height: 1.4;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
    justify-items: center;
    .exp {
      padding: 10px;
      width: 85%;
      border: 1px solid black;
      border-radius: 20px;
    }
    .exp h1 {
      font-size: 25px;
      color: rgb(52, 63, 85);
      width: 80%;
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
  }
`;
