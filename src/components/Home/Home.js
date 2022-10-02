import React from "react";
import ImageSlider from "./ImageSlider/ImageSlider";
import styled from "styled-components";
import Viewers from "./Viewers/Viewers";
import Movies from "./Movies/Movies";

function Home() {

  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Movies />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 4rem);
  padding: 0 calc(3.5vw);
  position: relative;
  color: white;

  &:after {
    background-image: url("/images/home-background.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: absolute;
    z-index: -1;
    content: "";
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
`;
