import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import USP from "../components/USP";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import SpecialitySection from "../components/SpecialitySection";
import ServicesSection from "../components/ServicesSection";

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SpecialitySection/>
      <ServicesSection/>
      <About />
      <USP />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
