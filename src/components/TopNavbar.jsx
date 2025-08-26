import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";

export default function TopNavbar() {
  return (
    <div className="bg-gradient-to-r from-[#0a2240] via-[#0d2a4f] to-[#0a2240] text-white text-sm px-4 py-3 flex flex-col md:flex-row items-center justify-between relative overflow-hidden shadow-lg">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-cyan-400 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      {/* Left Section */}
      <div className="flex flex-col md:flex-row md:space-x-8 space-y-3 md:space-y-0 items-center relative z-10">
        <div className="flex items-center space-x-3 group cursor-pointer hover:scale-105 transition-all duration-300 ease-out">
          <div className="p-1.5 rounded-full bg-blue-500/20 group-hover:bg-blue-400/30 transition-all duration-300">
            <FaMapMarkerAlt className="text-blue-300 group-hover:text-blue-200 transition-colors duration-300 drop-shadow-sm" />
          </div>
          <span className="group-hover:text-blue-200 transition-colors duration-300 font-medium">123 Street, New York, USA</span>
        </div>
        <div className="flex items-center space-x-3 group cursor-pointer hover:scale-105 transition-all duration-300 ease-out">
          <div className="p-1.5 rounded-full bg-blue-500/20 group-hover:bg-blue-400/30 transition-all duration-300">
            <FaPhoneAlt className="text-blue-300 group-hover:text-blue-200 transition-colors duration-300 drop-shadow-sm" />
          </div>
          <span className="group-hover:text-blue-200 transition-colors duration-300 font-medium">+91 9311170650</span>
        </div>
        <div className="flex items-center space-x-3 group cursor-pointer hover:scale-105 transition-all duration-300 ease-out">
          <div className="p-1.5 rounded-full bg-blue-500/20 group-hover:bg-blue-400/30 transition-all duration-300">
            <FaEnvelope className="text-blue-300 group-hover:text-blue-200 transition-colors duration-300 drop-shadow-sm" />
          </div>
          <a 
            href="mailto:info@sunlitesystems.com" 
            className="hover:text-blue-200 transition-colors duration-300 font-medium hover:underline decoration-blue-300 underline-offset-2"
          >
            info@sunlitesystems.com
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex space-x-3 mt-3 md:mt-0 relative z-10">
        <a 
          href="#" 
          className="p-2.5 rounded-full bg-white/10 hover:bg-blue-500 text-blue-300 hover:text-white transition-all duration-300 ease-out transform hover:scale-110 hover:rotate-6 shadow-lg hover:shadow-blue-500/25"
        >
          <FaTwitter className="text-sm" />
        </a>
        <a 
          href="#" 
          className="p-2.5 rounded-full bg-white/10 hover:bg-blue-600 text-blue-300 hover:text-white transition-all duration-300 ease-out transform hover:scale-110 hover:rotate-6 shadow-lg hover:shadow-blue-600/25"
        >
          <FaFacebookF className="text-sm" />
        </a>
        <a 
          href="#" 
          className="p-2.5 rounded-full bg-white/10 hover:bg-blue-700 text-blue-300 hover:text-white transition-all duration-300 ease-out transform hover:scale-110 hover:rotate-6 shadow-lg hover:shadow-blue-700/25"
        >
          <FaLinkedinIn className="text-sm" />
        </a>
        <a 
          href="#" 
          className="p-2.5 rounded-full bg-white/10 hover:bg-pink-500 text-blue-300 hover:text-white transition-all duration-300 ease-out transform hover:scale-110 hover:rotate-6 shadow-lg hover:shadow-pink-500/25"
        >
          <FaInstagram className="text-sm" />
        </a>
        <a 
          href="#" 
          className="p-2.5 rounded-full bg-white/10 hover:bg-red-500 text-blue-300 hover:text-white transition-all duration-300 ease-out transform hover:scale-110 hover:rotate-6 shadow-lg hover:shadow-red-500/25"
        >
          <FaYoutube className="text-sm" />
        </a>
      </div>

      {/* Subtle Border Animation */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
    </div>
  );
}
