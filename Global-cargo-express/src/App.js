// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Testimonials from "./components/Testimonials";
import Footer from "./Footer";


function App() {
  return (
    <div className="font-sans text-gray-800 overflow-hidden">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Services />
      <AboutSection/>
      <Testimonials/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}

export default App;
