import { useState, useEffect } from "react";
import "../styles/navbar.css"
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../assets/img/imgsite/linkedin.svg';
import github from '../assets/img/svg/github-color-svgrepo-com.svg'
import navIcon2 from '../assets/img/imgsite/whatsapp.svg'
import navIcon3 from '../assets/img/imgsite/instagram.svg';
import {BrowserRouter as Router} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="https://github.com/vitordsb" target="blank" id="logo">
          <img src={github} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>

              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>

              <Nav.Link href="#certificates" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => 
              onUpdateActiveLink('certificates')}>Certificates</Nav.Link>

              <Nav.Link href="/projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>

            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/vitor-de-souza-barreto-15067a1bb/" target="blank"><img src={navIcon1} alt=""/></a>
                <a href="https://wa.me/message/5RNV27ITGO2GH1" target="blank"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/vitudsb/" target="blank"><img src={navIcon3} alt="" /></a>
              </div>
                <a href="https://www.canva.com/design/DAGA6z0ti1Y/iy0OdDQz0m2e8MzYOH12Lg/view" target="blank">
                  <button><span>Meu Currículo</span></button>
                </a>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
