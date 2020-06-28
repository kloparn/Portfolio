import React from "react";
import styled from "styled-components";

const ProjectsPage: React.FC = () => {
  return <Layout>Projects</Layout>;
};

const Layout = styled.main`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: auto;
  padding: 30vh;
`;
export default ProjectsPage;
