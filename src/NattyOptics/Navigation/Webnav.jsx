import React from "react";
import styled from "styled-components";
import eye from "../Photos/eye.png";
import { AiOutlineMenu } from "react-icons/ai";
import More from "./Dropdown/More";
import Service from "./Dropdown/Service";
import Fade from "react-reveal/Fade";

const Webnav = ({ toggle }) => {
  return (
    <Div>
      {" "}
      <Fade left>
        <Img src={eye} /> <Brandname>NattyOptics</Brandname>
      </Fade>
      <Nav>
        <a>FOOTBALL</a>
        <a>RUGBY</a>
        <a>
          <More />
        </a>
        <a>RUGBY</a>
        <a>
          <Service />
        </a>
        <a>RUGBY</a>

        <Menu onClick={toggle}>
          <AiOutlineMenu />
        </Menu>
      </Nav>
    </Div>
  );
};

export default Webnav;
const Div = styled.div`
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(6.5px);
  -webkit-backdrop-filter: blur(6.5px);

  height: 60px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  flex-direction: row;
  position: fixed;
  z-index: 9999;
`;

const Nav = styled.div`
  width: 100vw;

  display: flex;
  align-items: center;
  padding-left: 20px;

  a {
    margin: 20px;
    font-size: 13px;
    opacity: 0.9;
    cursor: pointer;
    color: #0e85d1;
    font-weight: 600;
    @media screen and (max-width: 767px) {
      display: none;
    }
    :hover {
      color: #0cd2d1;
    }
  }
`;

const Brandname = styled.div`
  font-weight: bold;
  margin-top: 10px;
`;
const Img = styled.img`
  height: 40px;
  margin: 10px;
`;
const Menu = styled(AiOutlineMenu)`
  color: #0e85d1;
  display: flex;
  justify-content: center;

  font-size: 20px;
  cursor: pointer;
  flex: 1;
  /* margin-left: 70px; */
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
