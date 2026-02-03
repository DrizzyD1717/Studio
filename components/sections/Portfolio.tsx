"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";

// Types
type Category = "All" | "Development" | "Design" | "Photography";

interface Project {
  id: number;
  title: string;
  category: Category;
  image: string; // Replace with your actual image paths
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Development",
    image: "/dev-1.jpg",
  },
  {
    id: 2,
    title: "Modern Brand Identity",
    category: "Design",
    image: "/design-1.jpg",
  },
  {
    id: 3,
    title: "Urban Street Shoot",
    category: "Photography",
    image: "/photo-1.jpg",
  },
  {
    id: 4,
    title: "SaaS Dashboard UI",
    category: "Development",
    image: "/dev-2.jpg",
  },
  {
    id: 5,
    title: "Minimalist Logo Set",
    category: "Design",
    image: "/design-2.jpg",
  },
  {
    id: 6,
    title: "Wedding Highlights",
    category: "Photography",
    image: "/photo-2.jpg",
  },
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<Category>("All");

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
  };

  return (
    <section id="portfolio" className="py-24 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
            Featured Work
          </h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 p-2 bg-brand-border/30 rounded-full backdrop-blur-sm">
            {(
              ["All", "Development", "Design", "Photography"] as Category[]
            ).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? "bg-brand-accent text-white shadow-lg shadow-brand-accent/20"
                    : "text-brand-gray hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* The Animated Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="group relative aspect-square overflow-hidden rounded-3xl bg-brand-border/50 border border-brand-border"
              >
                {/* Image Placeholder - Replace with <Image /> from next/image later */}
                <div className="cursor-pointer absolute inset-0 bg-neutral-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                  <span className="text-brand-gray/30 font-bold uppercase">
                    {project.category}
                  </span>
                </div>

                {/* Overlay */}
                <Link href={`/services/${project.category.toLowerCase()}`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <p className="text-brand-accent text-sm font-bold uppercase tracking-widest mb-2">
                      {project.category}
                    </p>
                    <h4 className="text-2xl font-bold text-white">
                      {project.title}
                    </h4>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
