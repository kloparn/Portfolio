import React from "react";
import styled from "styled-components";

const CardFrontend = () => {
  return (
    <CardHolder>
      <CardHead>Front-end information</CardHead>
    </CardHolder>
  );
};

const CardBackend = () => {
  return (
    <CardHolder>
      <CardHead>Back-end information</CardHead>
    </CardHolder>
  );
};

const CardAboutMe: React.FC = () => {
  return (
    <CardHolder>
      <CardHead>About me information</CardHead>
    </CardHolder>
  );
};

const CardHolder = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid ${(props) => props.theme.colors.text};
  width: 30vh;
`;

const CardHead = styled.h1`
  padding: 2rem;
`;

export { CardFrontend, CardBackend, CardAboutMe };
