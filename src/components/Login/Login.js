import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <Background src="images/login-background.jpg" alt="" />
      <Content>
        {/* cta-logo-one.svg */}
        <img src="images/cta-logo-one.svg" alt="" />
        <button>GET ALL THERE</button>
        <Text>
          <span className="text">
            Get Premier Access to Raya and the last Dragon for an additional fee
            with a Disney+ subscription.
          </span>
          <span className="text">
            As of 03/26/21, the price of Disney+ and The Disney Bundle will
            increase by $1
          </span>
        </Text>
        <img src="images/cta-logo-two.png" alt="" />
      </Content>
      <div></div>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em 3.5vw 0 3.5vw;
  height: calc(100vh - 4rem);
  //   border: 2px solid red;
  position: relative;
  color: white;
`;

const Background = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  z-index: -1;
`;

const Content = styled.div`
  display: flex;
  padding: 1em;
  width: 100vw;
  //   border: 2px solid green;
  flex-direction: column;
  img {
    width: 100%;
  }
  button {
    cursor: pointer;
    width: 100%;
    border-radius: 5px;
    background-color: blue;
    color: white;
    font-weight: bold;
    border: none;
    padding: 1.3em;
    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;

    &:hover {
      transform: scale(1.02);
      transition: 0.25;
    }
  }
`;

const Text = styled.div`
  display: flex;
  margin: 0.7em 0;
  //   border:2px solid red;
  flex-direction: column;
  .text {
    text-align: center;
    font-size: 0.8em;
    letter-spacing: 0.1em;
    font-weight: bold;
  }
`;
