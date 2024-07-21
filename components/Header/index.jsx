/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { Container, NavLinks, Ancora, Content, Menu, CloseSidebar, ContentTitle, Img, Logo, Icons} from './style.js'
import { FaBars, FaTimes } from 'react-icons/fa'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const [sidebar, setSidebar] = useState(false)
  const { asPath } = useRouter()

  const showSiderbar = () => setSidebar(!sidebar)

  function activeLink(path) {
    return asPath === `/${path}` ? 'active' : ''
  }

  return (
    <Container>
      <Content>
        <ContentTitle>
          <Logo>
            <a target="blank" href="https://github.com/vitordsb" ><Img src="/images/github.svg" alt="github"/></a> 
          </Logo>
        </ContentTitle>
        
        <NavLinks sidebar={sidebar}>
          

          <CloseSidebar onClick={showSiderbar}><FaTimes /></CloseSidebar>

          <Link href="/">
            <Ancora className={activeLink('')} onClick={showSiderbar}>Home</Ancora>
          </Link>

          <Link href="projects">
            <Ancora className={activeLink('projects')} onClick={showSiderbar}>Projetos</Ancora>
          </Link>

          <Link href="skills">
            <Ancora className={activeLink('skills')} onClick={showSiderbar}>Skills</Ancora>
          </Link>

          <Link href="cursos">
            <Ancora className={activeLink('cursos')} onClick={showSiderbar}>Cursos</Ancora>
          </Link>

        </NavLinks>
        <Icons>
            <a target="blank" href="https://www.linkedin.com/in/vitordsb/"><img src="/imgsite/linkedin.svg" alt="linkedin"/></a>
            <a target="blank" href="https://www.instagram.com/vitordsb/"><img src="/imgsite/instagram.svg" alt="instagram"/></a>
            <a target="blank" href="https://wa.me/11957519999"><img src="/imgsite/whatsapp.svg" alt="Whatsapp"/></a>
          </Icons>
          <Menu>
          <FaBars onClick={showSiderbar} />
        </Menu>
      </Content>
    </Container>
  )
}
