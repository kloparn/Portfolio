import React from "react";
import styled from "styled-components";
import { FaFacebook, FaGit, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <CustomFoot>
      <CustomP>Created by Adam Håkansson. @ 2020</CustomP>
      <section>
        <Anchor href="https://www.facebook.com/adam97.live/">
          <FaFacebook />
        </Anchor>
        <Anchor href="https://github.com/kloparn">
          <FaGit />
        </Anchor>
        <Anchor href="https://www.linkedin.com/in/adam-h%C3%A5kansson-15942313a/">
          <FaLinkedin />
        </Anchor>
      </section>
    </CustomFoot>
  );
};

const CustomP = styled.p`
  color: ${(props) => props.theme.colors.text};
`;

const CustomFoot = styled.footer`
  background-color: ${(props) => props.theme.colors.third};
  border-top: 1px solid #ccc;
  text-align: center;
  padding: 2rem;
`;

const Anchor = styled.a`
  padding: 1rem;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.forth};
`;

export default Footer;
