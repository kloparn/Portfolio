import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme, darkTheme } from "./styles/default-theme";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ThemeSwitch from "react-switch";
import "./App.css";
import { Navbar, Footer } from "./components";
import { HomePage, AboutPage, ProjectsPage } from "./pages";
import { url } from "inspector";

function App() {
  const [lightMode, setMode] = useState(
    localStorage.getItem("lightMode") == null
      ? false
      : JSON.parse(localStorage.getItem("lightMode")!)
  );

  useEffect(() => {
    localStorage.setItem("lightMode", JSON.stringify(lightMode));
  }, [lightMode]);

  return (
    <ThemeProvider theme={lightMode ? theme : darkTheme}>
      <ScreenView>
        <BackgroundPicture>
          <Router>
            <Navbar
              CustomSwitch={
                <SwitchContainer>
                  <ThemeSwitch
                    onChange={() => setMode(!lightMode)}
                    checked={!lightMode}
                  ></ThemeSwitch>
                  <DarkModeParagraph>
                    <b>Dark mode</b>
                  </DarkModeParagraph>
                </SwitchContainer>
              }
            />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/projects" component={ProjectsPage} />
          </Router>
          <Container>
            <NavbarTemp></NavbarTemp>
          </Container>
          {/* Navbar shall go here with the {home(theme) going inside it}*/}
        </BackgroundPicture>
        <Footer />
      </ScreenView>
    </ThemeProvider>
  );
}

const Container = styled.div`
  display: center;
  padding: 5px;
`;

const NavbarTemp = styled.ul`
  width: 100%;
  margin: 0 0 3em 0;
  padding: 0;
  list-style: none;
`;
const NavbarItem = styled.li`
  display: flex;
`;

const ScreenView = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.colors.main};
  color: ${(props) => props.theme.colors.text};
  width: 100%;
  height: 100%;
`;
const BackgroundPicture = styled.main`
  background-image: ${require("./Background.png")};
  background-color: transparent;
`;

const SwitchContainer = styled.div`
  float: right;
  color: ${(props) => props.theme.colors.text};
  display: table-row;
  padding: 10px;
`;
const DarkModeParagraph = styled.p`
  font-display: bold;
`;

export default App;
