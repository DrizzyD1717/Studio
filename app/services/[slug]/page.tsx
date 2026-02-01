"use client";
import React from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const serviceData = {
  development: {
    title: "Web Development",
    subtitle: "Scalable. Fast. Secure.",
    description:
      "We build custom digital solutions that don't just look good—they perform. From high-conversion landing pages to complex web applications.",
    process: [
      "Discovery Call",
      "System Architecture",
      "Development Sprint",
      "QA & Launch",
    ],
    benefits: [
      "SEO & Performance optimized",
      "Mobile-first responsive design",
      "Clean, maintainable codebase",
    ],
  },
  design: {
    title: "Brand Design",
    subtitle: "Visuals that tell stories.",
    description:
      "Your brand is more than a logo. It's the emotional connection your customers have with your business. We craft identities that last.",
    process: [
      "Market Research",
      "Concept Moodboards",
      "Visual Identity",
      "Brand Guidelines",
    ],
    benefits: [
      "Unique, non-templated designs",
      "Strategic color psychology",
      "Scalable vector assets",
    ],
  },
  photography: {
    title: "Photography",
    subtitle: "Capturing the essence.",
    description:
      "Specializing in event and personal photography where lighting and mood tell the story that words can't capture.",
    process: [
      "Consultation",
      "On-site Shoot",
      "Selection Gallery",
      "Professional Retouching",
    ],
    benefits: [
      "High-resolution delivery",
      "Quick turnaround times",
      "Artistic direction included",
    ],
  },
};

const allProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "development",
    image: "/dev-1.jpg",
  },
  {
    id: 2,
    title: "Modern Brand Identity",
    category: "design",
    image: "/design-1.jpg",
  },
  {
    id: 3,
    title: "Urban Street Shoot",
    category: "photography",
    image: "/photo-1.jpg",
  },
  {
    id: 4,
    title: "SaaS Dashboard UI",
    category: "development",
    image: "/dev-2.jpg",
  },
];

const ServicePage = () => {
  const params = useParams();
  const slug = params.slug as keyof typeof serviceData;
  const content = serviceData[slug];

  if (!content)
    return (
      <div className="pt-32 text-center font-mono">
        404 // Service Not Found
      </div>
    );

  const relatedProjects = allProjects.filter((p) => p.category === slug);

  return (
    <div className="min-h-screen pt-24">
      {/* 1. Hero Section with Gradient Mesh */}
      <section className="relative py-20 overflow-hidden border-b border-brand-border">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-full h-full opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-accent/40 via-transparent to-transparent blur-3xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-brand-accent font-bold uppercase tracking-[0.3em] text-xs mb-4 block">
              {content.subtitle}
            </span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 italic">
              {content.title}
            </h1>
            <p className="text-xl text-brand-gray leading-relaxed">
              {content.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Process & Benefits Grid */}
      <section className="py-24 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left: Process Timeline */}
          <div>
            <h2 className="text-3xl font-bold mb-12">The Process</h2>
            <div className="space-y-8">
              {content.process.map((step, i) => (
                <div key={i} className="flex gap-6 items-center group">
                  <span className="text-4xl font-black text-brand-border group-hover:text-brand-accent transition-colors duration-300">
                    0{i + 1}
                  </span>
                  <div className="h-[1px] flex-1 bg-brand-border" />
                  <h3 className="text-xl font-medium">{step}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Why This Service? */}
          <div className="bg-brand-border/20 rounded-[3rem] p-10 md:p-16 border border-brand-border">
            <h2 className="text-3xl font-bold mb-8">What You Get</h2>
            <ul className="space-y-6">
              {content.benefits.map((benefit, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <CheckCircle2
                    className="text-brand-accent shrink-0"
                    size={24}
                  />
                  <span className="text-lg text-brand-gray">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 2.5 Featured Case Studies */}
      <section className="py-24 bg-neutral-900/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Related Work</h2>
              <p className="text-brand-gray">
                Recent projects delivered in {content.title}.
              </p>
            </div>
            <Link
              href="/portfolio"
              className="text-brand-accent hover:underline font-medium"
            >
              View all projects
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProjects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-brand-border border border-brand-border">
                  {/* Replace with <Image /> tag later */}
                  <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                    <span className="text-brand-gray/20 font-bold uppercase tracking-widest italic">
                      Project Preview
                    </span>
                  </div>
                </div>
                <h3 className="mt-6 text-xl font-bold">{project.title}</h3>
                <p className="text-brand-gray text-sm uppercase tracking-tighter mt-1">
                  {project.category}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. High-Impact CTA Section */}
      <section className="container mx-auto px-4 md:px-6 pb-24">
        <div className="relative rounded-[3rem] overflow-hidden bg-brand-accent p-12 md:p-24 text-center">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-brand-black mb-8 tracking-tighter">
              Ready to elevate your <br /> {content.title}?
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-brand-black text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform"
            >
              Get Started <ArrowRight size={20} />
            </Link>
          </div>
          {/* Decorative background shape for CTA */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20" />
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
