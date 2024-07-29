/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import { Container, NavLinks, Content, Menu, CloseSidebar, Icons, Links} from './style.js';
import { FaBars, FaTimes, FaLinkedin, FaWhatsapp, FaInstagram, FaGithub} from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from'styled-components';
import ThemeToggle from '../ThemeToggle.js';

const Whatsapp = styled(FaWhatsapp)`
  color: #51A985;
  height: 40px;
  width: 40px;
  transition: .3s;

  &:hover {
    transform: scale(1.2);
  }
    @media (max-width: 600px) {
    width: 30px;
    height: 30px;
    color: ${({ theme }) => theme.text};
    transform: translatey(0px);
    animation: float1 3s ease-in-out infinite;
    @keyframes float1 {
    0% {
    }
    50% {
      color: #51A985;
    }
    100% {
    }
  }
}
`
const Linkedin = styled(FaLinkedin)`
  color: #4789FB;
  height: 40px;
  width: 40px;
  transition: .3s;

  &:hover {
    transform: scale(1.2);
  }
    @media (max-width: 600px) {
    width: 30px;
    height: 30px;
    color: ${({ theme }) => theme.text};
    transform: translatey(0px);
    animation: float2 3s ease-in-out infinite;
    @keyframes float2 {
    0% {
    }
    50% {
      color: #4789FB;
    }
    100% {
    }
  }
}
`
const Instagram = styled(FaInstagram)`
  color: #e12d80;
  height: 40px;
  width: 40px;
  transition: .3s;

  &:hover {
    transform: scale(1.2);
  }
    @media (max-width: 600px) {
    width: 30px;
    height: 30px;
    color: ${({ theme }) => theme.text};
    transform: translatey(0px);
    animation: float3 3s ease-in-out infinite;
    @keyframes float3 {
    0% {
    }
    50% {
      color: #e12d80;
    }
    100% {
    }
  }
}
`
const Github = styled(FaGithub)`
  color: ${({ theme }) => theme.text};
  height: 80px;
  width: 80px;
  transition: .4s;
  &:hover {
    color: blue;
    transform: scale(1.1);
  }
  @media (max-width: 600px) {
    :hover {
      color: none;
    }
    height: 60px;
    width: 60px;
    transform: translatey(0px);
    animation: float 3s ease-in-out infinite;
}
`

export default function Header() {
  const [sidebar, setSidebar] = useState(false);
  const { asPath } = useRouter();
  const showSiderbar = () => setSidebar(!sidebar);
  useEffect(() => {
    console.log('Client-side render - asPath:', asPath);
  }, [asPath]);
  console.log('Initial render - asPath:', asPath);

  return (
    <Container>
      <Content>

          <a href="https://github.com/vitordsb" target='blank'>
            <Github/>
          </a>
          
        <NavLinks sidebar={sidebar} style={{gap: "15px"}}>
          <CloseSidebar onClick={showSiderbar}>
            <FaTimes />
          </CloseSidebar>

            <Links>
              <Link href="/">
                  <p>Home</p>
              </Link>
            </Links>

            <Links>
              <Link href="/projects">
                  <p>Projects</p>
              </Link>
            </Links>

            <Links>
              <Link href="/skills">
                  <p>Skills</p>
              </Link>
            </Links>

            <Links>
              <Link href="/cursos">
                  <p>Certificates</p>
              </Link>
            </Links>

        </NavLinks>
        <Icons>

          <a target="_blank" href="https://www.linkedin.com/in/vitordsb/">
            <Linkedin/>
          </a>

          <a target="_blank" href="https://www.instagram.com/vitordsb/">
            <Instagram/>
          </a>

          <a target="_blank" href="https://wa.me/11957519999">
            <Whatsapp/>
          </a>
          <ThemeToggle/>
        </Icons>
        <Menu>  
          <FaBars onClick={showSiderbar} />
        </Menu>

        

      </Content>
    </Container>
  );
}
