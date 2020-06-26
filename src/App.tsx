import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme, darkTheme } from "./styles/default-theme";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ThemeSwitch from "react-switch";
import "./App.css";
import { Navbar, Footer } from "./components";
import { HomePage, AboutPage, ProjectsPage, ContactPage } from "./pages";

const App = () => {
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
            <ComponentView>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/projects" component={ProjectsPage} />
              <Route exact path="/contact" component={ContactPage} />
            </ComponentView>
          </Router>
          {/* Navbar shall go here with the {home(theme) going inside it}*/}
        </BackgroundPicture>
      </ScreenView>
      <Footer />
    </ThemeProvider>
  );
};

const ScreenView = styled.div`
  background-color: ${(props) => props.theme.colors.main};
  color: ${(props) => props.theme.colors.text};
  width: 100%;
  min-height: 100vh;
`;
const BackgroundPicture = styled.main`
  background-image: ${require("./Background.png")};
  background-color: transparent;
`;

const ComponentView = styled.body`
  overflow: hidden;
  min-height: 100vh;
`;

const SwitchContainer = styled.div`
  color: ${(props) => props.theme.colors.text};
  padding-left: 10vh;
`;
const DarkModeParagraph = styled.p`
  font-display: bold;
`;

export default App;
