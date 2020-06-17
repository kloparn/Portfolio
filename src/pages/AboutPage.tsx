import React from "react";
import styled from "styled-components";
import { CardAboutMe, CardFrontend, CardBackend } from "../components";

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <CardAboutMe />
      <CardFrontend />
      <CardBackend />
    </Layout>
  );
};

interface apiInterface {
  name: String;
  information: String;
  picture: String;
  built: String;
}

const Layout = styled.section`
  padding: 3rem 0 0 0;
  background-color: ${(props) => props.theme.colors.main};
  color: ${(props) => props.theme.colors.text};
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 1000px) {
    display: flex;
    flex-flow: column nowrap;
  }
`;

export default AboutPage;
