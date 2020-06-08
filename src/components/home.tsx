import React, { Component } from "react";
import { theme, darkTheme } from "../styles/default-theme";
import { DefaultTheme } from "styled-components";
import styled, { ThemeProvider } from "styled-components";

export const home = (props: DefaultTheme) => {
  return (
    <HomeView>
      <h1> Home view Component</h1>
    </HomeView>
  );
};

const HomeView = styled.div`
  color: ${(props) => props.theme.colors.text};
`;

export default home;
