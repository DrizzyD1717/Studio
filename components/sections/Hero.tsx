"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

const Hero = () => {
  // Animation variants for cleaner code
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Time between each child animation
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full overflow-hidden flex flex-col items-center justify-center py-20 md:py-32">
      {/* Background Animated Glows */}
      <div className="absolute top-0 -z-10 h-full w-full">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-brand-accent/20 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-indigo-900/20 blur-[120px]"
        />
      </div>

      <motion.div
        className="container px-4 md:px-6 flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Small Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-block rounded-full border border-brand-border bg-brand-black px-4 py-1.5 text-xs font-medium text-brand-gray mb-8"
        >
          <span className="text-brand-accent">●</span> Now accepting projects
          for 2026
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl max-w-5xl leading-[1.1]"
        >
          Crafting Digital <br />
          <span className="text-brand-accent">Experiences</span> & Visuals
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="mt-8 max-w-[650px] text-brand-gray text-lg md:text-xl leading-relaxed"
        >
          A multi-disciplinary studio specializing in high-performance Web
          Development, strategic Branding, and professional Photography.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 mt-12"
        >
          <button className="h-14 px-10 rounded-full bg-brand-white text-brand-black font-bold hover:scale-105 active:scale-95 transition-all duration-300">
            Start a Project
          </button>
          <button className="h-14 px-10 rounded-full border border-brand-border bg-transparent text-brand-white font-bold hover:bg-brand-white/5 hover:border-brand-gray transition-all duration-300">
            View Portfolio
          </button>
        </motion.div>

        {/* Visual Preview / Showcase Placeholder */}
        <motion.div
          variants={itemVariants}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-20 w-full max-w-6xl px-4"
        >
          <div className="relative aspect-video rounded-2xl border border-brand-border bg-neutral-900/50 overflow-hidden shadow-[0_0_50px_-12px_rgba(99,102,241,0.2)]">
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent z-10" />
            <div className="flex items-center justify-center h-full text-brand-gray/40 font-mono text-sm tracking-widest uppercase">
              Featured Work / Showreel
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
