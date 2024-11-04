import styled from "styled-components";
import Button from "@mui/material/Button";
import { Link } from "wouter";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import ThemeToggle from "./MiniComponents/ThemeToggle";

const Linkedin = styled(FaLinkedinIn)`
  color: ${(props) => props.theme.color};
  font-size: 40px;
`;

const Instagram = styled(FaInstagram)`
  color: ${(props) => props.theme.color};
  font-size: 40px;
`;

const Watsapp = styled(FaWhatsapp)`
  color: ${(props) => props.theme.color};
  font-size: 40px;
`;
const Github = styled(FaGithub)`
  font-size: 70px;
  color: ${(props) => props.theme.color};
`;

const Container = styled.section`
  background-color: ${(props) => props.theme.background};
  display: flex;
  height: 80px;
  position: sticky;
  z-index: 1;
  align-items: center;
  border-bottom: solid 1px #ffffff;
  justify-content: space-evenly;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.color};
    font-weight: bolder;
    margin: 0 10px;
  }
  @media (max-width: 680px) {
    justify-content: space-between;
    width: auto;
    a {
      margin: 0 5px;
      font-size: 10px;
    }
  }
`;

const Pages = styled.div`
  a {
    font-size: 20px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;
const Social = styled.div`
  display: flex;
`;
const Curriculo = styled.div`
  @media (max-width: 680px) {
    display: none;
  }
`;

const Tab = styled.a``;

const LeftSide = styled.div`
  display: flex;
`;
export default function Header () {
  return (
    <>
      <Container>
        <LeftSide>
          <Tab href="">
            <Github />
          </Tab>
        </LeftSide>
        <Pages>
          <Link to="/">Início</Link>
          <Link to="/Projects">Projetos</Link>
          <Link to="/Skills">Habilidades</Link>
          <Link to="/Certificates">Certificados</Link>
        </Pages>
        <Curriculo>
          <Button href="" size="large" variant="outlined">
            Baixar Curriculo
          </Button>
        </Curriculo>
        <Social>
          <Tab href="">
            <Instagram />
          </Tab>
          <Tab href="">
            <Linkedin />
          </Tab>
          <Tab href="">
            <Watsapp />
          </Tab>
        </Social>
        <ThemeToggle/>
      </Container>
    </>
  );
};

