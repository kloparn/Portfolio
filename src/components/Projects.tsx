import React, { useState, useEffect } from "react";
import styled from "styled-components";

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

      console.log(returnData);

      setGit(returnData);
      setRetrieved(true);
    };
    fetchGit();
  }, []);

  const datetimeStringConverter = (time: Date) => {
    const covertedTime =
      time.toLocaleString().split("T")[0] +
      " " +
      time.toLocaleString().split("T")[1].split("Z")[0];
    return covertedTime;
  };

  return (
    <CardWrapper className="container">
      {!retrieved ? (
        <Information>
          Retrieving Github repositories, wait a moment...
        </Information>
      ) : (
        git.map((repo) => {
          return (
            <Card className="card" key={repo.id}>
              <div className="face face1">
                <GitPicture>
                  <h1> {repo.title}</h1>
                </GitPicture>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>
                    Created at: {datetimeStringConverter(repo.created)}
                    <br />
                    Updated at: {datetimeStringConverter(repo.updated)}
                  </p>
                  <p>{repo.description}</p>
                  <p>Language: {repo.language} </p>
                  <footer>
                    <a
                      href={repo.url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {repo.url}
                    </a>
                    <br />
                    {repo.homepage === "null" ? null : "homepage: "} <br />
                    <a
                      href={repo.homepage === "null" ? "" : repo.homepage}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {repo.homepage === "null" ? null : repo.homepage}
                    </a>
                  </footer>
                </div>
              </div>
            </Card>
          );
        })
      )}
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: table-column;
  align-items: center;
  justify-content: center;
  @media (max-width: 1150px) {
    padding: 0;
  }
`;

const Information = styled.div`
  padding-top: 25vh;
  font-size: 2.5rem;
`;

const Card = styled.div`
  display: table-row;
  padding: 1rem;
  display: inline-block;
  justify-content: center;
`;

const GitPicture = styled.div`
  background-image: url("github-logo.png");
  background-color: white;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
  height: 100%;
  width: 100%;
  align-items: top;
  justify-content: center;
  text-align: center;
  color: lightblue;
  text-shadow: 2px 2px black;
`;

export default Projects;
