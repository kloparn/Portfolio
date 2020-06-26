import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <section>
        <ul>
          <Name>Adam Håkansson</Name>
          <Description>
            I'm a swedish newly graduate front-end & back-end developer <br />
            Available for hire and or available for a full time job
          </Description>
          <ButtonSection>
            <Link to="/projects">
              <CustomButton>To my projects</CustomButton>
            </Link>
            <Link to="/contact">
              <CustomButton>Contact me</CustomButton>
            </Link>
          </ButtonSection>
        </ul>
      </section>
    </Layout>
  );
};

const Layout = styled.main`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: auto;
  padding: 25vh 0;
`;

const Name = styled.p`
  font: 1em "gill sans, sans-serif";
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

  :hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;

export default HomePage;
