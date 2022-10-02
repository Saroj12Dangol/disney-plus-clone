import React from "react";
import styled from "styled-components";
import { IoMdAdd } from "react-icons/io";
import { IconContext } from "react-icons";
import { GoPrimitiveDot } from "react-icons/go";

function Details() {
  return (
    <Container>
      <Background src="images/bao_background.jpg" />
      <Wrap>
        <Logo src="images/bao_logo.png" />
        <Options>
          <Play>
            <img src="images/play-icon-black.png" alt="" />
            <span>PLAY</span>
          </Play>
          <Trailer>
            <img src="images/play-icon-white.png" alt="" />
            <span>TRAILER</span>
          </Trailer>
          <Plus>
            <IconContext.Provider value={{ size: 30, color: "white" }}>
              <IoMdAdd />
            </IconContext.Provider>
          </Plus>
          <Group src="images/group-icon.png" />
        </Options>
        <About>
          <span>
            2018
            <GoPrimitiveDot />
            <sapn>7m</sapn>
            <GoPrimitiveDot />
            <span>Familly, Fantasy, Kids, Animation</span>
          </span>
        </About>
        <Description>
          <span>
            A Chinese mom who's sad when her grown son leaves home gets another
            chance at motherhood when one of her dumplings springs to life. But
            she finds that nothing stays cute and small forever.
          </span>
        </Description>
      </Wrap>
    </Container>
  );
}

export default Details;

const Container = styled.div`
  //   width: 100vw;
  height: calc(100vh - 4rem);
  margin: 0 calc(3.5vw);
  position: relative;
  //   border: 2px solid blue;
`;

const Background = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  opacity: 0.7;
`;

const Wrap = styled.div`
  //   border: 3px solid black;
  display: flex;
  flex-direction: column;
  margin: 1em 0 0 2em;
`;

const Logo = styled.img`
  width: 30%;
  //   border: 2px solid green;
`;

const Options = styled.div`
  display: flex;
  margin-top: 2em;
  //   border: 2px solid yellow;
  align-items: center;
`;
const Play = styled.div`
  border-radius: 5px;
  display: flex;
  //   margin-left: 1em;
  cursor: pointer;
  //   border: 2px solid black;
  align-items: center;
  background-color: white;
  padding: 0.5em 1.5em;

  span {
    font-weight: 700;
  }
`;
const Trailer = styled(Play)`
  margin-left: 1em;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;

  &:hover{
    background-color:black;
  }
`;

const Plus = styled.div`
  border: 2px solid white;
  display: flex;
  margin-left: 1em;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  justify-content: center;
  cursor: pointer;
`;
const Group = styled.img`
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.5);
  margin-left: 1em;
  cursor: pointer;
`;
const About = styled.div`
  color: white;
  font-weight:600;
  margin-top: 1em;
`;
const Description = styled.div`
  color:white;
  margin-top:1em;
  font-weight:bold;
  letter-spacing:0.5px;
  line-height:1.5rem;
  max-width:40%;
`;
