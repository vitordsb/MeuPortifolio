/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import { Container, NavLinks, Content, Menu, CloseSidebar, ContentTitle, Logo, Icons } from './style.js';
import { FaBars, FaTimes, FaHome, FaBrain, FaCertificate   } from 'react-icons/fa';
import { AiFillProject } from "react-icons/ai";
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Header() {
  const [sidebar, setSidebar] = useState(false);
  const { asPath } = useRouter();

  const showSiderbar = () => setSidebar(!sidebar);

  function activeLink(path) {
    return asPath === path ? 'active' : '';
  }

  useEffect(() => {
    console.log('Client-side render - asPath:', asPath);
  }, [asPath]);

  console.log('Initial render - asPath:', asPath);

  return (
    <Container>
      <Content>
        <ContentTitle>
          <Logo>
            <a target="_blank" href="https://github.com/vitordsb">
              <Image src="/images/github.svg" alt="github" width={50} height={50} />
            </a>
          </Logo>
        </ContentTitle>
        
        <NavLinks sidebar={sidebar} style={{gap: "25px"}}>
          <CloseSidebar onClick={showSiderbar}>
            <FaTimes />
          </CloseSidebar>

          <Link href="/" passHref style={{color: "black", fontSize: "20px", fontWeight: "bolder"}}>
              <FaHome activeLink={("/")} onClick={showSiderbar}/>
              Home
          </Link>

            <Link href="/projects" style={{color: "black", fontSize: "20px", fontWeight: "bolder"}} >
                <AiFillProject activeLink={("/projects")} onClick={showSiderbar}/>
                Projects
            </Link>

          <Link href="/skills" style={{color: "black", fontSize: "20px", fontWeight: "bolder"}} >
              <FaBrain activeLink={("/skills")} onClick={showSiderbar}/>
              Skills
          </Link>

          <Link href="/cursos" style={{color: "black", fontSize: "20px", fontWeight: "bolder"}}>
              <FaCertificate activeLink={("/cursos")} onClick={showSiderbar}/>
              Cursos
          </Link>
        </NavLinks>

        <Icons>
          <a target="_blank" href="https://www.linkedin.com/in/vitordsb/">
            <Image src="/imgsite/linkedin.svg" alt="linkedin" width={24} height={24} />
          </a>
          <a target="_blank" href="https://www.instagram.com/vitordsb/">
            <Image src="/imgsite/instagram.svg" alt="instagram" width={24} height={24} />
          </a>
          <a target="_blank" href="https://wa.me/11957519999">
            <Image src="/imgsite/whatsapp.svg" alt="Whatsapp" width={24} height={24} />
          </a>
        </Icons>

        <Menu>
          <FaBars onClick={showSiderbar} />
        </Menu>
      </Content>
    </Container>
  );
}
