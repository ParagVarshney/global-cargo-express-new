import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "E-Commerce Business Owner",
    feedback:
      "Global Cargo Express delivered our shipment on time and in perfect condition. Their customer service is outstanding!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rajesh Patel",
    role: "Export Manager",
    feedback:
      "Their global network and tracking system made shipping overseas a breeze. Highly recommend!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Anika Singh",
    role: "Manufacturing Firm Owner",
    feedback:
      "The team at Global Cargo Express is professional and reliable. They've become our go-to logistics partner.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-r from-blue-50 to-blue-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-12"
        >
          Hear from Our Satisfied Clients
        </motion.h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full border-4 border-blue-200 mb-4 object-cover"
              />
              <p className="text-gray-600 italic mb-4">"{t.feedback}"</p>
              <h3 className="text-lg font-semibold text-gray-900">{t.name}</h3>
              <span className="text-sm text-gray-500">{t.role}</span>
            </motion.div>
          ))}
        </div>

        {/* Partner CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 bg-blue-600 text-white py-8 px-6 rounded-2xl shadow-xl"
        >
          <h3 className="text-2xl font-bold mb-4">
            Partner with Us
          </h3>
          <p className="mb-4">
            Join the countless businesses that rely on Global Cargo Express for their logistics needs.  
            Contact us today to experience world-class service.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

