import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Plane, Ship, Warehouse, FileCheck, Truck } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

const services = [
  {
    title: "Air Freight",
    desc: "Fast and reliable air transport for time-sensitive shipments.",
    img: "https://www.iata.org/contentassets/0de413410173467bb0db43c818d6e8be/what-types-of-cargo-are-transported-by-air.jpg",
    icon: Plane,
  },
  {
    title: "Ocean Freight",
    desc: "Cost-effective solutions for large and bulk shipments.",
    img: "https://www.sarvamlogistics.com/images/ocean-freight-cargo.webp",
    icon: Ship,
  },
  {
    title: "Warehousing",
    desc: "Secure storage facilities with inventory management.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx4pytUfGoe6fgn1g2wZhKuS1Y17w-T1OUXQ&s",
    icon: Warehouse,
  },
  {
    title: "Customs Clearance",
    desc: "Expert handling of customs documentation and compliance.",
    img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
    icon: FileCheck,
  },
  {
    title: "Last-Mile Delivery",
    desc: "Efficient delivery to your customers’ doorsteps.",
    img: "https://incodocs.com/blog/wp-content/uploads/2024/09/Last-Mile-Delivery-Explained.jpg",
    icon: Truck,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-4 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
          Our Services
        </h2>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden group relative">
                {/* Image */}
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Content */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 p-4 rounded-lg shadow-md flex items-center gap-3">
                  <service.icon className="w-8 h-8 text-red-600" />
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900 text-lg">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600">{service.desc}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Services;


