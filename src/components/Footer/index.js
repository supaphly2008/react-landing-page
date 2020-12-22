import React from "react";
import styled from "styled-components";

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
  const date = new Date();
  return (
    <FooterContainer>
      <FooterText>Copyright &copy; {date.getFullYear()}, EZ CUT</FooterText>
    </FooterContainer>
  );
};

export default Footer;
