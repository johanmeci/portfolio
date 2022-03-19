import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineMenu } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const showNavbar = (e) => {
  e.preventDefault();
  
  const navbar = document.querySelector('#navbar');

  if (!navbar.classList.contains('active')) {
    navbar.classList.add('active');
    e.currentTarget.classList.add('active');
  } else {
    navbar.classList.remove('active');
    e.currentTarget.classList.remove('active');
  }
}

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white" }}>
          <DiCssdeck size="3rem" /><Span className="span-name">Johan Meneses</Span>
        </a>
      </Link>
    </Div1>

    <Div2 id="navbar">
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
    </Div2>

    <Div3>
      <SocialIcons href="https://github.com/johanmeci" target="_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/johan-meneses/" target="_blank">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="#" onClick={(e) => showNavbar(e)}>
        <AiOutlineMenu size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
