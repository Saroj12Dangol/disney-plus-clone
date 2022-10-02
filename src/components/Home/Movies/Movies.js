import React from "react";
import styled from "styled-components";
import RecommendedMoviesData from "./RecommendedMoviesData";
import NewMoviesData from "./NewMoviesData";
import OriginalsData from "./OriginalsData";

function Movies() {
  const recommended = RecommendedMoviesData.map((data) => <Image src={data.image} />);
  const newMovies = NewMoviesData.map((data) => <Image src={data.image} />);
  const Originals = OriginalsData.map((data) => <Image src={data.image} />);

  return (
    <>
      <RecommendedContainer>
        <RecommendText>Recommended for You</RecommendText>
        <Content>{recommended}</Content>
      </RecommendedContainer>

      <NewContainer>
        <RecommendText>New to Disney+</RecommendText>
        <Content>{newMovies}</Content>
      </NewContainer>

      <OriginalContainer>
        <RecommendText>Originals</RecommendText>
        <Content>{Originals}</Content>
      </OriginalContainer>
    </>
  );
}

export default Movies;

const Image = styled.img`
  width: 100%;
  //   height:100%;
  //   object-fit: cover;
  border: 2px solid rgba(150, 150, 150, 0.5);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    border: 3px solid rgba(250, 250, 250, 1);
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  }
`;

const RecommendedContainer = styled.div`
  margin-top: 2em;
`;
const NewContainer = styled.div`
  margin-top: 2em;
`;
const OriginalContainer = styled.div`
  margin-top: 2em;
`;

const Content = styled.div`
  margin-top: 1em;
  //   display: flex;
  //   justify-content: space-between;
  //   border: 2px solid red;

  display: grid;
  grid-gap: 5%;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const RecommendText = styled.div`
  color: white;
  font-weight: 700;
  font-size: 1rem;
`;
