"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

const shimmer: Variants = {
  initial: { x: "-100%" },
  animate: {
    x: "100%",
    transition: {
      repeat: Infinity,
      duration: 1.5,
      ease: "linear",
    },
  },
};

const LoadingSkeleton = () => {
  return (
    <div className="min-h-screen pt-24 bg-brand-black overflow-hidden">
      {/* 1. Hero Skeleton */}
      <section className="py-20 container mx-auto px-4 md:px-6 border-b border-brand-border/50">
        <div className="max-w-3xl space-y-6">
          {/* Subtitle */}
          <div className="relative h-4 w-32 bg-brand-border/30 rounded-full overflow-hidden">
            <motion.div
              variants={shimmer}
              initial="initial"
              animate="animate"
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            />
          </div>
          {/* Title */}
          <div className="relative h-16 md:h-24 w-full bg-brand-border/30 rounded-2xl overflow-hidden">
            <motion.div
              variants={shimmer}
              initial="initial"
              animate="animate"
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            />
          </div>
          {/* Description */}
          <div className="relative h-6 w-3/4 bg-brand-border/30 rounded-lg overflow-hidden">
            <motion.div
              variants={shimmer}
              initial="initial"
              animate="animate"
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            />
          </div>
        </div>
      </section>

      {/* 2. Content Grid Skeleton */}
      <section className="py-24 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="relative h-8 w-48 bg-brand-border/30 rounded-lg overflow-hidden">
              <motion.div
                variants={shimmer}
                initial="initial"
                animate="animate"
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              />
            </div>
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-6 items-center">
                <div className="relative h-12 w-12 bg-brand-border/30 rounded-xl overflow-hidden">
                  <motion.div
                    variants={shimmer}
                    initial="initial"
                    animate="animate"
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  />
                </div>
                <div className="h-[1px] flex-1 bg-brand-border/30" />
                <div className="relative h-6 w-32 bg-brand-border/30 rounded-lg overflow-hidden">
                  <motion.div
                    variants={shimmer}
                    initial="initial"
                    animate="animate"
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  />
                </div>
              </div>
            ))}
          </div>
          {/* Large Feature Card */}
          <div className="relative h-[450px] w-full bg-brand-border/10 rounded-[3rem] border border-brand-border/30 overflow-hidden">
            <motion.div
              variants={shimmer}
              initial="initial"
              animate="animate"
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent shadow-2xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoadingSkeleton;
