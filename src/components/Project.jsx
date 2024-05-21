import React from "react";
import styled from "styled-components";
import sdn from "../images/SDN.png";
import firewall from "../images/Firewall.png";
import pixel from "../images/Pixel.png";
import voip from "../images/Voip.jpg";
const Project = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Projects</h1>
      <div className="conteneur">
        {" "}
        <div className="conteneur1">
          <div className="cardproj">
            <div className="proj">
              <h1>SDN Manager</h1>
              <img src={sdn}></img>
              <a
                href="https://github.com/Seiiize/SDN-Manager"
                style={{ textDecoration: "none" }}
              >
                <Button>
                  <button>
                    <span>Go to Code</span>
                  </button>
                </Button>
              </a>
            </div>
            <div className="proj">
              <h1 style={{ textAlign: "center" }}>Intelligent Firewall</h1>
              <img src={firewall}></img>
              <a
                href="https://github.com/Seiiize/Intelligent-Firewall"
                style={{ textDecoration: "none" }}
              >
                <Button>
                  <button>
                    <span>Go to Code</span>
                  </button>
                </Button>
              </a>
            </div>
            <div className="proj">
              <h1>Pixel</h1>
              <img src={pixel}></img>
              <a
                href="https://github.com/Seiiize/Pixel"
                style={{ textDecoration: "none" }}
              >
                <Button>
                  <button>
                    <span>Go to Code</span>
                  </button>
                </Button>
              </a>
            </div>
            <div className="proj">
              <h1>Distant VoIP</h1>
              <img className="voip" src={voip}></img>
              <a
                href="https://github.com/Seiiize/Distant-Voip"
                style={{ textDecoration: "none" }}
              >
                <Button>
                  <button>
                    <span>Go to Code</span>
                  </button>
                </Button>
              </a>
            </div>
          </div>
          <a
            className="showmore"
            style={{ textDecoration: "none" }}
            href="https://github.com/Seiiize"
          >
            <Button>
              <button>
                <span>Show More</span>
              </button>
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
const Button = styled.button`
  border: none;
  margin-right: 10px;
  button {
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background: #183153;
    font-family: "Montserrat", sans-serif;
    box-shadow: 0px 6px 24px 0px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    border: none;
  }

  button:after {
    content: " ";
    width: 0%;
    height: 100%;
    background: #ffd401;
    position: absolute;
    transition: all 0.4s ease-in-out;
    right: 0;
  }

  button:hover::after {
    right: auto;
    left: 0;
    width: 100%;
  }

  button span {
    text-align: center;
    text-decoration: none;
    width: 100%;
    padding: 18px 25px;
    color: #fff;
    font-size: 1.125em;
    font-weight: 700;
    letter-spacing: 0.3em;
    z-index: 20;
    transition: all 0.3s ease-in-out;
  }

  button:hover span {
    color: #183153;
    animation: scaleUp 0.3s ease-in-out;
  }

  @keyframes scaleUp {
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(0.95);
    }

    100% {
      transform: scale(1);
    }
  }
`;
