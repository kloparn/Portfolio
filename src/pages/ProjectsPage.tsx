import React from "react";
import styled from "styled-components";
import { Projects } from "../components";
import { TitleChange as Title } from "../helpers";

const ProjectsPage: React.FC = () => {
  Title("Projects");

  return (
    <Layout>
      <Projects />
    </Layout>
  );
};

const Layout = styled.main`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: auto;
  transition: all 0.25s linear;
  padding-top: 10vh;
`;
export default ProjectsPage;
