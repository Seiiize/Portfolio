import React from "react";
import styled from "styled-components";
const Navbar = () => {
  return (
    <Container>
      <Name>
        <h1>CHIKH Chafik Sofiane</h1>
      </Name>
      <Links>
        <div className="links">
          <p>Age: 21 Years</p>
          <p style={{ zIndex: 999 }}>
            Email:{" "}
            <a
              href="mailto:Sofianechafikso@gmail.com"
              style={{ textDecoration: "none", color: "rgb(52, 63, 85)" }}
            >
              Sofianechafikso@gmail.com
            </a>
          </p>
          <p>Nationality: Algerian</p>
          <p>Number: +213782214189</p>
        </div>
      </Links>
    </Container>
  );
};

export default Navbar;
const Container = styled.header`
  display: flex;
  background-color: hsla(
    218.8235294117647,
    15.178571428571425%,
    43.92156862745098%,
    0.226
  );
  height: 60px;
  justify-content: space-around;
  align-items: center;
  padding: 30px;
  box-shadow: 4px 2px 2px black;
  z-index: 999;
  @media screen and (max-width: 768px) {
    height: 10px;
  }
`;
const Links = styled.div`
  align-items: center;
  justify-content: space-between;

  .links {
    margin-left: 25px;
    display: flex;
    align-items: center;
    gap: 25px;
    p {
      text-decoration: none;
      font-size: 20px;
      color: rgb(52, 63, 85);
    }
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Name = styled.div`
  font-size: 20px;
  width: 30%;
  color: rgb(52, 63, 85);
  @media screen and (max-width: 768px) {
    font-size: 15px;
    width: 100%;
  }
`;
