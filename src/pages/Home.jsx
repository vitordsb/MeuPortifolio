/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from "@mui/material";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "wouter";

const Container = styled.section`
  width: auto;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  height: 92vh;
  display: flex;
  align-items: center;
  gap: 200px;
  justify-content: center;
  @media (max-width: 560px) {
    gap: 0px;
    height: 600px;
    text-align: center;
    align-items: center;
    flex-direction: column-reverse;
  }
`;
const LeftSide = styled.div`
  width: 600px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media (max-width: 560px) {
    width: 350px;
  }
`;
const Title = styled.h1`
  font-size: 70px;
  font-weight: bolder;
  color: #3989fb;
  border-bottom: #3989fb 2px solid;
  @media (max-width: 560px) {
    font-size: 40px;
  }
`
const Text = styled.p`
  font-size: 22px;
  text-align: justify;
  @media (max-width: 560px) {
    text-align: justify;
    font-size: 18px;
  }
  span {
    color: #3989fb;
    font-weight: bolder;
  }
`;
const Function =styled.h2`
    font-size: 30px;
    @media (max-width: 560px) {
      margin-top: 100px;
      font-size: 20px;
    }
`
const RightSide = styled.div`
    
`
const Img = styled.img`
    width: 500px;
    border-radius: 50%;
    @media (max-width: 560px) {
        width: 200px;
    }
`
const MidleSide = styled.div`
  display: flex;
  gap: 10px;
  @media (max-width: 560px) {
    flex-direction: column;
    align-items: center;
  }
`;
export default function Home() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(100 - Math.random() * 100);
    const toRotate = ["Web Developer", "UI/UX Designer", "Mobile Developer"];
    const period = 500;

    useEffect(() => {
      const handleTyping = () => {
        const i = loopNum % toRotate.length;
        const fullText = toRotate[i];
        const updatedText = isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
          setDelta((prevDelta) => prevDelta / 1);
        }

        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setDelta(period);
        } else if (isDeleting && updatedText === "") {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setDelta(200 - Math.random() * 100);
        }
      };

      const ticker = setInterval(handleTyping, delta);

      return () => clearInterval(ticker);
    }, [text, delta, isDeleting, loopNum, toRotate]);
    return (
      <Container>
        <LeftSide>
          <Function>Dev Vitor de Souza</Function>
          <Title>{text}</Title>
          <Text>
            Sou desenvolvedor Web Full Stack, estudante de Sistemas de informação no 2º Semestre, Tenho habilidades sólidas com <span>TypeScript, React, Node e MySql</span>. Atualmente estou estudando <span>React-Native e VueJs</span>. E esse é meu portifólio feito em <span>TypeScript, React, Styled-Components e Material UI</span>.
          </Text>
          <MidleSide>
            <Link to="/About">
              <Button size="large" variant="contained">Sobre mim</Button>
            </Link>
            <Link to="/Projects">
              <Button size="large" variant="contained">Meus Projetos</Button>
            </Link>
            <Link to="/Skills">
              <Button size="large" variant="contained">Meu Curso</Button>
            </Link>
          </MidleSide>
        </LeftSide>

        <RightSide>
          <Img src="/src/assets/images/logo.jpg" />
        </RightSide>
      </Container>
    );
}


