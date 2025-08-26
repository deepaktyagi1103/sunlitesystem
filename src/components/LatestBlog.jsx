import React from "react";

const blogs = [
  {
    id: 1,
    title: "How to build a website",
    author: "John Doe",
    date: "26 Aug, 2025",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "How to Contact Us",
    author: "John Doe",
    date: "22 Aug, 2025",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "How to Contribute to Open Source",
    author: "John Doe",
    date: "16 June, 2025",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

export default function LatestBlog() {
  return (
    <section className="py-16 bg-white text-center">
      <h3 className="text-sky-500 uppercase font-semibold tracking-wide">
        Latest Blog
      </h3>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
        Read The Latest Articles from <br /> Our Blog Post
      </h2>
      <div className="w-16 h-1 bg-sky-500 mx-auto mt-3 rounded"></div>

      <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-sky-50 rounded-lg overflow-hidden">
            <div className="relative">
              <img src={blog.image} alt={blog.title} className="w-full h-56 object-cover" />
              <span className="absolute top-3 left-3 bg-sky-600 text-white text-sm px-3 py-1 rounded">
                {blog.category}
              </span>
            </div>
            <div className="p-6 text-left">
              <div className="flex items-center text-gray-500 text-sm mb-3 space-x-4">
                <span>👤 {blog.author}</span>
                <span>📅 {blog.date}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                {blog.title}
              </h3>
              <p className="text-gray-600 mb-4">
                Dolor et eos labore stet justo sed est sed sed sed dolor stet amet
              </p>
              <a href="#" className="text-sky-600 font-semibold hover:underline">
                READ MORE →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
