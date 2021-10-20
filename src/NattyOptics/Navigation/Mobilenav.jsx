import React from "react";
import styled from "styled-components";
import More from "./Dropdown/More";
import Service from "./Dropdown/Service";
import Fade from "react-reveal/Fade";
const Mobilenav = ({ open }) => {
  return (
    <Div open={open}>
      <Wrapper>
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
      </Wrapper>
    </Div>
  );
};

export default Mobilenav;
const Div = styled.div`
  background-color: #0e85d1;
  width: 250px;
  height: 566px;
  margin-top: 60px;
  border-radius: 0 0 8px 0;
  @media screen and (min-width: 768px) {
    display: none;
  }
  opacity: ${({ open }) => (open ? "100%" : "0")};
  top: ${({ open }) => (open ? "0" : "-100%")};
  position: fixed;
`;
const Wrapper = styled.div`
  color: white;
  a {
    color: white;
    display: flex;
    flex-direction: column;
    padding: 30px;
  }
`;
