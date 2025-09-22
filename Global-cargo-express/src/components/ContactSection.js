import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-4 overflow-hidden"
      style={{
        backgroundImage: "url('https://t4.ftcdn.net/jpg/03/37/96/33/360_F_337963325_EJuPjWslX3vAFxJ59L3y1cm6IsSfo07s.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 bg-white/80 rounded-xl p-10 opacity-80">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're here to help you with all your logistics needs.  
            Get in touch with our team to discuss your requirements or request a quote.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: MapPin,
              title: "Address",
              text: "Dubai , UAE",
            },
            {
              icon: Mail,
              title: "Email",
              text: "info@globalcargoexpress.com",
            },
            {
              icon: Phone,
              title: "Phone",
              text: "+91 12345 67890",
            },
            {
              icon: Globe,
              title: "Website",
              text: "www.globalcargoexpress.com",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <item.icon className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

