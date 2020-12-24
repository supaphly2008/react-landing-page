import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS, animateScroll as scroll } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Dropwdown from "components/Dropdown";
import usFlag from "images/us.svg";
import twFlag from "images/tw.svg";

const Nav = styled.nav`
  background-color: ${({ scrollNav }) => (scrollNav ? "#000" : "transparent")};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.3s all ease;
  @media screen and (max-width: 960px) {
    transition: 0.3s all ease;
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
  align-items: center;
`;

const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    color: #fff;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: --22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  height: 80px;
`;

const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

const ExtendDropdown = styled(Dropwdown)`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const options = [
  {
    value: "zh",
    name: "中文",
    icon: twFlag,
  },
  {
    value: "en",
    name: "EN",
    icon: usFlag,
  },
];

const defaultOption = {
  value: "en",
  name: "EN",
  icon: usFlag,
};

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  // TODO: add language dropdown
  const { t } = useTranslation();
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
      return;
    }
    setScrollNav(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={scrollToTop}>
            {t("navbar.logo")}
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about" smooth duration={500} spy exact="true" offset={-80}>
                {t("navbar.about")}
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="gallery" smooth duration={500} spy exact="true" offset={-80}>
                {t("navbar.gallery")}
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services" smooth duration={500} spy exact="true" offset={-80}>
                {t("navbar.services")}
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact" smooth duration={500} spy exact="true" offset={-80}>
                {t("navbar.contact")}
              </NavLinks>
            </NavItem>
          </NavMenu>
          <ExtendDropdown options={options} defaultOption={defaultOption} />
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
