import React from "react";
import { motion } from "framer-motion";
import { Globe, Briefcase, ShieldCheck, Headphones } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Global Network",
    desc: "Seamless connectivity across major trade routes worldwide.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    icon: Briefcase,
    title: "Expertise",
    desc: "Years of experience in handling complex logistics operations.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDZ4wyPZFHNl4l1YIACawaAuPMfLKnAPLKLw&s",
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    desc: "Trusted partner ensuring safe and timely deliveries.",
    img: "https://cdn.prod.website-files.com/64fef88ee8b22d3d21b715a2/65853cad9a56f7d446bf0ce1_What%20is%20Data%20Reliability%20Engineering.webp",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    desc: "Dedicated team providing assistance 24/7.",
    img: "https://d1eipm3vz40hy0.cloudfront.net/images/AMER/gemini-vs-chatgpt-hero-optimized.jpg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const WhyChooseUs = () => {
  return (
    <section id="why" className="py-4 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT: Bigger Images */}
        <div className="relative flex justify-center md:justify-start">
          <motion.img
            src="https://kritika.design/express-freight/assets/images/thumbs/about-two-img3.png"
            alt="Truck 1"
            className="rounded-2xl shadow-xl w-[380px] md:w-[500px]"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false, amount: 0.3 }}
          />
          <motion.img
            src="https://images.unsplash.com/photo-1529070538774-1843cb3265df"
            alt="Truck 2"
            className="rounded-2xl shadow-2xl w-[300px] md:w-[430px] absolute bottom-[-40px] left-12 md:left-32"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: false, amount: 0.3 }}
          />
        </div>

        {/* RIGHT: Features */}
        <div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            Why Choose Us?
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                className="p-6 border rounded-xl shadow-md hover:shadow-lg transition bg-white text-left"
                initial="hidden"
                whileInView="visible"
                variants={cardVariants}
                custom={i}
                viewport={{ once: false, amount: 0.3 }}
              >
                {/* Feature Image */}
                <img
                  src={f.img}
                  alt={f.title}
                  className="w-full h-32 object-cover rounded-md mb-3"
                />
                {/* Icon */}
                <f.icon className="w-9 h-9 text-blue-700 mb-2" />
                <h3 className="font-semibold text-lg mb-2 text-gray-800">
                  {f.title}
                </h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
