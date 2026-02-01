"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, Category } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-6">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter italic mb-6">
              Our Work<span className="text-brand-accent">.</span>
            </h1>
            <p className="text-brand-gray text-lg">
              A selection of projects where technical precision meets creative
              vision.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-brand-border/20 rounded-full border border-brand-border backdrop-blur-md">
            {(
              ["All", "Development", "Design", "Photography"] as Category[]
            ).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  activeCategory === cat
                    ? "bg-brand-accent text-white shadow-xl shadow-brand-accent/20"
                    : "text-brand-gray hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* The Grid */}

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "circOut" }}
                className="group relative"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-brand-border bg-neutral-900 shadow-2xl">
                  <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center text-brand-gray/20 font-bold italic group-hover:scale-110 transition-transform duration-700">
                    {project.title} Preview
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-brand-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 backdrop-blur-sm">
                    <div className="flex justify-between items-center text-white">
                      <div>
                        <p className="text-brand-accent text-xs font-bold uppercase tracking-widest mb-2">
                          {project.category}
                        </p>
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                        <p className="text-brand-gray text-sm mt-1">
                          Client: {project.client}
                        </p>
                      </div>
                      <div className="h-12 w-12 rounded-full bg-brand-accent flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform duration-500">
                        <ArrowUpRight size={24} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioPage;
