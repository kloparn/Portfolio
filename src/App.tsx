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
        <SwitchContainer>
          <Switch
            onChange={() => setMode(!lightMode)}
            checked={!lightMode}
          ></Switch>
          <DarkModeParagraph>
            <b>Dark mode</b>
          </DarkModeParagraph>
        </SwitchContainer>
        {/* Navbar shall go here with the {home(theme) going inside it}*/}
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

const SwitchContainer = styled.div`
  float: right;
  color: ${(props) => props.theme.colors.text};
  display: table-row;
`;
const DarkModeParagraph = styled.p`
  font-display: bold;
`;

export default App;
