import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Ethan Johansson",
    profession: "CEO, TechNova Inc.",
    text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Alexander Rossi",
    profession: "Marketing Director, BrightEdge",
    text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Sophia Müller",
    profession: "Product Manager, InnovateX",
    text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white text-center">
      {/* Heading */}
      <h3 className="text-sky-500 uppercase font-semibold tracking-wide">
        Testimonial
      </h3>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
        What Our Clients Say About <br /> Our Digital Services
      </h2>
      <div className="w-16 h-1 bg-sky-500 mx-auto mt-3 rounded"></div>

      {/* Cards */}
      <div className="mt-12 flex flex-col md:flex-row justify-center gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, index) => (
          <div
            key={t.id}
            className={`p-6 rounded-lg shadow-md border ${
              index === 1 ? "bg-white shadow-xl" : "bg-sky-50"
            } w-full md:w-1/3`}
          >
            <div className="flex items-center gap-4 border-b pb-4 mb-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div className="text-left">
                <h4 className="text-sky-600 font-semibold">{t.name}</h4>
                <p className="text-gray-500 text-sm">{t.profession}</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">{t.text}</p>
          </div>
        ))}
      </div>

      {/* Slider Dots */}
      <div className="flex justify-center mt-8 gap-2">
        <span className="w-3 h-3 rounded-full bg-sky-500"></span>
        <span className="w-3 h-3 rounded-full bg-gray-300"></span>
        <span className="w-3 h-3 rounded-full bg-gray-300"></span>
        <span className="w-3 h-3 rounded-full bg-gray-300"></span>
      </div>
    </section>
  );
}
