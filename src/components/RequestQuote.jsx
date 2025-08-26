import React, { useState } from "react";
import { Phone, Clock, Headphones, Send, CheckCircle, ArrowRight } from "lucide-react";

export default function RequestQuote() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #06b6d4 2px, transparent 2px)`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 px-4 py-2 rounded-full mb-4">
                <Send className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-700 uppercase tracking-wide">
                  Request a Quote
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-cyan-700 bg-clip-text text-transparent leading-tight">
                Need A Free Quote? <br />
                <span className="text-3xl md:text-4xl">
                  Please Feel Free to Contact Us
                </span>
              </h2>

              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mt-6 mb-8 rounded-full"></div>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-4 group">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    Reply within 24 hours
                  </p>
                  <p className="text-sm text-gray-600">
                    Quick response guaranteed
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Headphones className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    24/7 telephone support
                  </p>
                  <p className="text-sm text-gray-600">Always here to help</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
              <p className="text-gray-700 leading-relaxed">
                Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd
                ipsum. Dolor ea et dolore et at sea ea at dolor. We're committed
                to providing exceptional service and delivering results that
                exceed your expectations.
              </p>
            </div>

            {/* Phone Number */}
            <div className="flex items-center gap-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer">
              <div className="flex items-center justify-center w-14 h-14 bg-white/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-7 h-7" />
              </div>
              <div>
                <p className="text-sm opacity-90">Call us directly</p>
                <p className="text-2xl font-bold">+012 345 6789</p>
              </div>
              <ArrowRight className="w-6 h-6 ml-auto group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </div>

          {/* Form */}
          <div className="relative">
            {/* Form Container */}
            <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `radial-gradient(circle at 30% 30%, white 1px, transparent 1px)`,
                    backgroundSize: "30px 30px",
                  }}
                ></div>
              </div>

              {/* Form Header */}
              <div className="text-center mb-8 relative">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Get Your Free Quote
                </h3>
                <p className="text-blue-100">
                  Fill out the form and we'll get back to you soon
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 relative">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-4 rounded-xl bg-white/90 backdrop-blur-sm border border-white/20 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white transition-all duration-300 group-hover:bg-white"
                      required
                    />
                  </div>

                  <div className="group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-4 rounded-xl bg-white/90 backdrop-blur-sm border border-white/20 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white transition-all duration-300 group-hover:bg-white"
                      required
                    />
                  </div>
                </div>

                <div className="group">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full p-4 rounded-xl bg-white/90 backdrop-blur-sm border border-white/20 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white transition-all duration-300 group-hover:bg-white"
                    required
                  >
                    <option value="">Select A Service</option>
                    <option value="web-design">Web Design</option>
                    <option value="development">Development</option>
                    <option value="seo">SEO Optimization</option>
                    <option value="marketing">Digital Marketing</option>
                    <option value="consulting">Consulting</option>
                  </select>
                </div>

                <div className="group">
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full p-4 rounded-xl bg-white/90 backdrop-blur-sm border border-white/20 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white transition-all duration-300 resize-none group-hover:bg-white"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-4 px-6 rounded-xl font-semibold hover:from-gray-800 hover:to-gray-700 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl flex items-center justify-center gap-3 group"
                >
                  <span>Request A Quote</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                {/* Trust Indicators */}
                <div className="flex items-center justify-center gap-6 pt-4 text-blue-100 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Free consultation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>No obligation</span>
                  </div>
                </div>
              </form>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
