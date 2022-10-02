import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import NavList from "./NavList";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useState } from "react";
import { Fade } from "react-reveal";
import {CgClose} from "react-icons/cg"

function Header() {
  const [Clicked, setClicked] = useState(false);

  function FabarClicked() {
    setClicked(!Clicked);
  }

  const navlist = NavList.map((list) => (
    <>
      <Link to={list.link} style={{ textDecoration: "none", color: "white" }}>
        <ImageText>
          <Image src={list.image} />
          <List>{list.text}</List>
        </ImageText>
      </Link>
    </>
  ));

  function NavbarClicked() {
    return (
      <ClickedNav>
        <CancelNav><CgClose className="close" onClick={FabarClicked}/></CancelNav>
        <Fade top>
          <Menuclick onClick={FabarClicked}>{navlist}</Menuclick>
        </Fade>
      </ClickedNav>
    );
  }

  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="logo" />
      </Logo>

      <IconContext.Provider value={{ size: 35 }}>
        <FaBars className="fabar" onClick={FabarClicked} />
      </IconContext.Provider>

      {Clicked && <NavbarClicked />}

      <NavMenu>{navlist}</NavMenu>

      <UserImage>
        <Link to="/login"><img src="images/userImage.jpg" alt="user" /></Link>
      </UserImage>
    </Nav>
  );
}

export default Header;

//css here

const Nav = styled.div`
  // padding: 0.5em;
  position: relative;
  height: 4rem;
  background: #090b13;
  display: flex;
  align-items: center;
  color: white;
  justify-content: space-between;
  font-size: 0.8125rem;
  font-weight: bold;
  letter-spacing: 0.08875rem;
  // border: 2px solid green;

  .fabar {
    display: flex;
    cursor: pointer;
    display: none;
  }
  @media (max-width: 850px) {
    .fabar {
      display: block;
      // width: 100%;
      // border: 2px solid red;
    }
  }
`;

const Logo = styled.div`
  // border: 2px solid green;
  display: flex;
  width: 100px;
  justify-content: flex-start;
  align-items: center;
  margin-left: calc(3.5vw);
  img {
    width: 100px;
  }
`;

const List = styled.li`
  padding: 0.3em;
  list-style: none;
  text-transform: uppercase;
  position: relative;

  :after {
    content: "";
    height: 2px;
    background: white;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    transform: ScaleX(0);
  }
  :hover {
    :after {
      opacity: 1;
      transform: ScaleX(1);
      transition: 0.3s;
    }
  }
`;

const NavMenu = styled.ul`
  // width: fit-content;
  padding: 0;
  display: flex;
  // border: 1px solid red;
  // justify-content: space-around;
  align-items: center;

  @media (max-width: 850px) {
    display: none;
  }
`;

const UserImage = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  // border: 2px solid green;
  justify-content: flex-end;
  margin-right: 3.5vw;
  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    cursor: pointer;
  }
  @media (max-width: 850px) {
    display: block;
    width: fit-content;
    // border: 2px solid red;
  }
`;

const Image = styled.img`
  width: 20px;
`;

const ImageText = styled.div`
  display: flex;
  justify-content: center;
  // border: 1px solid yellow;
  margin: 1em;
`;

const ClickedNav = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  bottom:0;
  background-color: rgba(0, 0, 0, 0.85);
  color: white;
  z-index: 2;
`;

const Menuclick = styled.div`
  display: flex;
  flex-direction: column;
`;

const CancelNav = styled.div`
  display:flex;
  justify-content:flex-end;
  font-size:20px;
  padding-right:1em;
  padding-top:1em;
  .close{
    cursor:pointer;
  }
`
