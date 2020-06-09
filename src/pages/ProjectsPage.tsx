import React from "react";
import styled from "styled-components";

const ProjectsPage: React.FC = () => {
  return <Layout>Projects</Layout>;
};

const Layout = styled.main`
  background-color: ${(props) => props.theme.colors.main};
  color: ${(props) => props.theme.colors.text};
`;
export default ProjectsPage;
