import styled from "styled-components";

const Container = styled.section`
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    height: 80vh;
`
const Title = styled.h1`
  margin-top: 20px;
  color: ${(props) => props.theme.color};
  font-size: 50px;
  text-align: center;
`;
const BoxItens = styled.div`
    display: flex;
    margin-top: 20px;
    width: auto;
    justify-content: space-around;
    @media (max-width: 560px) {
        flex-direction: column;
        align-items: center;
        gap: 50px;
    }
`
const Column = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
    justify-content: center;
    align-items: start;
`
const Languages = styled.div`
  display: flex;
  color: ${(props) => props.theme.color};
  gap: 20px;
  align-items: center;
  
  p {
    font-size: 30px;
    border-bottom: 2px solid ${(props) => props.theme.color};
    width: 300px;
    @media (max-width: 560px) {
      font-size: 20px;
      width: 150px;
    }
  }
  img {
    width: 130px;
    height: 130px;
    object-fit: cover;
    @media (max-width: 560px) {
      width: 80px;
      height: 80px;
    }
  }
`;
const Subtitle = styled.p`
  margin-top: 10px;
  color: ${(props) => props.theme.color};
  font-size: 20px;
  text-align: center;
`;

const Skills = () => {
    return (
      <Container>
        <Title>Minhas Habilidades</Title>
        <Subtitle>Conhecimentos das seguintes linguagens e frameworks</Subtitle>
        <BoxItens>
          <Column>
            <Languages>
              <img src="/src/assets/svg/javascript.svg" alt="" />
              <p>JavaScript</p>
            </Languages>
            <Languages>
              <img src="/src/assets/svg/typescript.svg" alt="" />
              <p>TypeScript</p>
            </Languages>
            <Languages>
              <img src="/src/assets/svg/python.svg" alt="" />
              <p>Python</p>
            </Languages>
            <Languages>
              <img src="/src/assets/svg/vite.svg" alt="" />
              <p>Vite</p>
            </Languages>
            <Languages>
              <img src="/src/assets/svg/mysql.svg" alt="" />
              <p>Mysql</p>
            </Languages>
          </Column>
          <Column>
            <Languages>
              <img src="/src/assets/svg/react.svg" alt="" />
              <p>React</p>
            </Languages>
            <Languages>
              <img src="/src/assets/svg/vue.svg" alt="" />
              <p>Vue</p>
            </Languages>
            <Languages>
              <img src="/src/assets/svg/nextjs.svg" alt="" />
              <p>Next</p>
            </Languages>
            <Languages>
              <img src="/src/assets/svg/node.svg" alt="" />
              <p>Node</p>
            </Languages>
            <Languages>
              <img src="/src/assets/svg/nestjs.svg" alt="" />
              <p>Nest</p>
            </Languages>
          </Column>
        </BoxItens>
      </Container>
    );
}
export default Skills