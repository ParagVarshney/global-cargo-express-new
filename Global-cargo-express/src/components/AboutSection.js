import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Image */}
        <div className="space-y-6">
          <img
            src="https://images.unsplash.com/photo-1502877338535-766e1452684a"
            alt="Global Cargo Express"
            className="w-full rounded-xl shadow-lg "
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Our Commitment
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            At Global Cargo Express, we understand the importance of your cargo.
            Whether it’s a small parcel or a large shipment, we handle every
            package with care and precision. Let us take your business to new
            heights with our world-class logistics services.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            About Us
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Global Cargo Express was founded with a vision to revolutionize the
            logistics industry. With years of experience and a passion for
            excellence, we have grown into a leading global logistics provider.
            Our mission is to simplify the complexities of international
            shipping, making it easier for businesses and individuals to connect
            with the world.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Values
          </h3>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>
              <span className="font-medium text-gray-800">Integrity:</span> We
              operate with transparency and honesty in all our dealings.
            </li>
            <li>
              <span className="font-medium text-gray-800">Innovation:</span> We
              leverage the latest technology to optimize logistics processes.
            </li>
            <li>
              <span className="font-medium text-gray-800">Customer-Centric:</span>{" "}
              Your satisfaction is our priority, and we tailor our services to
              meet your needs.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Team
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Led by industry experts, our team is committed to delivering
            exceptional service. We work closely with our clients to understand
            their unique requirements and provide customized solutions that
            drive success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

