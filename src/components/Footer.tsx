import React from "react";
import styled from "styled-components";
import { FaFacebook, FaGit, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = () => new Date().getFullYear();
  return (
    <CustomFoot>
      <CustomP>Created by Adam Håkansson. © {currentYear()}</CustomP>
      <section>
        <AnchorArea>
          <Anchor href="https://www.facebook.com/adam97.live/" target="_blank">
            <FaFacebook />
          </Anchor>
          <Anchor href="https://github.com/kloparn" target="_blank">
            <FaGit />
          </Anchor>
          <Anchor
            href="https://www.linkedin.com/in/adam-h%C3%A5kansson-15942313a/"
            target="_blank"
          >
            <FaLinkedin />
          </Anchor>
        </AnchorArea>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  transition: all 0.25s linear;
`;

const AnchorArea = styled.div`
  width: 40vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: auto;
`;

const Anchor = styled.a`
  line-height: 0.5em;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.forth};
`;

export default Footer;
