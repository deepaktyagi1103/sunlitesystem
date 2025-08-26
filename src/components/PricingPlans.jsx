import React from "react";
import { Check, X, Star, Zap, Crown, ArrowRight } from "lucide-react";

export default function PricingPlans() {
  const plans = [
    {
      name: "Basic Plan",
      subtitle: "For Small Size Business",
      price: "49.00",
      icon: Star,
      features: [
        { text: "HTML5 & CSS3", available: true },
        { text: "Bootstrap v5", available: true },
        { text: "Responsive Layout", available: false },
        { text: "Cross-browser Support", available: false },
      ],
      highlight: false,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      name: "Standard Plan",
      subtitle: "For Medium Size Business",
      price: "99.00",
      icon: Zap,
      features: [
        { text: "HTML5 & CSS3", available: true },
        { text: "Bootstrap v5", available: true },
        { text: "Responsive Layout", available: true },
        { text: "Cross-browser Support", available: false },
      ],
      highlight: true,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      popular: true,
    },
    {
      name: "Advanced Plan",
      subtitle: "For Large Size Business",
      price: "149.00",
      icon: Crown,
      features: [
        { text: "HTML5 & CSS3", available: true },
        { text: "Bootstrap v5", available: true },
        { text: "Responsive Layout", available: true },
        { text: "Cross-browser Support", available: true },
      ],
      highlight: false,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #06b6d4 2px, transparent 2px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 px-4 py-2 rounded-full mb-4">
            <Star className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700 uppercase tracking-wide">Pricing Plans</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-cyan-700 bg-clip-text text-transparent mb-4 leading-tight">
            We are Offering Competitive <br />
            Prices for Our Clients
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-6 mb-8 rounded-full"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Choose the perfect plan that fits your business needs and budget
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={index}
                className={`relative group ${
                  plan.highlight 
                    ? 'transform scale-105 z-10' 
                    : 'hover:scale-105'
                } transition-all duration-500`}
                style={{
                  animationDelay: `${index * 200}ms`,
                  animation: 'fadeInUp 0.8s ease-out forwards'
                }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Card */}
                <div className={`relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                  plan.highlight ? 'ring-2 ring-purple-200' : ''
                }`}>
                  
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${plan.bgGradient} opacity-30 rounded-3xl`}></div>
                  
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${plan.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300 blur-xl`}></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${plan.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className={`text-2xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent mb-2`}>
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-6">{plan.subtitle}</p>

                    {/* Price */}
                    <div className="mb-8">
                      <div className="flex items-baseline gap-1">
                        <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                        <span className="text-lg font-medium text-gray-500">/Month</span>
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center justify-between text-gray-700">
                          <span className="flex-1">{feature.text}</span>
                          <div className={`flex items-center justify-center w-6 h-6 rounded-full ${
                            feature.available 
                              ? `bg-gradient-to-r ${plan.gradient}` 
                              : 'bg-red-100'
                          }`}>
                            {feature.available ? (
                              <Check className="w-3 h-3 text-white" />
                            ) : (
                              <X className="w-3 h-3 text-red-500" />
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>

                    {/* Button */}
                    <button className={`w-full bg-gradient-to-r ${plan.gradient} text-white py-4 px-6 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-3 group/btn`}>
                      <span>Order Now</span>
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-xl"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-lg"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Need a custom solution? We're here to help you find the perfect plan.
          </p>
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white px-8 py-4 rounded-2xl font-semibold hover:from-gray-800 hover:to-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer group">
            <span>Contact Sales Team</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}