import React from "react";
import styled from "styled-components";
import vi from "../Photos/clinic.mp4";
const Heropage = () => {
  return (
    <Div>
      <Holder>
        <Video src={vi} muted autoPlay={true} loop={true} />
        <Content>
          <Infohead>FALL IN LOVE WITH YOUR EYEWEAR</Infohead>
          <Second> Your Glasses Are Your Best Accessory</Second>
          <But> SHOP FRAMES</But>
        </Content>
      </Holder>
    </Div>
  );
};

export default Heropage;
const Div = styled.div``;
const Holder = styled.div``;
const Video = styled.video`
  width: 98.7vw;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Content = styled.div`
  /* background-color: red; */
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 90px;
  flex-direction: column;
`;
const Infohead = styled.div`
  color: #0e85d1;
  font-weight: 100;
  font-size: 45px;
  display: flex;
  @media screen and (max-width: 428px) {
    font-size: 20px;
  }
  justify-content: center;
  width: 100%;
`;
const Second = styled.div`
  color: #0e85d1;
  font-size: 30px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 320px) {
    font-size: 20px;
  }
`;
const But = styled.div`
  color: white;
  cursor: pointer;
  /* margin: 10px; */
  height: 50px;
  font-weight: bold;
  width: 200px;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: #0cd2d1;
  transform: scale(1);
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    color: black;
    background-color: lavender;
    transform: scale(1.06);
    transition: all 350ms;
  }
  @media screen and (max-width: 320px) {
    height: 40px;
    margin-top: -20px;
  }
`;
