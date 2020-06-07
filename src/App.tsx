import React, { Component, useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./styles/default-theme";
import Switch from "react-switch";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [mode, setMode] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <MainView>{mode}</MainView>
      <Switch onChange={() => setMode(!mode)} checked={mode}></Switch>
    </ThemeProvider>
  );
}

const MainView = styled.section``;

export default App;
