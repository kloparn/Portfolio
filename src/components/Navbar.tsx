import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar: React.FC<Props> = ({ CustomSwitch }) => {
  const [width, setWidth] = useState(window.innerWidth);

  const [openBurger, setOpen] = useState(
    localStorage.getItem("openBurger") == null
      ? false
      : JSON.parse(localStorage.getItem("openBurger")!)
  );

  useEffect(() => {
    localStorage.setItem("openBurger", JSON.stringify(openBurger));

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  }, [openBurger]);

  return (
    <Nav>
      <Logo> Adams Portfolio </Logo>
      <ListWrapper id={width > 1240 ? "open" : !openBurger ? "closed" : "open"}>
        <List>
          <NavItem to="/">Home</NavItem>
        </List>
        <List>
          <NavItem to="/about" activeClassName="selectedLink">
            About
          </NavItem>
        </List>
        <List>
          <NavItem to="/projects" activeClassName="selectedLink">
            Projects
          </NavItem>
        </List>
        <List>
          <NavItem to="/contact" activeClassName="selectedLink">
            Contact
          </NavItem>
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

const NavItem = styled(NavLink)`
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

  :hover {
    opacity: 0.7;
  }
  :active {
    background-color: black;
  }
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
