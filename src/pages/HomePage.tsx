import React from "react";
import styled from "styled-components";

const HomePage: React.FC = () => {
  return <Layout>Home</Layout>;
};

const Layout = styled.main`
  background-color: ${(props) => props.theme.colors.main};
  color: ${(props) => props.theme.colors.text};
`;
export default HomePage;
