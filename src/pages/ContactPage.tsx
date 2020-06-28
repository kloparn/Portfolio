import React from "react";
import styled from "styled-components";

const ContactPage: React.FC = () => {
  return (
    <Layout>
      <CustomImg src="email.jpg" alt="mail me"></CustomImg>
      <Paragraph>
        For any businesses or private companies who wants a job done, hit me up
        on my email. Simply press the link below to get the email copied to your
        clipboard.
        <br />
        <FakeButton
          onClick={() => {
            navigator.clipboard.writeText("Adam97.live.com@live.com");
          }}
        >
          Adam97.live.com@live.com
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
  padding: 10vh;

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
  }
`;

const CustomImg = styled.img`
  width: 40%;
  height: auto;
  @media (max-width: 1000px) {
    width: 80%;
    height: auto;
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
  background-color: ${(props) => props.theme.colors.main};
  color: ${(props) => props.theme.colors.linkColor};
  :active {
    color: red;
  }
`;

export default ContactPage;
