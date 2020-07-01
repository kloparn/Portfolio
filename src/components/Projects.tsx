import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface gitRepo {
  key: string;
  title: string;
  description: string;
  url: string;
  created: Date;
  updated: Date;
  language: string;
}

const Projects = () => {
  const [git, setGit] = useState([] as gitRepo[]);
  useEffect(() => {
    const fetchGit = async () => {
      let repo = await fetch(
        "https://adamh-portfolio-backend.herokuapp.com/api/gitRep"
      );

      const data = await repo.json();

      const returnData = data.map((e: gitRepo) => {
        return e;
      });

      console.log(returnData);

      setGit(returnData);
    };
    fetchGit();
  }, []);

  return (
    <CardWrapper className="container">
      {git.map((repo) => {
        return (
          <Card className="card" key={repo.key}>
            <div className="face face1">
              <GitPicture>
                <h1> {repo.title}</h1>
              </GitPicture>
            </div>
            <div className="face face2">
              <div className="content">
                <p>{repo.description}</p>
                <p>
                  Link:
                  <a href={repo.url} rel="noopener noreferrer" target="_blank">
                    {repo.url}
                  </a>
                </p>
              </div>
            </div>
          </Card>
        );
      })}
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 1150px) {
    display: table-column;
    align-items: center;
    justify-content: center;
    padding: 0;
  }
`;

const Card = styled.div`
  display: table-row;
  padding: 1rem;
  @media (max-width: 1150px) {
    display: inline-block;
    justify-content: center;
    transform: scale(0.7);
    font-size: 19px;
    padding: 0;
  }
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