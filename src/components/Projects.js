import { Container, Row, Tab, Nav, Col } from "react-bootstrap";
import "../styles/projects.css";
import FinanceSystem from "../assets/img/imgprojetos/FinanceSystem.jpeg";
import jogoVelha from "../assets/img/imgprojetos/Jogo_da_velha.png";
import discordbot from "../assets/img/imgprojetos/botDiscord.png";
import FlapBird from "../assets/img/imgprojetos/FlapBird_game.png";
import pycalculator from "../assets/img/imgprojetos/PyCalulator.png";
import githubfinder from "../assets/img/imgprojetos/githubfinder.jpg"
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const ProjectCard = ({ title, description, imgUrl, url }) => {
    return (
      <Col size={12} sm={6} md={4}>
        <div className="proj-imgbx">
          <img src={imgUrl}/>
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span><br/>
            <a className="proj-link" href={url} target="blank">
              ver projeto
            </a>
          </div>
        </div>
      </Col>
    )
  }
  const projects = [
    {
      title: "Bot no Discord",
      description: "JavaScript",
      imgUrl: discordbot,
      url: "https://github.com/vitordsb/DiscordBot.git",
    },
    {
      title: "Jogo Flap Bird",
      description: "Java Script",
      imgUrl: FlapBird,
      url: "",
    },
    {
      title: "Calculadora Simples",
      description: "Python",
      imgUrl: pycalculator,
      url: "",
    },
    {
      title: "Sistema Financeiro Pessoal",
      description: "React e API local",
      imgUrl: FinanceSystem,
      url: "https://github.com/vitordsb/MeuPortifolio.git",
    },
    {
      title: "Jogo da velha",
      description: "PHP e javascript",
      imgUrl: jogoVelha,
      url: "https://github.com/vitordsb/JogodaVelha.git",
    },
    {
      title: "Github finder",
      description: "Typescript e React",
      imgUrl: githubfinder,
      url: "https://github.com/vitordsb/FindPerfilGitHub.git",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Meus projetos próprios e experiências</h2>
                <p>Grande parte desses projetos foram desenvolvidos com o ecossistema <span>JavaScript</span> e seus frameworks. Breve Subirei mais projetos nesse portifólio, mas sempre estarei em atividade no Github</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard 
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
      </Container>
    </section>
  )
}
