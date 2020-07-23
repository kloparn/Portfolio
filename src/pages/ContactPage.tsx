import React from "react";
import styled from "styled-components";
import { FaMailBulk } from "react-icons/fa";
import { TitleChange as Title } from "../helpers";

const ContactPage: React.FC = () => {
  Title("Contact");

  return (
    <Layout>
      <Paragraph>
        For any businesses or private companies who wants a job done, contact me
        on my email.
        <br /> Simply press the link below and send me a email, if a pop up does
        not appear
        <br /> then it will instead copy the mail to your clipboard!
        <br /> Im looking forward to hear from you!
        <br />
        <FakeButton
          onClick={() => {
            navigator.clipboard.writeText("Adam.hakanson@hotmail.com");
          }}
        >
          <FaMailBulk />
          <a href="mailto:Adam.hakanson@hotmail.com?subject=Business%20Opportunity">
            Adam.hakanson@hotmail.com
          </a>
        </FakeButton>
      </Paragraph>
    </Layout>
  );
};

const Layout = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-image: url("contact-exp.png");
  background-size: cover;
  min-height: 100vh;
  color: white;
  text-shadow: 2px 2px black;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const Paragraph = styled.p`
  font-size: 1.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const FakeButton = styled.button`
  padding: 1rem;
  font-size: 1.5rem;
  text-decoration: underline;
  border: none;
  outline: none;
  background-color: transparent;
  color: darkblue;

  :active {
    color: red;
  }
`;

export default ContactPage;
