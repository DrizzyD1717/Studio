"use client";
import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Mail, MapPin, Send, MessageCircle, CheckCircle } from "lucide-react";
import { sendEmail } from "../actions";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ContactPage = () => {
  const [isPending, setIsPending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  async function handleSubmit(formData: FormData) {
    setIsPending(true);
    const result = await sendEmail(formData);
    setIsPending(false);

    if (result.success) {
      setIsSent(true);
    } else {
      alert("Something went wrong. Please try again.");
    }
  }

  if (isSent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center p-12 rounded-3xl border border-brand-border bg-brand-border/10"
        >
          <CheckCircle className="text-brand-accent mx-auto mb-6" size={64} />
          <h2 className="text-3xl font-bold mb-4">Message Sent!</h2>
          <p className="text-brand-gray mb-8">
            I'll get back to you within 24 hours.
          </p>
          <button
            onClick={() => setIsSent(false)}
            className="text-brand-accent font-bold hover:underline"
          >
            Send another message
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            Let's build <br />
            <span className="text-brand-accent">something great.</span>
          </h1>
          <p className="text-brand-gray text-lg max-w-xl">
            Have a specific project in mind or just want to say hi? Fill out the
            form and I'll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side: Info */}
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            variants={fadeUp}
            className="space-y-12"
          >
            <div className="flex gap-6 items-start">
              <div className="p-4 bg-brand-border/30 rounded-2xl text-brand-accent">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">Email Me</h4>
                <p className="text-brand-gray">hello@yourstudio.com</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="p-4 bg-brand-border/30 rounded-2xl text-brand-accent">
                <MessageCircle size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">Socials</h4>
                <p className="text-brand-gray">@yourstudio_creative</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="p-4 bg-brand-border/30 rounded-2xl text-brand-accent">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">Location</h4>
                <p className="text-brand-gray">Available Globally / Remote</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.form
            action={handleSubmit} // Trigger our server action
            className="bg-brand-border/20 p-8 md:p-12 rounded-[2rem] border border-brand-border"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-brand-gray">
                  Full Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full bg-brand-black border border-brand-border rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-brand-gray">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-brand-black border border-brand-border rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2 mb-6">
              <label className="text-sm font-medium text-brand-gray">
                Interested In
              </label>
              <select
                name="service"
                className="w-full bg-brand-black border border-brand-border rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors appearance-none"
              >
                <option value="Web Development">Web Development</option>
                <option value="Brand Design">Brand Design</option>
                <option value="Photography">Photography</option>
              </select>
            </div>

            <div className="space-y-2 mb-8">
              <label className="text-sm font-medium text-brand-gray">
                Your Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full bg-brand-black border border-brand-border rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors resize-none"
              />
            </div>

            <button
              disabled={isPending}
              type="submit"
              className="w-full bg-brand-white text-brand-black font-bold h-14 rounded-xl flex items-center justify-center gap-2 hover:bg-brand-accent hover:text-white transition-all group disabled:opacity-50"
            >
              {isPending ? "Sending..." : "Send Message"}
              {!isPending && (
                <Send
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
