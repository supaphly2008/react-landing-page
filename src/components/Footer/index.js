import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const FooterContainer = styled.div`
  background-color: #010606;
  display: flex;
  height: 80px;
  justify-content: center;
  align-items: center;
`;

const FooterText = styled.p`
  font-size: 16px;
  color: #fff;

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

const Footer = () => {
  const { t } = useTranslation();

  const date = new Date();
  return (
    <FooterContainer>
      <FooterText>{t("footer.text", date.getFullYear())}</FooterText>
    </FooterContainer>
  );
};

export default Footer;
