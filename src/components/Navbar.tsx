import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar as BotNavBar, Nav as BotNav } from "react-bootstrap";
import { TitleChange as Title, NavBarScrollDown } from "../helpers";
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
    >
      <Logo href="/">Adam Håkansson</Logo>
      <BotNavBar.Toggle aria-controls="responsive-navbar-nav" />
      <BotNavBar.Collapse id="responsive-navbar-nav">
        <BotNav className="mr-auto"></BotNav>
        <BotNav className="mr-auto">
          <NavBarItemContainer>
            <BotNav.Link>
              <NavItem
                to="/"
                onClick={() => {
                  Title("Home");
                  if (window.innerWidth > 991) {
                  } else NavBarScrollDown();
                }}
              >
                Home
              </NavItem>
            </BotNav.Link>
          </NavBarItemContainer>
          <NavBarItemContainer>
            <BotNav.Link>
              <NavItem
                to="/about"
                onClick={() => {
                  Title("About");
                  if (window.innerWidth > 991) {
                  } else NavBarScrollDown();
                }}
              >
                About
              </NavItem>
            </BotNav.Link>
          </NavBarItemContainer>
          <NavBarItemContainer>
            <BotNav.Link>
              <NavItem
                to="/projects"
                onClick={() => {
                  Title("Projects");
                  if (window.innerWidth > 991) {
                  } else NavBarScrollDown();
                }}
              >
                Projects
              </NavItem>
            </BotNav.Link>
          </NavBarItemContainer>
          <NavBarItemContainer>
            <BotNav.Link>
              <NavItem
                to="/contact"
                onClick={() => {
                  Title("Contact");
                  if (window.innerWidth > 991) {
                  } else NavBarScrollDown();
                }}
              >
                Contact
              </NavItem>
            </BotNav.Link>
          </NavBarItemContainer>
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
