import React, { Component, useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme, darkTheme } from "./styles/default-theme";
import Switch from "react-switch";
import "./App.css";

function App() {
  const [mode, setMode] = useState(false);

  return (
    <ThemeProvider theme={mode ? theme : darkTheme}>
      <Switch onChange={() => setMode(!mode)} checked={mode}></Switch>
      <h1>
        current theme {mode ? JSON.stringify(theme) : JSON.stringify(darkTheme)}
      </h1>
    </ThemeProvider>
  );
}

const MainView = styled.section``;

export default App;
