import React, { Component, useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme, darkTheme } from "./styles/default-theme";
import Switch from "react-switch";
import "./App.css";
import { prependOnceListener } from "cluster";

function App() {
  const [mode, setMode] = useState(false);

  return (
    <ThemeProvider theme={mode ? theme : darkTheme}>
      <ScreenView>
        <Switch onChange={() => setMode(!mode)} checked={mode}></Switch>
        <h1>
          current theme{" "}
          {mode ? JSON.stringify(theme) : JSON.stringify(darkTheme)}
        </h1>
      </ScreenView>
    </ThemeProvider>
  );
}

const ScreenView = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.colors.main};
  color: ${(props) => props.theme.colors.text};
  display: flex;
  width: 100%;
  height: 100%;
`;

export default App;
