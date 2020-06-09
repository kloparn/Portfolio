import React, { ComponentClass } from "react";
import styled, { DefaultTheme } from "styled-components";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Route } from "react-router";

// Gonna be the home page that is default rendered from the begining

export const flexableNav = (
  name: string,
  direction: string,
  customComponent?: ComponentClass
) => <ItemAnchor href={direction}> {name} </ItemAnchor>;

const ItemAnchor = styled.a`
  display: block;
  padding: 8px 15px;
  text-decoration: none;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
  border-right: 1px solid #ccc;
  :hover {
    color: "#00ff00";
    cursor: pointer;
  }
`;
