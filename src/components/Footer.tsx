import React from "react";
import styled from "styled-components";

const Footer: React.FC = () => {
  return (
    <FootHolder>
      <CustomFoot>This is a footer</CustomFoot>
    </FootHolder>
  );
};

const FootHolder = styled.div`
  display: block;
  height: 60px;
  width: 100%;
`;

const CustomFoot = styled.footer`
  background-color: ${(props) => props.theme.colors.third};
  border-top: 1px solid #ccc;
  text-align: center;
  padding: 1rem;
  position: fixed;
  left: 0;
  bottom: 0;
  height: 60px;
  width: 100%;
`;

export default Footer;
