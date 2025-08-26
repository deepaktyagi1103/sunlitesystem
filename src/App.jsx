import { useState } from "react";

import TopNavbar from "./components/TopNavbar";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import WhyChooseUs from "./components/WhyChooseUs";
import OurServices from "./components/OurServices";
import WorkProcess from "./components/WorkProcess";
import "./App.css";
import PricingPlans from "./components/PricingPlans";
import Testimonials from "./components/Testimonials";
import RequestQuote from "./components/RequestQuote";
import TeamMembers from "./components/TeamMembers";
import LatestBlog from "./components/LatestBlog";
import Partners from "./components/Partners";
import Footer from "./components/Footer";
import SideNavbar from "./components/SideNavbar";

function App() {
  return (
    <>
      <TopNavbar />
      {/* Hero Section - Full Screen */}
      <section id="home" className="min-h-screen">
        <HeroSection />
      </section>

      {/* Fixed Sidebar */}
      <SideNavbar />

      {/* About Section */}
      <section id="about" className="py-20 px-6 md:px-12 bg-white">
        <AboutUs />
      </section>

      {/* Why Choose Us */}
      <section id="whyChooseUs" className="py-20 px-6 md:px-12 bg-gray-50">
        <WhyChooseUs />
      </section>

      {/* Our Services */}
      <section id="services" className="py-20 px-6 md:px-12 bg-white">
        <OurServices />
      </section>

      {/* Work Process */}
      <section id="process" className="py-20 px-6 md:px-12 bg-gray-50">
        <WorkProcess />
      </section>

      {/* Pricing Plans */}
      <section id="pricing" className="py-20 px-6 md:px-12 bg-white">
        <PricingPlans />
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6 md:px-12 bg-gray-50">
        <Testimonials />
      </section>

      {/* Request Quote */}
      <section id="quote" className="py-20 px-6 md:px-12 bg-white">
        <RequestQuote />
      </section>

      {/* Team Members */}
      <section id="team" className="py-20 px-6 md:px-12 bg-gray-50">
        <TeamMembers />
      </section>

      {/* Latest Blog */}
      <section id="blog" className="py-20 px-6 md:px-12 bg-white">
        <LatestBlog />
      </section>

      {/* Partners */}
      <section id="partners" className="py-20 px-6 md:px-12 bg-gray-50">
        <Partners />
      </section>

      {/* Footer */}
      <section id="footer" className="py-10 px-6 md:px-12 bg-gray-900 text-white">
        <Footer />
      </section>
    </>
  );
}

export default App;
