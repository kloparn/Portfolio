import React from "react";
import styled, { DefaultTheme } from "styled-components";

export const homeRender = () => {
  return (
    <HomeView>
      <h1> Projects view Component</h1>
    </HomeView>
  );
};

const HomeView = styled.div`
  color: ${(props) => props.theme.colors.text};
`;
