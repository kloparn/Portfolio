import React from "react";
import styled from "styled-components";

const ContactPage: React.FC = () => {
  return <Layout>Contact page</Layout>;
};

const Layout = styled.main`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: auto;
  padding: 30vh 0;
`;

export default ContactPage;
