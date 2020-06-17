import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CardFrontend = () => {
  const [userData, setUserData] = useState(Object);

  useEffect(() => {
    const fetchApi = async () => {
      let userData = await fetch(
        "https://adamh-portfolio-backend.herokuapp.com/api/user"
      );
      userData = await userData.json();
      setUserData(userData);
    };

    fetchApi();
  }, []);
  return (
    <CardHolder>
      <CardHead>{userData.name}</CardHead>
      <CardPicture src={userData.picture} alt="Picture of me"></CardPicture>
      <CardBody>{userData.information}</CardBody>
    </CardHolder>
  );
};

const CardBackend = () => {
  const [backData, setBackData] = useState(Object);

  useEffect(() => {
    const fetchApi = async () => {
      let backData = await fetch(
        "https://adamh-portfolio-backend.herokuapp.com/api/backend"
      );
      backData = await backData.json();
      setBackData(backData);
    };

    fetchApi();
  }, []);
  return (
    <CardHolder>
      <CardPicture
        src={backData.picture}
        alt="Backend picture to display what i use!"
      ></CardPicture>
      <CardHead>{backData.name}</CardHead>
      <CardBody>{backData.information}</CardBody>
      <CardFooter>{backData.framework}</CardFooter>
    </CardHolder>
  );
};

const CardAboutMe: React.FC = () => {
  const [frontData, setFrontData] = useState(Object);

  useEffect(() => {
    const fetchApi = async () => {
      let frontData = await fetch(
        "https://adamh-portfolio-backend.herokuapp.com/api/frontend"
      );
      frontData = await frontData.json();
      setFrontData(frontData);
    };

    fetchApi();
  }, []);
  return (
    <CardHolder>
      <CardPicture
        src={frontData.picture}
        alt="Frontend picture displaying what i use"
      ></CardPicture>
      <CardHead>{frontData.name}</CardHead>
      <CardBody>{frontData.information}</CardBody>
      <CardFooter>{frontData.framework}</CardFooter>
    </CardHolder>
  );
};

const CardHolder = styled.div`
  display: table-row;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid ${(props) => props.theme.colors.text};
  width: 30vh;
  height: 45vh;
  text-align: center;
`;

const CardHead = styled.h1`
  padding: 2rem;
`;

const CardBody = styled.p``;

const CardFooter = styled.footer``;

const CardPicture = styled.img`
  width: 20vh;
  height: auto;
`;

export { CardFrontend, CardBackend, CardAboutMe };
