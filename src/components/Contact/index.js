import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const ContactContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: 900px;
  }
`;

const ContactH1 = styled.h1`
  font-size: 2.5rem;
  color: #010606;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

const ContactWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
`;

const ContactMap = styled.iframe`
  width: 100%;
  height: 300px;
  max-width: 1000px;
  margin-bottom: 40px;
`;

const ContactDetailWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const ContactInfo = styled.div`
  width: 33%;
  text-align: center;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 40px;
  }
`;

const ContactInfoH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  color: #01bf71;
`;

const ContactInfoP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

const Contact = () => {
  const { t } = useTranslation();

  return (
    <ContactContainer id="contact">
      <ContactH1>Contact Us</ContactH1>
      <ContactWrapper>
        <ContactMap
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.740102781255!2d121.37243901498869!3d25.076796542728655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a6ddcfca75eb%3A0x49e0336750dff09f!2zMjQ05paw5YyX5biC5p6X5Y-j5Y2A5paH5YyW5LqM6Lev5LiA5q61Mzkw6JmfMQ!5e0!3m2!1szh-TW!2stw!4v1608545209969!5m2!1szh-TW!2stw"
          width="600"
          height="450"
          frameborder="0"
          style={{ border: 0 }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></ContactMap>
        <ContactDetailWrapper>
          <ContactInfo>
            <ContactInfoH2>{t("contact.contact.title")}</ContactInfoH2>
            <ContactInfoP>{t("contact.contact.phone")}</ContactInfoP>
            <ContactInfoP>{t("contact.contact.email")}</ContactInfoP>
          </ContactInfo>
          <ContactInfo>
            <ContactInfoH2>{t("contact.address.title")}</ContactInfoH2>
            <ContactInfoP>{t("contact.address.info1")}</ContactInfoP>
            <ContactInfoP>{t("contact.address.info2")}</ContactInfoP>
          </ContactInfo>
          <ContactInfo>
            <ContactInfoH2>{t("contact.hours.title")}</ContactInfoH2>
            <ContactInfoP>{t("contact.hours.info1")}</ContactInfoP>
            <ContactInfoP>​​{t("contact.hours.info2")}</ContactInfoP>
            <ContactInfoP>​{t("contact.hours.info3")}</ContactInfoP>
          </ContactInfo>
        </ContactDetailWrapper>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;
