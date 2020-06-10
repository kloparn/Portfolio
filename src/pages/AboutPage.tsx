import React from "react";
import styled from "styled-components";

const AboutPage: React.FC = () => {
  return <Layout>About</Layout>;
};

const Layout = styled.main`
  background-color: ${(props) => props.theme.colors.main};
  color: ${(props) => props.theme.colors.text};
  text-align: center;
  display: center;
`;

export default AboutPage;
