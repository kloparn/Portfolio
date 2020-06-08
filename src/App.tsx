import React, { Component, useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme, darkTheme } from "./styles/default-theme";
import Switch from "react-switch";
import "./App.css";
import { home } from "./components/home";

function App() {
  const [lightMode, setMode] = useState(true);

  return (
    <ThemeProvider theme={lightMode ? theme : darkTheme}>
      <ScreenView>
        <Switch
          onChange={() => setMode(!lightMode)}
          checked={lightMode}
        ></Switch>
        {home(theme)}
        <h1>
          current theme{" "}
          {lightMode ? JSON.stringify(theme) : JSON.stringify(darkTheme)}
        </h1>
      </ScreenView>
    </ThemeProvider>
  );
}

const ScreenView = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.colors.main};
  color: ${(props) => props.theme.colors.text};
  width: 100%;
  height: 100%;
`;

export default App;
