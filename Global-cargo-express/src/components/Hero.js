// src/components/Hero.js
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="relative bg-[#063347] text-white min-h-[90vh] flex items-center overflow-hidden"
      style={{
        backgroundImage: 'url("https://5.imimg.com/data5/HH/XV/YR/SELLER-6169777/plus-banner-1-500x500.jpg")', // replace with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center md:text-left">
        <motion.p
          className="uppercase tracking-widest text-gray-200 font-semibold mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          Seamless Logistics & Cargo Solutions
        </motion.p>

        <motion.h1
          className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          Global Cargo Express <br />
          Your Trusted Global Logistics Partner
        </motion.h1>

        <motion.p
          className="max-w-2xl text-lg md:text-xl text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          We deliver your goods efficiently, reliably, and securely to any
          destination across the globe. With our extensive network and
          cutting-edge technology, we ensure your cargo moves swiftly and safely.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          <a
            href="#services"
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl text-lg font-semibold shadow-md transition"
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="bg-white text-blue-700 hover:bg-gray-100 px-6 py-3 rounded-xl text-lg font-semibold shadow-md transition"
          >
            Get a Quote
          </a>
        </motion.div>
      </div>

      {/* Plane Animation */}
      <motion.img
        src="/air.png"
        alt="Plane"
        className="absolute bottom-10 right-10 w-[250px] md:w-[400px] z-20"
        initial={{ x: 300, opacity: 0 }}
        animate={{
          x: [300, 0, 20, 0],
          y: [0, -10, 0, -10],
          opacity: 1,
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
    </section>
  );
};

export default Hero;
