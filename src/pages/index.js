import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Services from "../components/Services";
import { homeObjectOne, homeObjectTwo } from "../components/InfoSection/Data";
import Contact from "../components/Contact";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <HeroSection />
      <InfoSection {...homeObjectOne} />
      <InfoSection {...homeObjectTwo} />
      <Services />
      <Contact />
    </>
  );
};

export default Home;
