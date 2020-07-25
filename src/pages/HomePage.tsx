import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { TitleChange as Title } from "../helpers";

const HomePage: React.FC = () => {
  Title("Home");

  return (
    <Layout>
      <section>
        <Name>Adam Håkansson</Name>
        <Description>
          I'm a newly swedish graduate fullstack developer <br />
          Available for hire and or available for a full time job
        </Description>
        <ButtonSection>
          <Link to="/projects" onClick={() => Title("Projects")}>
            <CustomButton>To my projects</CustomButton>
          </Link>
          <Link to="/contact" onClick={() => Title("Contact")}>
            <CustomButton>Contact me</CustomButton>
          </Link>
        </ButtonSection>
      </section>
    </Layout>
  );
};

const Layout = styled.main`
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 22vh;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.88)
    ),
    url("background-exp.png");
  background-size: cover;
  color: white;
  min-height: 100vh;
  text-shadow: 2px 2px black;
`;

const Name = styled.h1`
  font-size: 3rem;
`;

const Description = styled.p`
  font-size: 2rem;
`;

const ButtonSection = styled.section`
  justify-content: space-evenly;
  display: flex;
`;

const CustomButton = styled.button`
  font-size: 1.5rem;
  border: 1px solid #fff;
  padding: 10px 20px;
  border-radius: 5px;
  text-align: center;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.secondary};
  text-shadow: 2px 2px ${(props) => props.theme.colors.shadowColor};

  :hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;

export default HomePage;
