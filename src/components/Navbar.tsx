import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar: React.FC<Props> = ({ CustomSwitch }) => {
  const [width, setWidth] = useState(window.innerWidth);

  const [currentTab, switchTab] = useState(
    localStorage.getItem("lightMode") == null
      ? 1
      : JSON.parse(localStorage.getItem("currentTab")!)
  );

  const [openBurger, setOpen] = useState(
    localStorage.getItem("openBurger") == null
      ? false
      : JSON.parse(localStorage.getItem("openBurger")!)
  );

  useEffect(() => {
    localStorage.setItem("currentTab", JSON.stringify(currentTab));
    localStorage.setItem("openBurger", JSON.stringify(openBurger));

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  }, [currentTab, openBurger]);

  return (
    <Nav>
      <Logo> Adams Portfolio </Logo>
      <ListWrapper id={width > 1240 ? "open" : !openBurger ? "closed" : "open"}>
        <List>
          <ListItem
            to="/"
            onClick={() => {
              switchTab(1);
              setOpen(!openBurger);
            }}
            id={currentTab === 1 ? "selected" : "notSelected"}
          >
            Home
          </ListItem>
        </List>
        <List>
          <ListItem
            to="/about"
            onClick={() => {
              switchTab(2);
              setOpen(!openBurger);
            }}
            id={currentTab === 2 ? "selected" : "notSelected"}
          >
            About
          </ListItem>
        </List>
        <List>
          <ListItem
            to="/projects"
            onClick={() => {
              switchTab(3);
              setOpen(!openBurger);
            }}
            id={currentTab === 3 ? "selected" : "notSelected"}
          >
            Projects
          </ListItem>
        </List>
        <List>
          <ListItem
            to="/contact"
            onClick={() => {
              switchTab(4);
              setOpen(!openBurger);
            }}
            id={currentTab === 4 ? "selected" : "notSelected"}
          >
            Contact
          </ListItem>
        </List>
        <SwitchBox>{CustomSwitch}</SwitchBox>
      </ListWrapper>
      <StyledBurger onClick={() => setOpen(!openBurger)}>
        <div className={openBurger ? "lineOne" : ""} />
        <div className={openBurger ? "lineTwo" : ""} />
        <div className={openBurger ? "lineThree" : ""} />
      </StyledBurger>
    </Nav>
  );
};

type Props = {
  CustomSwitch: JSX.Element;
};

const Nav = styled.nav`
  background-color: ${(props) => props.theme.colors.secondary};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 0 0 4rem;
  text-decoration: none;

  @media (max-width: 1240px) {
    display: flex;
    justify-content: center;
    align-self: center;
  }
`;

const Logo = styled.h1`
  font: 1em "gill sans, sans-serif";
  font-size: 3rem;
  color: ${(props) => props.theme.colors.text};
`;

const SwitchBox = styled.div`
  padding: 0 0 0 1rem;
`;

const List = styled.li`
  padding: 2rem;
`;

const ListWrapper = styled.ul`
  background-color: ${(props) => props.theme.colors.secondary};
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 1240px) {
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    height: 60vh;
    width: 300px;
    padding-top: 1.5rem;
    transition: transform 0.3s ease-in-out;
  }
`;

const ListItem = styled(Link)`
  display: block;
  padding: 8px 15px;
  text-decoration: none;
  font-weight: bold;
  background-color: ${(props) => props.theme.colors.third};
  color: ${(props) => props.theme.colors.text};
  font-size: 2rem;
  border: 1px solid ${(props) => props.theme.colors.text};
  width: 110%;
  text-align: center;
`;

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 20;
  visibility: hidden;

  @media (max-width: 1240px) {
    position: fixed;
    top: 15px;
    right: 20px;
    visibility: visible;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${(props) => props.theme.colors.text};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
  }
`;
export default Navbar;
