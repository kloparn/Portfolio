import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Spinner, Card, Button } from "react-bootstrap";

interface gitRepo {
  id: string;
  title: string;
  description: string;
  url: string;
  created: Date;
  updated: Date;
  language: string;
  homepage: string;
}

const Projects = () => {
  const [slowLoad, setSlowLoad] = useState("");
  const [git, setGit] = useState([] as gitRepo[]);
  const [retrieved, setRetrieved] = useState(false);
  useEffect(() => {
    const fetchGit = async () => {
      let repo = await fetch(
        "https://dotnet-core-backend.herokuapp.com/api/Github"
      );

      const data = await repo.json();

      const returnData = data.map((e: gitRepo) => {
        return e;
      });

      setGit(returnData);

      setRetrieved(true);
    };
    fetchGit();
  }, []);

  const slowLoader = () => {
    setTimeout(slowInfo, 5000);
  };
  const slowInfo = () => {
    setSlowLoad("The API is starting up if you see this...");
  };

  return (
    <CardWrapper>
      {!retrieved ? (
        <Information>
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
          <h2>Loading projects from api...</h2>
          {slowLoader()}
          <h2>{slowLoad}</h2>
        </Information>
      ) : (
        git.map((repo) => {
          return (
            <CustomCard
              style={{
                width: "18rem",
                backgroundColor: "transparent",
                padding: "1rem",
                margin: "1rem",
              }}
              key={repo.id}
            >
              <Card.Body>
                <Card.Img variant="top" src="github-logo.png"></Card.Img>
                <Card.Title>{repo.title}</Card.Title>
                <Card.Text>{repo.description}</Card.Text>
                <Card.Footer>Language: {repo.language}</Card.Footer>
                <p>
                  <br />
                  <Card.Link href={repo.url} target="_blank">
                    <LinkButton>Github</LinkButton>
                  </Card.Link>
                </p>
                {repo.homepage === "null" ? (
                  ""
                ) : (
                  <Card.Link href={repo.homepage} target="_blank">
                    <LinkButton>HomePage</LinkButton>
                  </Card.Link>
                )}
              </Card.Body>
              <Card.Footer>
                Last updated: <br />
                <small className="text-muted">
                  {new Date(repo.updated).toLocaleDateString()}
                </small>
              </Card.Footer>
            </CustomCard>
          );
        })
      )}
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  padding-top: 2vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const LinkButton = styled(Button)`
  font-size: 1.2rem;
`;

const CustomCard = styled(Card)`
  transition: 0.2s;
  :hover {
    transform: scale(1.07);
    transition: all 0.2s linear;
    border-color: ${(props) => props.theme.colors.text};
  }
`;

const Information = styled.div`
  padding-top: 25vh;
`;

export default Projects;
