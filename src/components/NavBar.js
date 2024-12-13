import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const NavBarContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: white; 
  color: #333; 
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); 
  transition: all 0.3s ease-in-out;

  &.scrolled {
    color: white;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.4);
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1e90ff; /* Blue logo */
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const Links = styled.div`
  display: flex;
  gap: 25px;
  margin-right: 30px; 
`;

const StyledLink = styled(Link)`
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  color: #333; 
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #1e90ff;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0%;
    height: 2px;
    background: #1e90ff;
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const NavBar = () => {
  const handleScroll = () => {
    const navbar = document.querySelector("nav");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavBarContainer>
      <Logo>GDG Hackathon</Logo>
      <Links>
        <StyledLink to="hero" smooth={true} duration={500}>
          Home
        </StyledLink>
        <StyledLink to="registration" smooth={true} duration={500}>
          Registration
        </StyledLink>
        <StyledLink to="schedule" smooth={true} duration={500}>
          Schedule
        </StyledLink>
        <StyledLink to="sponsors" smooth={true} duration={500}>
          Sponsors
        </StyledLink>
        <StyledLink to="faq" smooth={true} duration={500}>
          FAQ/Contact
        </StyledLink>
      </Links>
    </NavBarContainer>
  );
};
