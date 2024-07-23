import React, { useEffect, useState } from 'react';
import { Container, Content, Ul, Li, TitleProject, Url, Created_at } from './style';
import { Brilho } from '../../../styles/indexStyle';

export default function Projects() {
  const [itemsApi, setItemsApi] = useState([]);
  const token = process.env.GITHUB_TOKEN;

  useEffect(() => {
    let abortController = new AbortController();

    async function getGitHubAPI() {
      try {
        const response = await fetch('https://api.github.com/users/vitordsb/repos', { 
          signal: abortController.signal, 
          Autorization: `token${token}` 
        });
        
        if (!response.ok) {
          throw new Error(response.status);
        }
        const data = await response.json();

        // Ordena os repositórios pela data de criação (do mais recente para o mais antigo)
        const sortedRepos = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        
        // Adiciona a linguagem mais usada a cada repositório
        const reposWithLanguages = await Promise.all(sortedRepos.map(async (repo) => {
          const languagesResponse = await fetch(`https://api.github.com/repos/${repo.owner.login}/${repo.name}/languages`, { signal: abortController.signal });
          const languagesData = await languagesResponse.json();
          const mostUsedLanguage = Object.keys(languagesData).reduce((a, b) => languagesData[a] > languagesData[b] ? a : b, '');

          return {
            ...repo,
            mostUsedLanguage
          };
        }));

        setItemsApi(reposWithLanguages);
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.log(error);
        }
      }
    }

    getGitHubAPI();

    return () => abortController.abort();
  }, []);

  return (
    <Container>
      <Content>
        <Ul>
          {itemsApi.map(item => (
            <Li key={item.id}>
              <TitleProject>{item.name}</TitleProject>
              <Url>
                Link do repositório: <a target="_blank" rel="noopener noreferrer" href={item.html_url}>{item.html_url}</a>
              </Url>
              <Created_at>
                Data Criação: {Intl.DateTimeFormat('pt-BR').format(new Date(item.created_at))}
              </Created_at>
              <div>
                Linguagem Mais Usada: <Brilho>{item.mostUsedLanguage}</Brilho>
              </div>
            </Li>
          ))}
        </Ul>
      </Content>
    </Container>
  );
}
