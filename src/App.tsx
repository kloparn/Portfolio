import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme, darkTheme } from "./styles/default-theme";
import Switch from "react-switch";
import "./App.css";
import { home } from "./components/home";

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
        <Container>
          <Navbar>
            <NavbarItem>
              <ItemAnchor href="#"> home </ItemAnchor>
            </NavbarItem>
            <NavbarItem>
              <ItemAnchor href="#"> Projects </ItemAnchor>
            </NavbarItem>
            <NavbarItem>
              <ItemAnchor href="#"> About me </ItemAnchor>
            </NavbarItem>
            <SwitchContainer>
              <Switch
                onChange={() => setMode(!lightMode)}
                checked={!lightMode}
              ></Switch>
              <DarkModeParagraph>
                <b>Dark mode</b>
              </DarkModeParagraph>
            </SwitchContainer>
          </Navbar>
        </Container>
        {/* Navbar shall go here with the {home(theme) going inside it}*/}
        {home(theme)}
      </ScreenView>
    </ThemeProvider>
  );
}

const Container = styled.div`
  display: center;
  padding: 5px;
`;

const Navbar = styled.ul`
  width: 100%;
  margin: 0 0 3em 0;
  padding: 0;
  list-style: none;
`;
const NavbarItem = styled.li`
  float: left;
`;

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
  padding: 10px;
`;
const DarkModeParagraph = styled.p`
  font-display: bold;
`;

export default App;
