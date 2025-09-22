// src/components/Navbar.js
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // for menu icons (install: npm i lucide-react)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <header className="bg-gray-200 shadow-md fixed top-0 left-0 w-full z-50 h-20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between ">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2 ">
          <img
            src="/global-cargo-logo.png" // <-- place your logo in public/logo.png
            alt="Global Cargo Express"
            className="h-20 w-auto pb-5"
          />
          <span className="font-bold text-xl text-blue-600 mb-7">
            Global Cargo Express
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 mb-7">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="text-gray-700 hover:text-blue-600 transition font-bold"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 pb-5"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t">
          <nav className="flex flex-col space-y-4 py-4 px-6">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 transition"
                onClick={() => setIsOpen(false)} // closes menu on click
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

