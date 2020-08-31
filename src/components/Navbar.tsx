import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar as BotNavBar, Nav as BotNav } from "react-bootstrap";
import styled from "styled-components";

const Navbar: React.FC<Props> = ({ CustomSwitch, Mode }) => {
  return (
    <BootstrapNavbar
      collapseOnSelect
      expand="lg"
      className={
        // Simple turnery to check if the user has light mode on or not.
        Mode ? "navbar navbar-light bg-light" : "navbar navbar-dark bg-dark"
      }
      id="navbar-ref"
      fixed="top"
    >
      <Logo href="/">Adam Håkansson</Logo>
      <BotNavBar.Toggle aria-controls="responsive-navbar-nav" />
      <BotNavBar.Collapse id="responsive-navbar-nav">
        <BotNav className="mr-auto"></BotNav>
        <BotNav className="mr-auto">
          <NavBarItemContainer>
            <BotNav.Link>
              <NavItem to="/">Home</NavItem>
            </BotNav.Link>
          </NavBarItemContainer>
          <NavBarItemContainer>
            <BotNav.Link>
              <NavItem to="/about">About</NavItem>
            </BotNav.Link>
          </NavBarItemContainer>
          <NavBarItemContainer>
            <BotNav.Link>
              <NavItem to="/projects">Projects</NavItem>
            </BotNav.Link>
          </NavBarItemContainer>
          <NavBarItemContainer>
            <BotNav.Link>
              <NavItem to="/contact">Contact</NavItem>
            </BotNav.Link>
          </NavBarItemContainer>
          <NavBarItemContainerLink>
            {/* eslint-disable-next-line react/jsx-no-target-blank */}
            <a href="https://portfolio-vue.netlify.app/" target="_blank">
              Vue
            </a>
          </NavBarItemContainerLink>
        </BotNav>
        <BotNav className="d-flex justify-content-end">
          <SwitchBox>{CustomSwitch} </SwitchBox>
        </BotNav>
      </BotNavBar.Collapse>
    </BootstrapNavbar>
  );
};

type Props = {
  CustomSwitch: JSX.Element;
  Mode: Boolean;
};

const BootstrapNavbar = styled(BotNavBar)`
  font-size: 1.5rem;
  background-color: ${(props) => props.theme.colors.main};
  transition: all 0.25s linear;
`;

const Logo = styled(BotNavBar.Brand)`
  font-family: "Roboto";
  font-size: 2.5rem;
  @media (max-width: 550px) {
    font-size: 1.7rem;
  }
`;

const NavBarItemContainerLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 3vh;
  padding-right: 3vh;
  overflow: hidden;
  border: 2px solid #ccc;
  border-radius: 100%;
  cursor: auto;
  @media (max-width: 1220px) {
    padding-left: 2vh;
    padding-right: 2vh;
  }
  @media (max-width: 1070px) {
    padding-left: 1vh;
    padding-right: 1vh;
  }
  @media (max-width: 1000px) {
    padding-left: 0;
    padding-right: 0;
    border-radius: 0%;
    border: none;
  }
`;

const NavBarItemContainer = styled.div`
  padding-left: 3vh;
  padding-right: 3vh;
  overflow: hidden;
  cursor: auto;
  @media (max-width: 1220px) {
    padding-left: 2vh;
    padding-right: 2vh;
  }
  @media (max-width: 1070px) {
    padding-left: 1vh;
    padding-right: 1vh;
  }
  @media (max-width: 1000px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

const NavItem = styled(NavLink)`
  display: block;
  text-decoration: none;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
  text-shadow: 2px 2px ${(props) => props.theme.colors.shadowColor};
  font-size: 2rem;
  text-align: center;

  :hover {
    opacity: 0.5;
  }
  :active {
    color: ${(props) => props.theme.colors.backgroundActive};
  }
`;

const SwitchBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  display: table-column;
  text-shadow: 2px 2px ${(props) => props.theme.colors.shadowColor};
`;

export default Navbar;
