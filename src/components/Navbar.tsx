import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar: React.FC<Props> = ({ CustomSwitch }) => {
  return (
    <ListWrapper>
      <List>
        <ListItem to="/">Home</ListItem>
      </List>
      <List>
        <ListItem to="/about">About</ListItem>
      </List>
      <List>
        <ListItem to="/projects">Projects</ListItem>
      </List>
      <SwitchBox>{CustomSwitch}</SwitchBox>
    </ListWrapper>
  );
};

type Props = {
  CustomSwitch: JSX.Element;
};

const List = styled.li`
  padding: 2rem;
`;

const SwitchBox = styled.li`
  padding: 2rem;
`;

const ListWrapper = styled.ul`
  background-color: ${(props) => props.theme.colors.main};
  width: 100%;
  margin: 0 0 3em 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const ListItem = styled(Link)`
  display: block;
  padding: 8px 15px;
  text-decoration: none;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
  font-size: 2rem;
  border: 1px solid ${(props) => props.theme.colors.text};
  width: 200%;
  text-align: center;
  :hover {
    color: green;
    cursor: pointer;
  }
`;

export default Navbar;
