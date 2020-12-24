import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";
import { useTranslation } from "react-i18next";
import Dropwdown from "components/Dropdown";
import usFlag from "images/us.svg";
import twFlag from "images/tw.svg";

const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: #0d0d0d;
  display: grid;
  align-items: center;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const Closeicon = styled(FaTimes)`
  color: #fff;
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background-color: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const SidebarWrapper = styled.div`
  color: #fff;
`;

const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;

const LanguageDropdown = styled.div`
  display: flex;
  justify-content: center;
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

const Sidebar = ({ isOpen, toggle }) => {
  const { t } = useTranslation();

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <Closeicon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" smooth duration={500} spy exact="true" offset={-80} onClick={toggle}>
            {t("sidebar.about")}
          </SidebarLink>
          <SidebarLink to="gallery" smooth duration={500} spy exact="true" offset={-80} onClick={toggle}>
            {t("sidebar.gallery")}
          </SidebarLink>
          <SidebarLink to="services" smooth duration={500} spy exact="true" offset={-80} onClick={toggle}>
            {t("sidebar.services")}
          </SidebarLink>
          <SidebarLink to="contact" smooth duration={500} spy exact="true" offset={-80} onClick={toggle}>
            {t("sidebar.contact")}
          </SidebarLink>
        </SidebarMenu>
        <LanguageDropdown>
          <Dropwdown options={options} defaultOption={defaultOption} />
        </LanguageDropdown>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
