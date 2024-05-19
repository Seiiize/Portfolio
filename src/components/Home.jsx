import Typed from "typed.js";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import React from "react";
import diplome from "../images/diplome.svg";
import skills from "../images/skills.svg";
import languages from "../images/langue.svg";
import certif from "../images/certification.svg";
import scroll from "../images/scroll.svg";
import cv from "../Files/CHIKH_ChafikSofiane_CV.pdf";
import moi from "../images/meee.png";
import Professionnalexperience from "./professionnalexperience";
import AOS from "aos";
import "aos/dist/aos.css";
import Project from "./Project";
import Details from "./Details";
import Certificationsdetails from "./Certificationsdetails";

const Home = () => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, offset: 500, mirror: true });

    const options = {
      strings: [
        "Network and Telecommunications Engineer",
        "Fullstack Developer",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <div className="principal">
      <StyledMain id="home" className="container__wrapper">
        <div className="container" data-aos="fade-in">
          <img
            src={scroll}
            style={{
              position: "absolute",
              left: "1660px",
              width: "180px",
              top: "250px",
            }}
          ></img>
          <h1 data-aos="fade-right" style={{ fontSize: "40px" }}>
            <span>I am a </span>
            <span className="test" ref={el}></span>
          </h1>

          <p data-aos="fade-right">
            A highly motivated and passionate Network And Telecommunications
            Engineer Student, Fullstack Developer. Always seeks to acquire new
            knowledge and develop my skills, Strong desire and big determination
            to succeed in my field of work.
          </p>
          <div className="contact" data-aos="fade-right">
            <a
              href="mailto:sofianechikhso@gmail.com"
              style={{ textDecoration: "none" }}
            >
              <Button>
                <button>
                  <span>Contact Me</span>
                </button>
              </Button>
            </a>
            <a
              href={cv}
              download={"CHIKH Chafik Sofiane CV"}
              style={{ textDecoration: "none" }}
            >
              <Button>
                <button>
                  <span>Download My CV</span>
                </button>
              </Button>
            </a>
          </div>
        </div>
        <Container2 data-aos="fade-up">
          <div className="card" data-aos="fade-up">
            <img src={diplome} alt="" />
            <h1>Diplomas</h1>
            <div className="card__content">
              <p className="card__title">Diplomas : </p>
              <div className="card__description">
                <div className="diplomas">
                  <p>Master Degree in Network and Telecommunications</p>
                  <small>
                    University of Science and Technology Houari Boumediene
                  </small>
                  <small>Electrical Engineering Faculty</small>
                  <small>2022 - Now</small>
                </div>
                <div className="diplomas">
                  <p>Bachelor's Degree in Telecommunications</p>
                  <small>
                    University of Science and Technology Houari Boumediene
                  </small>
                  <small>Electrical Engineering Faculty</small>
                  <small>2019 - 2022</small>
                </div>
                <div className="diplomas">
                  <p>The Full-Stack Javascript Bootcamp Certificate</p>
                  <small>GOMYCODE</small>
                  <small>Bab Ezzouar</small>
                  <small>Aug 2022 - Feb 2023</small>
                </div>
              </div>
            </div>
          </div>
          <div className="card" data-aos="fade-up">
            <img src={certif} alt="" />
            <h1>Certifications</h1>
            <div className="card__content">
              <p className="card__title">Certifications : </p>
              <div className="card__description">
                <div className="certifications">
                  <p>Google Advanced Data Analytics</p>
                  <small>Google</small>
                  <small>Apr 2024</small>
                </div>
                <div className="certifications">
                  <p>Google Cybersecurity</p>
                  <small>Google</small>
                  <small>Mar 2024</small>
                </div>
                <div className="certifications">
                  <p>Google IT Automation with Python</p>
                  <small>Google</small>
                  <small>Mar 2024</small>
                </div>
                <div className="certifications">
                  <p>Microsoft Cybersecurity Analyst</p>
                  <small>Microsoft</small>
                  <small>Mar 2024</small>
                </div>
                <div className="certifications">
                  <p>Junior Cybersecurity Analyst Career Path</p>
                  <small>Cisco</small>
                  <small>Mar 2024</small>
                </div>
                <div className="certifications">
                  <p>The Full-Stack Javascript Bootcamp Certificate</p>
                  <small>GOMYCODE</small>
                  <small>Feb 2023</small>
                </div>
              </div>
            </div>
          </div>
          <div className="card" data-aos="fade-up">
            <img src={skills} alt="" />
            <h1>Skills</h1>
            <div className="card__content">
              <p className="card__title">Skills : </p>
              <div className="card__description">
                <div className="skills">
                  <p>Programmation Languages :</p>
                  <small>Python, Java, Matlab, C</small>
                </div>
                <div className="skills">
                  <p>Front-End Development :</p>
                  <small>Html, CSS, JavaScript, ReactJs</small>
                </div>
                <div className="skills">
                  <p>Back-End Development:</p>
                  <small>JavaScript, Node.Js, Express.Js, MongoDB</small>
                </div>
                <div className="skills">
                  <p>Network systems administration</p>
                  <small>RedHat, Microsoft Server</small>
                </div>
                <div className="skills">
                  <p>in-depth knowledge of computer networking</p>
                  <small>CCNA</small>
                </div>
                <div className="skills">
                  <p>Basic knowledge of Cloud Computing</p>
                  <small>AWS, Microsoft Azure</small>
                </div>
              </div>
            </div>
          </div>
          <div className="card" data-aos="fade-up">
            <img src={languages} alt="" />
            <h1>Languages</h1>
            <div className="card__content">
              <p className="card__title">Languages :</p>
              <div className="card__description">
                <div className="languages">
                  <p>French</p>
                  <small>Level: C2</small>
                </div>
                <div className="languages">
                  <p>Arabic</p>
                  <small>Spoken Language</small>
                </div>
                <div className="languages">
                  <p>Kabyle</p>
                  <small>Native language</small>
                </div>
                <div className="languages">
                  <p>English</p>
                  <small>Level : B2</small>
                </div>
                <div className="languages">
                  <p>German</p>
                  <small>Level : A1</small>
                </div>
              </div>
            </div>
          </div>
        </Container2>
        <Moi data-aos="fade-up">
          <img src={moi} alt="" />
        </Moi>
        <div data-aos="fade-in">
          <Professionnalexperience />
        </div>
        <div data-aos="fade-in">
          <Project />
        </div>
        <div data-aos="fade-in">
          <Details />
        </div>
        <div data-aos="fade-in">
          <Certificationsdetails />
        </div>
      </StyledMain>
    </div>
  );
};

export default Home;

const StyledMain = styled.main`
  color: rgb(52, 63, 85);
  .container {
    padding: 15em;
    height: 15vh;
    display: flex;
    flex-direction: column;
    gap: 1em;
    background-image: url(bg);
    background-repeat: no-repeat;
    background-position: center right;
    text-align: center;
    align-items: center;
  }
  .container p {
    max-width: 70ch;
    line-height: 1.5em;
  }
  .contact {
    display: flex;
    align-content: center;
  }
  @media screen and (max-width: 68em) {
    .container {
      padding-top: 10em;
      background-image: none;
    }
    .contact {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1em;
    }
    .socials {
      display: flex;
      justify-content: center;
      margin-top: 1em;
    }
  }
`;

const Image = styled.img``;
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
const Container2 = styled.div`
  display: grid;
  width: fit-content;
  position: relative;
  left: 35px;
  gap: 60px;
  grid-template-columns: repeat(4, 1fr);
  img {
    width: 100px;
  }
  .card {
    position: relative;
    width: 400px;
    height: 600px;
    background-color: #f2f2f2;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    perspective: 1000px;
    box-shadow: 0 0 0 5px #ffffff80;
    transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card svg {
    width: 48px;
    fill: #333;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
  }

  .card__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: #f2f2f2;
    transform: rotateX(-90deg);
    transform-origin: bottom;
    transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card:hover .card__content {
    transform: rotateX(0deg);
  }

  .card__title {
    margin: 0;
    font-size: 24px;
    color: #333;
    font-weight: 700;
  }

  .card:hover svg {
    scale: 0;
  }

  .card__description {
    margin: 10px 0 0;
    font-size: 14px;
    color: #777;
    line-height: 1.4;
    display: grid;
    gap: 10px;
  }
  .languages {
    padding: 10px;
    width: 80%;
    height: 40px;
    border: 1px solid black;
    border-radius: 20px;
  }
  .languages p {
    font-size: 16px;
    color: rgb(52, 63, 85);
  }
  .skills {
    padding: 10px;
    width: 80%;
    height: 55px;
    border: 1px solid black;
    border-radius: 20px;
  }
  .skills p {
    font-size: 16px;
    color: rgb(52, 63, 85);
  }
  .diplomas {
    padding: 20px;
    width: 80%;
    height: 120px;
    border: 1px solid rgb(52, 63, 85);
    border-radius: 20px;
  }
  .diplomas p {
    font-size: 18px;
    color: rgb(52, 63, 85);
  }
  .certifications {
    padding: 10px;
    width: 90%;
    height: 55px;
    border: 1px solid black;
    border-radius: 20px;
  }
  .certifications p {
    font-size: 14px;
    color: rgb(52, 63, 85);
  }
  small {
    display: block;
  }
`;
const Moi = styled.div`
  position: absolute;
  img {
    width: 400px;
    border-radius: 0%;
  }
  top: 14%;
  left: 2%;
`;
