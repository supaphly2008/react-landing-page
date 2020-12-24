import React, { useState } from "react";
import HeroSection from "components/HeroSection";
import InfoSection from "components/InfoSection";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import Services from "components/Services";
import { homeObjectOne } from "components/InfoSection/Data";
import Gallery from "components/Gallery";
import Contact from "components/Contact";
import Footer from "components/Footer";

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
      <Gallery />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
