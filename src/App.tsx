import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme, darkTheme } from "./styles/default-theme";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ThemeSwitch from "react-switch";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Navbar, Footer } from "./components";
import { HomePage, AboutPage, ProjectsPage, ContactPage } from "./pages";
import { ScrollUp } from "./helpers";
import { FaMoon, FaSun } from "react-icons/fa";

const App = () => {
  const [currentHeight, setCurrentHeight] = useState(window.pageYOffset);
  const [lightMode, setMode] = useState(
    localStorage.getItem("lightMode") == null
      ? false
      : JSON.parse(localStorage.getItem("lightMode")!)
  );

  useEffect(() => {
    localStorage.setItem("lightMode", JSON.stringify(lightMode));
    window.addEventListener("scroll", updateCurrentHeight);
  }, [lightMode]);

  const updateCurrentHeight = () => {
    setCurrentHeight(window.pageYOffset);
  };

  return (
    <ThemeProvider theme={lightMode ? theme : darkTheme}>
      <ScreenView>
        <Router>
          <Navbar
            CustomSwitch={
              <SwitchContainer>
                <ThemeSwitch
                  onChange={() => setMode(!lightMode)}
                  checked={!lightMode}
                  onColor="#000000"
                  uncheckedIcon={<FaSun id="switch-picture" />}
                  checkedIcon={<FaMoon id="switch-picture" />}
                ></ThemeSwitch>
              </SwitchContainer>
            }
            Mode={lightMode}
          />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/projects" component={ProjectsPage} />
          <Route exact path="/contact" component={ContactPage} />
        </Router>
      </ScreenView>
      {currentHeight < 500 ? (
        ""
      ) : (
        <ButtonContainer>
          <ScrollUpButton onClick={() => ScrollUp(document)}>
            Scroll up
          </ScrollUpButton>
        </ButtonContainer>
      )}
      <Footer />
    </ThemeProvider>
  );
};

const ScreenView = styled.div`
  font-family: "Roboto";
  background-color: ${(props) => props.theme.colors.main};
  color: ${(props) => props.theme.colors.text};
  min-height: 100vh;
  overflow: hidden;
  transition: all 0.25s linear;
`;

const SwitchContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.text};
`;

const ButtonContainer = styled.div`
  flex: 1;
  justify-content: flex-end;
`;

const ScrollUpButton = styled.button`
  color: ${(props) => props.theme.colors.text};
  position: absolute;
  background-color: transparent;
  right: 10px;
  border-width: 0.3rem;
  border-radius: 20px;
  :focus {
    outline: none;
  }
`;

export default App;
