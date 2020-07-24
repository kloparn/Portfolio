import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import styled from "styled-components";

const Cards = () => {
  const [userData, setUserData] = useState(Object);
  const [backData, setBackData] = useState(Object);
  const [frontData, setFrontData] = useState(Object);
  const [retrieved, setRetrieved] = useState(false);

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
      setRetrieved(true);
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
          {!retrieved ? (
            <Information className="content">
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
              <p>Loading data from api...</p>
            </Information>
          ) : (
            <div className="content">
              <h3>{frontData.name}</h3>
              <p>{frontData.information}</p>
              <footer>{frontData.library}</footer>
            </div>
          )}
        </div>
      </Card>
      <Card className="card">
        <div className="face face1">
          <div className="content">
            <div className="icon"></div>
          </div>
        </div>
        <div className="face face2">
          {!retrieved ? (
            <Information className="content">
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
              <p>Loading data from api...</p>
            </Information>
          ) : (
            <div className="content">
              <h3>{userData.name}</h3>
              <p>{userData.information}</p>
            </div>
          )}
        </div>
      </Card>
      <Card className="card">
        <div className="face face1">
          <div className="content">
            <div className="icon"></div>
          </div>
        </div>
        <div className="face face2">
          {!retrieved ? (
            <Information className="content">
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
              <p>Loading data from api...</p>
            </Information>
          ) : (
            <div className="content">
              <h3>{backData.name}</h3>
              <p>{backData.information}</p>
              <footer>{backData.framework}</footer>
            </div>
          )}
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

const Information = styled.div`
  color: black;
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
