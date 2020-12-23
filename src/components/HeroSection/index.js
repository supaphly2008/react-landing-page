import React from "react";
import styled from "styled-components";
import Video from "../../videos/hero-video.mp4";
import Button from "../../components/Button";
import { useTranslation } from "react-i18next";

const HeroContainer = styled.div`
  background-color: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
  @media screen and (min-width: 1200px) {
    height: 980px;
  }
`;

const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background-color: #232a34;
  opacity: 0.3;
`;

const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop playsinline muted src={Video} type="vieo/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>{t("hero.heading")}</HeroH1>
        <HeroP>{t("hero.paragraph")}</HeroP>
        <HeroBtnWrapper>
          <Button to="signup">{t("hero.callToAction.button")}</Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
