import React from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
  height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
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
  margin-bottom: 24px;
`;

const ContactDetailWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const ContactInfo = styled.div`
  /* font-size: 24px; */
  width: 33%;
  text-align: center;
  /* border: 1px solid black; */
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
            <ContactInfoH2>CONTACTS</ContactInfoH2>
            <ContactInfoP>Phone: +886907315855 </ContactInfoP>
            <ContactInfoP>Email: contact@ezcut.co</ContactInfoP>
          </ContactInfo>
          <ContactInfo>
            <ContactInfoH2>ADDRESS</ContactInfoH2>
            <ContactInfoP>​新北市林口區文化二路一段 </ContactInfoP>
            <ContactInfoP>390號 103-1室</ContactInfoP>
          </ContactInfo>
          <ContactInfo>
            <ContactInfoH2>OPERATING HOURS</ContactInfoH2>
            <ContactInfoP> Mon - Fri: 10am - 8:30pm</ContactInfoP>
            <ContactInfoP>​​Sat: 10am - 8:30pm</ContactInfoP>
            <ContactInfoP>​Sun: 10am - 8:30pm</ContactInfoP>
          </ContactInfo>
        </ContactDetailWrapper>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;
