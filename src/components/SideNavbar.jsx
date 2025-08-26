import React, { useState } from "react";
import { Link } from "react-scroll";
import { Home, Star, Briefcase, Workflow, Users, Phone, ChevronLeft, ChevronRight } from "lucide-react";

export default function SideNavbar() {
  const [isOpen, setIsOpen] = useState(true);

  const menus = [
    { id: "whyChooseUs", label: "Why Choose Us", icon: <Star size={18} /> },
    { id: "services", label: "Services", icon: <Briefcase size={18} /> },
    { id: "process", label: "Work Process", icon: <Workflow size={18} /> },
    { id: "partners", label: "Partners", icon: <Users size={18} /> },
    { id: "footer", label: "Footer", icon: <Phone size={18} /> },
  ];

  return (
    <div
      className={`fixed right-0 top-1/2 -translate-y-1/2 z-50 transition-all duration-500 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-[85%]"
      }`}
    >
      {/* Sidebar box */}
      <div className="relative flex flex-col gap-4 bg-gradient-to-br from-blue-200/90 via-purple-500/90 to-pink-600/90 backdrop-blur-md px-4 py-6 rounded-l-2xl shadow-2xl border border-white/20">
        {/* Toggle button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute -left-5 top-1/2 -translate-y-1/2 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full p-2 shadow-lg hover:scale-110 transition"
        >
          {isOpen ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>

        {/* Menu items */}
        {menus.map((item) => (
          <Link
            key={item.id}
            to={item.id}
            smooth={true}
            duration={500}
            offset={-50}
            activeClass="active-menu"
            spy={true}
            className={`group cursor-pointer flex items-center gap-2 text-white/80 hover:text-white font-medium transition-all duration-300 hover:translate-x-1 ${
              !isOpen ? "justify-center" : ""
            }`}
          >
            <span className="p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition">
              {item.icon}
            </span>
            {isOpen && <span className="whitespace-nowrap">{item.label}</span>}
          </Link>
        ))}
      </div>
    </div>
  );
}
