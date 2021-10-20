import React from "react";
import styled from "styled-components";
import { Button } from "antd";
// import tim from "./Images/tim.jpg";
import { useDispatch, useSelector } from "react-redux";
import { addFriend, addBusiness } from "./Context2";
const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.myReducer.contact);
  return (
    <Div>
      <Wrapper>
        {data?.map((props) => (
          <Card key={props.id}>
            <Image src={props.image} />
            <Content>
              <Name>{props.name}</Name>
              <Email>{props.email}</Email>
              <Buttonholder>
                <Button
                  type="primary"
                  onClick={() => {
                    dispatch(addFriend(props));
                  }}
                >
                  friend
                </Button>
                <Button
                  type="primary"
                  danger
                  onClick={() => {
                    dispatch(addBusiness(props));
                  }}
                >
                  business
                </Button>
              </Buttonholder>
              <hr />
              <Phonenumber>{props.phone}</Phonenumber>
            </Content>
          </Card>
        ))}
      </Wrapper>
    </Div>
  );
};
export default Home;
const Div = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 100px;
`;
const Card = styled.div`
  width: 300px;
  height: 300px;
  background-color: brown;
  border-radius: 5px;
  border: 2px solid blueviolet;
  color: white;
  margin: 20px;
`;
const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  background-color: lavender;
  border-radius: 50%;
  margin-right: 30px;
  /* position: absolute; */
  position: sticky;
  bottom: 400px;
  left: 260px;

  border: 2px solid white;
  box-shadow: 2px 10px 20px 1px rgba(0, 0, 0, 0.7); ;
`;
const Content = styled.div``;

const Name = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  margin: 10px 0 10px 50px;
`;
const Email = styled.div`
  font-size: 10px;

  text-transform: uppercase;
  margin: 10px 0 10px 90px;
`;
const Buttonholder = styled.div`
  display: flex;
  width: 75%;
  justify-content: space-between;
  margin: 40px 0 0 60px;
`;
const Phonenumber = styled.div`
  font-weight: 200;
  margin: 0 120px;
`;
