import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Cards = () => {
  const [userData, setUserData] = useState(Object);
  const [backData, setBackData] = useState(Object);
  const [frontData, setFrontData] = useState(Object);

  useEffect(() => {
    const fetchApi = async () => {
      let userData = await fetch(
        "https://dotnet-core-backend.herokuapp.com/api/InformationItems/2"
      );
      userData = await userData.json();

      setUserData(userData);
      let backData = await fetch(
        "https://dotnet-core-backend.herokuapp.com/api/InformationItems/3"
      );
      backData = await backData.json();
      setBackData(backData);

      let frontData = await fetch(
        "https://dotnet-core-backend.herokuapp.com/api/InformationItems/1"
      );
      frontData = await frontData.json();

      setFrontData(frontData);
    };

    fetchApi();
  }, []);

  return (
    <CardWrapper className="containerCustom">
      <Card className="card">
        <div className="face face1">
          <div className="content">
            <div className="icon"></div>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
            <h3>{frontData.name}</h3>
            <p>{frontData.information}</p>
            <footer>{frontData.library}</footer>
            {/* 
            Currently this card has a little to much information in correlation to the user card, this in turn makes it 
            a little bit taller in tigher screens
            */}
          </div>
        </div>
      </Card>
      <Card className="card">
        <div className="face face1">
          <div className="content">
            <div className="icon"></div>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
            <h3>{userData.name}</h3>
            <p>{userData.information}</p>
          </div>
        </div>
      </Card>
      <Card className="card">
        <div className="face face1">
          <div className="content">
            <div className="icon"></div>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
            <h3>{backData.name}</h3>
            <p>{backData.information}</p>
            <footer>{backData.framework}</footer>
          </div>
        </div>
      </Card>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 1150px) {
    display: table-column;
    padding: 0;
  }
`;

const Card = styled.div`
  display: table-row;
  padding: 1rem;
  @media (max-width: 1150px) {
    display: inline-block;
    justify-content: center;
    transform: scale(0.8);
    padding: 0;
  }
`;

export { Cards };
