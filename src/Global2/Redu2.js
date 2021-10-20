import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BiBookAdd } from "react-icons/bi";
import { FcBusinessContact } from "react-icons/fc";
import { FaUserFriends } from "react-icons/fa";
import gm from "./Images/gm.jpg";
import tim from "./Images/tim.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import styled from "styled-components";
const Redu2 = () => {
  const data = useSelector((state) => state.myReducer.friend);
  const data2 = useSelector((state) => state.myReducer.business);

  return (
    <Container>
      <Wrapper>
        <Logo src={gm} alt="image" />
        <Navigation>
          <Nav to="/">
            <Icon>
              {" "}
              <AiFillHome />{" "}
            </Icon>
            <span>Home</span>
          </Nav>
          <Nav to="/Friendpage">
            <Icon>
              {" "}
              <FaUserFriends />{" "}
            </Icon>

            <span>Friends</span>
            <a href>{data.length}</a>
          </Nav>
          <Nav to="/Businesspage">
            <Icon>
              {" "}
              <FcBusinessContact />{" "}
            </Icon>

            <span>Business</span>
            <a href>{data2.length}</a>
          </Nav>
          <Nav to="/Addcontact">
            <Icon>
              {" "}
              <BiBookAdd />{" "}
            </Icon>

            <span>Add Contact</span>
          </Nav>
        </Navigation>

        <Image src={tim} alt="image" />
      </Wrapper>
    </Container>
  );
};

export default Redu2;
const Image = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  background-color: black;
  border-radius: 50%;
  margin-right: 30px;
`;

const Logo = styled.img`
  width: 180px;
  height: 60px;
  object-fit: contain;
  margin: 0 30px;
`;
const Navigation = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  align-items: center;
`;

const Nav = styled(Link)`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  transition: all 350ms;
  margin: 0 20px;
  text-decoration: none;
  color: black;

  span {
    margin: 0;
  }
  a {
    font-size: 20px;
    margin-bottom: 5px;
    margin-left: 5px;
  }

  :hover {
    color: black;
    cursor: pointer;
    color: blue;
  }
`;
const Icon = styled.div`
  width: 20px;
  height: 20px;
  object-fit: contain;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  /* width: 100%;
  height: 100px; */
  display: flex;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: whitesmoke;
  color: black;
  position: fixed;
  margin-top: -100px;
  z-index: 9999;
`;
