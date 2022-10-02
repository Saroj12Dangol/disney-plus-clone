import React from "react";
import styled from "styled-components";
import ViewerData from "./ViewerData";

function Viewers() {
  const Data = ViewerData.map((data) => (
    <Image src={data.image} alt="images" />
  ));

  return <Container>{Data}</Container>;
}

export default Viewers;

const Container = styled.div`
  margin-top: 2.5em;
  display: flex;
  justify-content: space-between;
  // border: 2px solid red;
`;

const Image = styled.img`
  border-radius: 5px;

  cursor: pointer;
  width: 15%;
  border: 4px solid rgba(150, 150, 150, 0.1);
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;

  &:hover {
    transform: scale(1.1);
    border: 4px solid rgba(250, 250, 250, 1);
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  }
`;
