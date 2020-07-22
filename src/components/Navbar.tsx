import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar as BotNavBar, Nav as BotNav } from "react-bootstrap";
import { TitleChange as Title } from "../helpers";
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
    >
      <Logo href="/">Adam Håkansson</Logo>
      <BotNavBar.Toggle aria-controls="responsive-navbar-nav" />
      <BotNavBar.Collapse id="responsive-navbar-nav">
        <BotNav className="mr-auto" />
        {/* This is to make the navItems centered */}
        <BotNav>
          <BotNav.Link>
            <NavItem to="/" onClick={() => Title("Home")}>
              Home
            </NavItem>
          </BotNav.Link>
          <BotNav.Link>
            <NavItem to="/about" onClick={() => Title("About")}>
              About
            </NavItem>
          </BotNav.Link>
          <BotNav.Link>
            <NavItem to="/projects" onClick={() => Title("Projects")}>
              Projects
            </NavItem>
          </BotNav.Link>
          <BotNav.Link>
            <NavItem to="/contact" onClick={() => Title("Contact")}>
              Contact
            </NavItem>
          </BotNav.Link>
        </BotNav>
        <BotNav className="mr-auto" />
        <BotNav className="d-flex justify-content-end">
          <SwitchBox>{CustomSwitch} </SwitchBox>
        </BotNav>
        {/* This is to make the navItems centered */}
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
`;

const Logo = styled(BotNavBar.Brand)`
  font-family: "Roboto";
  font-size: 2rem;
`;

const SwitchBox = styled.div`
  text-shadow: 2px 2px ${(props) => props.theme.colors.shadowColor};
`;

const NavItem = styled(NavLink)`
  display: block;
  padding: 8px 15px;
  text-decoration: none;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
  text-shadow: 2px 2px ${(props) => props.theme.colors.shadowColor};
  font-size: 2rem;
  width: 110%;
  text-align: center;

  :hover {
    opacity: 0.5;
  }
  :active {
    color: ${(props) => props.theme.colors.backgroundActive};
  }
`;

export default Navbar;
