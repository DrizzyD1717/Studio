"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { Code, Palette, Camera, ArrowUpRight } from "lucide-react";

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
}

const services: ServiceProps[] = [
  {
    title: "Web Development",
    description:
      "Building high-performance, SEO-optimized websites using Next.js, React, and WordPress.",
    icon: <Code className="text-brand-accent" size={28} />,
    tags: ["Next.js", "TypeScript", "CMS Integration"],
  },
  {
    title: "Brand Design",
    description:
      "Creating unique visual identities, logos, and style guides that tell your brand's story.",
    icon: <Palette className="text-brand-accent" size={28} />,
    tags: ["Logo Design", "Style Guides", "Typography"],
  },
  {
    title: "Photography",
    description:
      "Professional personal and event photography focusing on lighting, composition, and mood.",
    icon: <Camera className="text-brand-accent" size={28} />,
    tags: ["Event Shoots", "Portraits", "Editing"],
  },
];

const cardVariants: Variants = {
  offscreen: { opacity: 0, y: 30 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.4, duration: 0.8 },
  },
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-brand-black">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-brand-gray uppercase tracking-widest text-sm font-bold mb-4">
              My Expertise
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold leading-tight">
              Specialized services to <br />
              <span className="text-brand-accent">elevate</span> your project.
            </h3>
          </div>
          <p className="text-brand-gray max-w-sm">
            I combine technical precision with creative vision to deliver
            results that stand out.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative p-8 rounded-3xl border border-brand-border bg-gradient-to-b from-neutral-900/50 to-transparent hover:border-brand-accent/50 transition-colors duration-500"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-brand-black rounded-2xl border border-brand-border group-hover:border-brand-accent/30 transition-colors">
                  {service.icon}
                </div>
                <ArrowUpRight
                  className="text-brand-gray group-hover:text-brand-accent transition-colors"
                  size={20}
                />
              </div>

              <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
              <p className="text-brand-gray leading-relaxed mb-8">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 bg-brand-border rounded-full text-brand-gray"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
