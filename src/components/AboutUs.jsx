import React, { useState, useEffect, useRef } from 'react';
import { FaCheckCircle, FaPhoneAlt, FaAward, FaHeadset, FaUsers, FaDollarSign } from "react-icons/fa";

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const sectionRef = useRef(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    { text: "Award Winning", icon: FaAward },
    { text: "24/7 Support", icon: FaHeadset },
    { text: "Professional Staff", icon: FaUsers },
    { text: "Fair Prices", icon: FaDollarSign }
  ];

  return (
   <section 
  ref={sectionRef}
  className="pt-4 pb-20 px-2 md:px-20 bg-gradient-to-br from-gray-80 via-white to-blue-50 relative overflow-hidden"
>
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="grid md:grid-cols-2 gap-16 items-center relative z-10 max-w-7xl mx-auto">
        
        {/* Left Content */}
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
          <div className="relative">
            <p className="text-blue-600 font-bold uppercase mb-3 tracking-wider text-sm relative inline-block">
              About Us
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 transition-transform duration-700 delay-300 origin-left group-hover:scale-x-100"></span>
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8 relative">
              The Best IT Solution With{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 relative">
                10 Years
              </span>{' '}
              of Experience
              <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor
              sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem
              et sit, sed stet no labore lorem sit. Sanctus clita duo justo et
              tempor eirmod magna dolore erat amet
            </p>
          </div>

          {/* Enhanced Features */}
          <div className="grid grid-cols-2 gap-6 mb-10">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className={`flex items-center p-4 rounded-xl transition-all duration-300 cursor-pointer group
                    ${hoveredFeature === index 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl transform scale-105' 
                      : 'bg-white/80 backdrop-blur-sm text-gray-800 hover:bg-white shadow-lg hover:shadow-xl'
                    }`}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className={`p-2 rounded-lg mr-3 transition-all duration-300 ${
                    hoveredFeature === index 
                      ? 'bg-white/20' 
                      : 'bg-blue-100 group-hover:bg-blue-200'
                  }`}>
                    <IconComponent className={`text-lg transition-colors duration-300 ${
                      hoveredFeature === index ? 'text-white' : 'text-blue-600'
                    }`} />
                  </div>
                  <span className="font-semibold transition-colors duration-300">
                    {feature.text}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Enhanced Call Section */}
          <div className="relative mb-10 group">
            <div className="flex items-center bg-white/90 backdrop-blur-sm border border-blue-100 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-xl shadow-lg relative z-10 group-hover:scale-110 transition-transform duration-300">
                <FaPhoneAlt className="text-xl" />
              </div>
              <div className="ml-6 relative z-10">
                <p className="text-gray-600 mb-1 font-medium">Call to ask any question</p>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  +012 345 6789
                </h3>
              </div>
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>
            </div>
          </div>

          {/* Enhanced Button */}
          <button className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <span className="relative z-10">Request A Quote</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>

        {/* Enhanced Right Image */}
        <div className={`flex justify-center transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 transform scale-105"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-300">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="About Us - Professional IT Team"
                className="w-full h-auto transform group-hover:scale-110 transition-transform duration-700 filter group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
              <FaAward className="text-2xl text-blue-600" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full p-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
              <FaUsers className="text-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-blue-300/35 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-purple-300/30 rounded-full animate-pulse delay-700"></div>
      </div>
    </section>
  );
}
