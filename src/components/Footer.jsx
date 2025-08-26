import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
      
      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-xl font-bold text-white">S</span>
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Startup
                </h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-8">
                Lorem diam sit erat dolor elitr et, diam lorem justo amet clita stet eos sit. 
                Elitr dolor duo lorem, elitr clita ipsum sea.
              </p>
              
              {/* Newsletter Signup */}
              <div className="space-y-3">
                <p className="text-sm font-medium text-cyan-400">Stay Updated</p>
                <div className="flex bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden border border-white/20 focus-within:border-cyan-400 transition-all duration-300">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-transparent px-4 py-3 text-white placeholder-gray-400 focus:outline-none text-sm"
                  />
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-6 py-3 transition-all duration-300 group">
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>

            {/* Get In Touch */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-cyan-400">Get In Touch</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3 group cursor-pointer">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors duration-300">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                  </div>
                  <p className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">
                    123 Street, New York, USA
                  </p>
                </div>
                
                <div className="flex items-start gap-3 group cursor-pointer">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors duration-300">
                    <Mail className="w-4 h-4 text-cyan-400" />
                  </div>
                  <p className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">
                    info@sunlitesystems.com
                  </p>
                </div>
                
                <div className="flex items-start gap-3 group cursor-pointer">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors duration-300">
                    <Phone className="w-4 h-4 text-cyan-400" />
                  </div>
                  <p className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">
                    +012 345 6789
                  </p>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="mt-8">
                <p className="text-sm font-medium text-cyan-400 mb-4">Follow Us</p>
                <div className="flex gap-3">
                  {[
                    { icon: Facebook, label: 'Facebook' },
                    { icon: Twitter, label: 'Twitter' },
                    { icon: Instagram, label: 'Instagram' },
                    { icon: Linkedin, label: 'LinkedIn' }
                  ].map(({ icon: Icon, label }) => (
                    <a
                      key={label}
                      href="#"
                      className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500 hover:to-blue-600 border border-cyan-500/30 hover:border-transparent rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25"
                      aria-label={label}
                    >
                      <Icon className="w-4 h-4 text-cyan-400 group-hover:text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-cyan-400">Quick Links</h4>
              <ul className="space-y-3">
                {['Home', 'About Us', 'Our Services', 'Meet The Team', 'Latest Blog', 'Contact Us'].map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-all duration-300 group text-sm hover:translate-x-2"
                    >
                      <ArrowRight className="w-3 h-3 group-hover:text-cyan-400 transition-colors duration-300" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Links */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-cyan-400">Popular Links</h4>
              <ul className="space-y-3">
                {['Home', 'About Us', 'Our Services', 'Meet The Team', 'Latest Blog', 'Contact Us'].map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-all duration-300 group text-sm hover:translate-x-2"
                    >
                      <ArrowRight className="w-3 h-3 group-hover:text-cyan-400 transition-colors duration-300" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-gray-400">
                © 2025 <span className="text-cyan-400 font-medium">Sunlite System Private Limited</span>. All Rights Reserved.
              </div>
              <div className="text-sm text-gray-400">
                Designed with ❤️ by <span className="text-cyan-400 font-medium hover:text-cyan-300 transition-colors duration-300 cursor-pointer">Deepak Tyagi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}