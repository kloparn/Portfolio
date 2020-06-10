import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar: React.FC<Props> = ({ CustomSwitch }) => {
  const [currentTab, switchTab] = useState(
    localStorage.getItem("lightMode") == null
      ? 1
      : JSON.parse(localStorage.getItem("currentTab")!)
  );

  useEffect(() => {
    localStorage.setItem("currentTab", JSON.stringify(currentTab));
  }, [currentTab]);

  return (
    <ListWrapper>
      <Logo> Adams Portfolio </Logo>
      <List>
        <ListItem
          to="/"
          onClick={() => switchTab(1)}
          id={currentTab === 1 ? "selected" : "notSelected"}
        >
          Home
        </ListItem>
      </List>
      <List>
        <ListItem
          to="/about"
          onClick={() => switchTab(2)}
          id={currentTab === 2 ? "selected" : "notSelected"}
        >
          About
        </ListItem>
      </List>
      <List>
        <ListItem
          to="/projects"
          onClick={() => switchTab(3)}
          id={currentTab === 3 ? "selected" : "notSelected"}
        >
          Projects
        </ListItem>
      </List>
      <SwitchBox>{CustomSwitch}</SwitchBox>
    </ListWrapper>
  );
};

type Props = {
  CustomSwitch: JSX.Element;
};

const Logo = styled.h1`
  font: 1em "gill sans, sans-serif";
  font-size: 3rem;
  color: ${(props) => props.theme.colors.text};
`;

const List = styled.li`
  padding: 2rem;
`;

const SwitchBox = styled.li`
  padding: 2rem;
`;

const ListWrapper = styled.ul`
  background-color: ${(props) => props.theme.colors.secondary};
  margin: 0 0 3em 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-around;
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
  width: 200%;
  text-align: center;
`;

export default Navbar;
