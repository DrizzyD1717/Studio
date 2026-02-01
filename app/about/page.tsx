"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { Users, Zap, Globe, Shield } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* 1. Vision Header */}
      <section className="container mx-auto px-4 md:px-6 mb-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-4xl"
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-10 italic">
            A Collective of <br />
            <span className="text-brand-accent">Specialists.</span>
          </h1>
          <p className="text-2xl text-brand-gray leading-relaxed">
            We are a multi-disciplinary studio born from the idea that great
            work happens when experts in Code, Design, and Photography
            collaborate under one roof. We don't just "do it all" we have the
            right people for every specific task.
          </p>
        </motion.div>
      </section>

      {/* 2. Brand Pillars */}
      <section className="bg-brand-border/10 py-24 border-y border-brand-border mb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                icon: <Users />,
                title: "Collaborative",
                desc: "Our developers and designers work side-by-side from day one.",
              },
              {
                icon: <Zap />,
                title: "Fast-Paced",
                desc: "We optimize for speed without compromising on creative integrity.",
              },
              {
                icon: <Shield />,
                title: "Reliable",
                desc: "Multiple experts mean your project never stalls. We have the depth to deliver.",
              },
              {
                icon: <Globe />,
                title: "Remote-First",
                desc: "Our team operates globally, bringing a diverse perspective to every brief.",
              },
            ].map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="space-y-4"
              >
                <div className="text-brand-accent">{pillar.icon}</div>
                <h3 className="text-xl font-bold">{pillar.title}</h3>
                <p className="text-brand-gray text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Team Capabilities (Instead of People Bios) */}
      <section className="container mx-auto px-4 md:px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square rounded-[3rem] overflow-hidden bg-brand-border border border-brand-border">
            <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center">
              <span className="text-brand-gray/20 font-bold uppercase tracking-widest italic">
                Action Shot Placeholder
              </span>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight">
              Different Minds, One Goal.
            </h2>
            <p className="text-brand-gray text-lg">
              Each service we offer is handled by a lead specialist. Our
              developers aren't "learning design" on your dime, and our
              photographers aren't "dabbling in code." You get seasoned pros for
              every vertical of your project.
            </p>
            <div className="space-y-4">
              {[
                "Development Hub",
                "Design Studio",
                "Photography Collective",
              ].map((label) => (
                <div
                  key={label}
                  className="flex items-center gap-3 p-4 rounded-2xl border border-brand-border bg-brand-black"
                >
                  <div className="h-2 w-2 rounded-full bg-brand-accent animate-pulse" />
                  <span className="font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
