"use client";
import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const reviews = [
  {
    name: "Alexander Chen",
    role: "Founder, Zenith Tech",
    body: "Auroo didn't just build a website; they built a digital identity. The synergy between their dev and design teams is unmatched.",
  },
  {
    name: "Sarah Jenkins",
    role: "Marketing Director, Aura",
    body: "The photography captured our brand essence perfectly. Combined with the fast Next.js site, our conversion rate doubled.",
  },
  {
    name: "Marcus Thorne",
    role: "CEO, Thorne & Co",
    body: "Finally, a studio that understands both code and aesthetics. They delivered high-end brand guidelines and a robust platform.",
  },
  {
    name: "Elena Rodriguez",
    role: "Creative Lead, Pulse",
    body: "Working with the Auroo collective was seamless. They are experts in their specific fields but work as a single unit.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-brand-black overflow-hidden border-t border-brand-border">
      <div className="container mx-auto px-4 mb-16 text-center">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 italic">
          Trusted by <span className="text-brand-accent">Visionaries.</span>
        </h2>
        <p className="text-brand-gray max-w-xl mx-auto">
          Hear from the brands and leaders we have helped elevate through code,
          design, and imagery.
        </p>
      </div>

      {/* Infinite Horizontal Scroll */}
      <div className="flex overflow-hidden select-none gap-6 group">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 30,
            repeat: Infinity,
          }}
          className="flex gap-6 whitespace-nowrap py-4 px-6 hover:[animation-play-state:paused]"
        >
          {/* We double the array to create the infinite loop effect */}
          {[...reviews, ...reviews].map((review, i) => (
            <div
              key={i}
              className="w-[350px] md:w-[450px] shrink-0 bg-brand-border/10 border border-brand-border p-8 rounded-[2.5rem] flex flex-col justify-between hover:border-brand-accent transition-colors group/card"
            >
              <Quote
                className="text-brand-accent mb-6 group-hover/card:scale-110 transition-transform"
                size={32}
              />
              <p className="text-lg text-brand-white leading-relaxed mb-8 whitespace-normal italic font-medium">
                "{review.body}"
              </p>
              <div>
                <h4 className="font-bold text-white">{review.name}</h4>
                <p className="text-brand-gray text-sm">{review.role}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
