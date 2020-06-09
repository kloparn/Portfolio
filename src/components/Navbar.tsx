import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar: React.FC<Props> = ({ CustomSwitch }) => {
  return (
    <ListWrapper>
      <li>
        <ListItem to="/">Home</ListItem>
      </li>
      <li>
        <ListItem to="/about">About</ListItem>
      </li>
      <li>
        <ListItem to="/projects">Projects</ListItem>
      </li>
      <SwitchBox>{CustomSwitch}</SwitchBox>
    </ListWrapper>
  );
};

type Props = {
  CustomSwitch: JSX.Element;
};

const SwitchBox = styled.li`
  float: right;
`;

const ListWrapper = styled.ul`
  background-color: ${(props) => props.theme.colors.main};
  width: 100%;
  margin: 0 0 3em 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ListItem = styled(Link)`
  display: block;
  padding: 8px 15px;
  text-decoration: none;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
  border-right: 1px solid #ccc;
  :hover {
    color: green;
    cursor: pointer;
  }
`;

export default Navbar;
