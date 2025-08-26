import React from 'react';
import { Search, Lightbulb, Code, CheckCircle, ChevronRight } from 'lucide-react';

export default function WorkProcess() {
  const steps = [
    {
      icon: <Search size={28} />,
      title: "Research",
      desc: "Deep dive into market analysis, user needs, and competitive landscape to build solid foundations",
      color: "text-blue-600",
      bgGradient: "from-blue-50 to-blue-100",
      iconBg: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      icon: <Lightbulb size={28} />,
      title: "Concept",
      desc: "Transform insights into innovative concepts and strategic solutions that align with your vision",
      color: "text-purple-600",
      bgGradient: "from-purple-50 to-purple-100",
      iconBg: "bg-gradient-to-br from-purple-500 to-purple-600"
    },
    {
      icon: <Code size={28} />,
      title: "Development",
      desc: "Bring concepts to life with cutting-edge technology and meticulous attention to detail",
      color: "text-emerald-600",
      bgGradient: "from-emerald-50 to-emerald-100",
      iconBg: "bg-gradient-to-br from-emerald-500 to-emerald-600"
    },
    {
      icon: <CheckCircle size={28} />,
      title: "Finalization",
      desc: "Polish, test, and deliver exceptional results that exceed expectations and drive success",
      color: "text-orange-600",
      bgGradient: "from-orange-50 to-orange-100",
      iconBg: "bg-gradient-to-br from-orange-500 to-orange-600"
    },
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-200/10 to-purple-200/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-emerald-200/10 to-orange-200/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold uppercase tracking-wide text-sm mb-4">
            <div className="w-8 h-px bg-gradient-to-r from-blue-600 to-purple-600"></div>
            Work Process
            <div className="w-8 h-px bg-gradient-to-r from-purple-600 to-blue-600"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Step By Step Simple & Clean
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
              Working Process
            </span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Our proven methodology ensures every project delivers exceptional results through systematic execution
          </p>
        </div>

        {/* Process Steps */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 flex-wrap">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center group">
              {/* Step Card */}
              <div className="relative">
                <div className={`
                  bg-gradient-to-br ${step.bgGradient} 
                  p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl 
                  transition-all duration-500 ease-out
                  transform hover:-translate-y-2 hover:scale-105
                  border border-white/50 backdrop-blur-sm
                  w-64 sm:w-72 md:w-64 lg:w-72 
                  h-auto min-h-[280px] flex flex-col items-center text-center
                  relative overflow-hidden
                  group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-gray-50
                `}>
                  {/* Glow effect */}
                  <div className={`
                    absolute inset-0 bg-gradient-to-br ${step.bgGradient} opacity-0 
                    group-hover:opacity-20 transition-opacity duration-500 rounded-2xl
                  `}></div>
                  
                  {/* Step number */}
                  <div className="absolute -top-4 -right-4 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-gray-50">
                    <span className={`font-bold text-base md:text-lg ${step.color}`}>{index + 1}</span>
                  </div>
                  
                  {/* Icon */}
                  <div className={`
                    ${step.iconBg} text-white p-5 md:p-6 rounded-xl shadow-lg 
                    mb-4 md:mb-6 transform transition-all duration-500
                    group-hover:scale-110 group-hover:rotate-3
                    group-hover:shadow-2xl
                  `}>
                    {step.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className={`text-lg md:text-2xl font-bold ${step.color} mb-2 md:mb-4 transition-colors duration-300`}>
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {step.desc}
                  </p>
                  
                  {/* Hover indicator */}
                  <div className={`
                    absolute bottom-0 left-0 right-0 h-1 
                    bg-gradient-to-r ${step.iconBg} 
                    transform scale-x-0 group-hover:scale-x-100 
                    transition-transform duration-500 origin-left
                  `}></div>
                </div>
              </div>

              {/* Animated Arrow */}
              {index < steps.length - 1 && (
                <div className="flex items-center justify-center lg:mx-6 my-6 lg:my-0">
                  <div className="relative">
                    {/* Base arrow */}
                    <div className="text-gray-300 transform transition-all duration-500 group-hover:text-blue-500 group-hover:scale-125">
                      <ChevronRight size={28} className="lg:rotate-0 rotate-90" />
                    </div>
                    
                    {/* Animated arrow */}
                    <div className="absolute inset-0 text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-1">
                      <ChevronRight size={28} className="lg:rotate-0 rotate-90" />
                    </div>
                    
                    {/* Pulse effect */}
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 md:mt-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 cursor-pointer">
            <span className="font-semibold text-sm md:text-base">Start Your Project</span>
            <ChevronRight size={18} className="transform transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </section>
  );
}
