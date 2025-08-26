// src/components/OurServices.jsx
import { FaShieldAlt, FaChartLine, FaCode, FaMobileAlt, FaSearch } from "react-icons/fa";

export default function OurServices() {
  const services = [
    {
      icon: <FaShieldAlt size={22} />,
      title: "Cyber Security",
      desc: "Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed",
    },
    {
      icon: <FaChartLine size={22} />,
      title: "Data Analytics",
      desc: "Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed",
    },
    {
      icon: <FaCode size={22} />,
      title: "Web Development",
      desc: "Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed",
    },
    {
      icon: <FaMobileAlt size={22} />,
      title: "Apps Development",
      desc: "Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed",
    },
    {
      icon: <FaSearch size={22} />,
      title: "SEO Optimization",
      desc: "Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-20 bg-white text-center">
      {/* Section Header */}
      <div className="mb-12">
        <p className="text-blue-600 font-semibold uppercase">Our Services</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
          Custom IT Solutions for Your Successful Business
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-3"></div>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Service Boxes */}
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-blue-50 p-8 rounded-lg shadow-sm hover:shadow-md transition text-center"
          >
            {/* Diamond Icon */}
            <div className="flex justify-center mb-4">
              <div className="bg-blue-600 text-white p-4 transform rotate-45">
                <div className="-rotate-45">{service.icon}</div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.desc}</p>
          </div>
        ))}

        {/* Call to Action */}
        <div className="bg-blue-600 p-10 text-white rounded-lg shadow-lg flex flex-col justify-center">
          <h3 className="text-xl font-semibold mb-3">Call Us For Quote</h3>
          <p className="text-sm mb-4">
            Clita ipsum magna kasd rebum at ipsum amet dolor justo dolor est magna stet eirmod
          </p>
          <p className="text-2xl font-bold">+012 345 6789</p>
        </div>
      </div>
    </section>
  );
}
