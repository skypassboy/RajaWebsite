import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from './NavbarStyledComponent'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { Close, CloseRounded } from '@mui/icons-material';
import { useTheme } from 'styled-components';
import HeroImg from '../../images/MarvalEnterprice.png'
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          {/* <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
            <DiCssdeck style={{ color: "#854CE6" }} size="3rem" /> <Span>Ritesh</Span>
          </a> */}

          <img src={HeroImg} alt="hero-image" style={{ maxHeight: "200px", maxWidth: "200px", color: 'white' }} />
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          {/* <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>GitHub</NavLink> */}
          <NavLink href='#projects'>Services</NavLink>
          {/* <NavLink href='#education'>Education</NavLink> */}
          <NavLink href='#contact'>Contact</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href="tel:9356891918">Call Now</GitHubButton>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            {/* <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Github</MobileLink> */}
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Services</MobileLink>
            {/* <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileLink> */}
            <MobileLink href='#contact' onClick={() => {
              setIsOpen(!isOpen)
            }}>Contact</MobileLink>
            <GitHubButton style={{ padding: '10px 16px', background: `#bcba16`, color: 'white', width: 'max-content' }} href="tel:9356891918">Call Now</GitHubButton>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar