import React from "react";

const team = [
  {
    id: 1,
    name: "Emma Johnson",
    designation: "Lead Designer",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Liam Chen",
    designation: "Full Stack Developer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Olivia Brown",
    designation: "Project Manager",
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

export default function TeamMembers() {
  return (
    <section className="py-16 bg-white text-center">
      {/* Heading */}
      <h3 className="text-sky-500 uppercase font-semibold tracking-wide">
        Team Members
      </h3>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
        Professional Stuffs Ready to <br /> Help Your Business
      </h2>
      <div className="w-16 h-1 bg-sky-500 mx-auto mt-3 rounded"></div>

      {/* Members */}
      <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {team.map((member) => (
          <div
            key={member.id}
            className="bg-sky-50 rounded-lg overflow-hidden shadow hover:shadow-xl transition"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-80 object-cover"
            />
            <div className="p-4 bg-sky-50">
              <h4 className="text-sky-600 font-semibold text-lg">
                {member.name}
              </h4>
              <p className="text-gray-500 text-sm">{member.designation}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
