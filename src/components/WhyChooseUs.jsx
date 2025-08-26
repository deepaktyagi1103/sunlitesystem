// src/components/WhyChooseUs.jsx
import { FaIndustry, FaAward, FaUsers, FaPhoneAlt } from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section className="py-16 px-6 md:px-20 bg-white text-center">
      {/* Heading */}
      <div className="mb-12">
        <p className="text-blue-600 font-semibold uppercase">Why Choose Us</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
          We Are Here to Grow Your Business Exponentially
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-3"></div>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-3 gap-10 items-center">
        
        {/* Left Side */}
        <div className="space-y-10">
          <div className="flex items-start space-x-4 text-left">
            <div className="bg-blue-600 text-white p-4 rounded-md">
              <FaIndustry size={20} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Best In Industry</h3>
              <p className="text-gray-600 text-sm">
                Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 text-left">
            <div className="bg-blue-600 text-white p-4 rounded-md">
              <FaAward size={20} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Award Winning</h3>
              <p className="text-gray-600 text-sm">
                Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor
              </p>
            </div>
          </div>
        </div>

        {/* Center Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
            alt="Why Choose Us"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side */}
        <div className="space-y-10">
          <div className="flex items-start space-x-4 text-left">
            <div className="bg-blue-600 text-white p-4 rounded-md">
              <FaUsers size={20} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Professional Staff</h3>
              <p className="text-gray-600 text-sm">
                Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 text-left">
            <div className="bg-blue-600 text-white p-4 rounded-md">
              <FaPhoneAlt size={20} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">24/7 Support</h3>
              <p className="text-gray-600 text-sm">
                Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
