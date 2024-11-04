import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import styled from "styled-components";


const Container = styled.section`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 2rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  margin: 20px 0;
  width: auto;
  @media (max-width: 760px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const ListItem = styled.li`
  background-color: white;
  margin: 10px;
  color: black;
  padding: 25px;
  width: auto;
  height: auto;
  border-radius: 8px;
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.1);
  &:hover {
    transition: calc(.1s);
    transform: scale(1.025);
  }
  h1 {
    font-size: auto;
    font-weight: bolder;
  }
  h2 {
    font-size: 20px;
  }
  p {
    font-size: 18px;
  }
  a {
    text-decoration: none;
    color: black;
    font-size: 20px;
    &:hover {
      text-decoration: underline;
      color: blue;
    }
  }
`;

const ErrorMessage = styled.p`
  color: red;
`;

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
    const token = import.meta.env.VITE_GITHUB_TOKEN;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.github.com/users/vitordsb/repos", {
          headers: {
                Authorization: `token ${token}`,
            },
        });

        if (!response.ok) {
          throw new Error(`Erro na API: ${response.status}`);
        }

        const data = await response.json();
        setRepos(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Um erro inesperado ocorreu.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);

  if (loading) {
    return (
      <Container>
        <Title>Projetos</Title>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Title>Projetos</Title>
            <ErrorMessage>Erro: {error}</ErrorMessage>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container>
      <Title>Meus Projetos no GitHub</Title>
      <List>
        {repos.map((repo) => (
          <ListItem key={repo.id}>
            <h1>{repo.name}</h1>
            <h2>
              Criado em: {new Date(repo.created_at).toLocaleDateString()} por {repo.owner.login}
            </h2>
            <p>{repo.description}</p>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              Ver repositório
            </a>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Projects