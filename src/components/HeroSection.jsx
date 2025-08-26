import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from "react-scroll";

const professionalImages = [
  'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
  'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
  'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
  'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
  'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080'
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const nextImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev + 1) % professionalImages.length);
      setIsTransitioning(false);
    }, 300);
  };

  const prevImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prev) => 
        prev === 0 ? professionalImages.length - 1 : prev - 1
      );
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <section
      className="relative h-[75vh] flex flex-col justify-center items-center text-center text-white bg-cover bg-center transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url('${professionalImages[currentImageIndex]}')`,
      }}
    >
      {/* Overlay with gradient */}
      <div className={`absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70 transition-opacity duration-1000 ${isTransitioning ? 'opacity-30' : 'opacity-100'}`}></div>

      {/* Left Arrow */}
      <button
        onClick={prevImage}
        disabled={isTransitioning}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 
                   bg-white/10 backdrop-blur-sm border border-white/20 
                   rounded-full p-3 text-white hover:bg-white/20 
                   transition-all duration-300 hover:scale-110 
                   disabled:opacity-50 disabled:cursor-not-allowed
                   group"
        aria-label="Previous image"
      >
        <ChevronLeft 
          size={24} 
          className="transition-transform group-hover:-translate-x-1" 
        />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextImage}
        disabled={isTransitioning}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 
                   bg-white/10 backdrop-blur-sm border border-white/20 
                   rounded-full p-3 text-white hover:bg-white/20 
                   transition-all duration-300 hover:scale-110 
                   disabled:opacity-50 disabled:cursor-not-allowed
                   group"
        aria-label="Next image"
      >
        <ChevronRight 
          size={24} 
          className="transition-transform group-hover:translate-x-1" 
        />
      </button>

      {/* Image Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {professionalImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentImageIndex(index);
                  setIsTransitioning(false);
                }, 300);
              }
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? 'bg-white scale-125'
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className={`relative z-10 max-w-3xl px-4 transition-all duration-700 ${isTransitioning ? 'opacity-70 transform scale-95' : 'opacity-100 transform scale-100'}`}>
        <p className="uppercase tracking-widest text-sm font-medium text-blue-200 mb-4 animate-fade-in">
          Creative & Innovative
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 animate-slide-up">
          Creative & Innovative <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Digital Solution
          </span>
        </h1>

        {/* Buttons */}
        <div className="mt-6 flex justify-center space-x-4 animate-slide-up">
                      <Link
                to="quote"  
                smooth={true}
                duration={500}
                offset={-50}
                className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 rounded-lg font-semibold 
                          hover:from-blue-700 hover:to-blue-800 transition-all duration-300 
                          transform hover:scale-105 hover:shadow-2xl
                          border border-blue-500/50 cursor-pointer"
              >
          <button>
            Free Quote
          </button></Link>
                      <Link
                to="footer"        
                smooth={true}
                duration={500}
                offset={-50}
                className="border border-white/30 px-8 py-4 rounded-lg font-semibold 
                          hover:bg-white hover:text-gray-900 transition-all duration-300 
                          transform hover:scale-105 backdrop-blur-sm bg-white/5 cursor-pointer"
              >
          <button >
            Contact Us
          </button></Link>
        </div>
      </div>

      {/* Stats Section - Enhanced Design */}
      <div className="absolute bottom-[-80px] left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex bg-white shadow-2xl rounded-2xl overflow-hidden backdrop-blur-sm border border-blue-100">
          {[
            { label: "Happy Clients", value: 12345, icon: "😊" },
            { label: "Projects Done", value: 12345, icon: "✅" },
            { label: "Win Awards", value: 12345, icon: "🏆" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center px-12 py-8 
                         bg-gradient-to-br from-blue-300 to-blue-700 text-white 
                         border-r last:border-r-0 border-blue-500/30 
                         transition-all duration-300 hover:scale-105 
                         hover:shadow-xl group relative overflow-hidden
                         hover:from-blue-700 hover:to-blue-800"
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="text-3xl mb-3 relative z-10 transition-transform duration-300 group-hover:scale-110 filter drop-shadow-sm">
                {item.icon}
              </span>
              <h2 className="text-4xl font-bold mb-2 relative z-10 text-white drop-shadow-sm">
                <CountUp end={item.value} duration={3} separator="," />
              </h2>
              <p className="text-sm font-medium text-blue-100 relative z-10 tracking-wide">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-white/25 rounded-full animate-pulse delay-500"></div>
      </div>
    </section>
  );
}