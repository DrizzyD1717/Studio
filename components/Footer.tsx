"use client";
import React from "react";
import Link from "next/link";
import { Instagram, Twitter, Linkedin, Github, Mail } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Web Development", href: "/services/development" },
      { name: "Brand Design", href: "/services/design" },
      { name: "Photography", href: "/services/photography" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Contact", href: "/contact" },
    ],
    social: [
      { name: "Instagram", icon: <Instagram size={18} />, href: "#" },
      { name: "X (Twitter)", icon: <Twitter size={18} />, href: "#" },
      { name: "LinkedIn", icon: <Linkedin size={18} />, href: "#" },
      { name: "GitHub", icon: <Github size={18} />, href: "#" },
    ],
  };

  return (
    <footer className="bg-brand-black border-t border-brand-border pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="text-2xl font-bold tracking-tighter">
              AUREOO<span className="text-brand-accent">.</span>
            </Link>
            <p className="text-brand-gray text-sm leading-relaxed max-w-xs">
              Merging technical excellence with creative vision. Let&apos;s
              build something extraordinary together.
            </p>
            <div className="flex gap-4">
              {footerLinks.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="p-2 rounded-full border border-brand-border text-brand-gray hover:text-brand-accent hover:border-brand-accent transition-all"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-brand-gray hover:text-brand-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-white font-bold mb-6">Explore</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-brand-gray hover:text-brand-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter/Contact Column */}
          <div>
            <h4 className="text-white font-bold mb-6">Let&apos;s Talk</h4>
            <p className="text-brand-gray text-sm mb-4">
              Have a project in mind?
            </p>
            <Link
              href="mailto:hello@yourstudio.com"
              className="inline-flex items-center gap-2 text-brand-accent font-bold hover:gap-3 transition-all"
            >
              <Mail size={18} />
              hello@yourstudio.com
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-gray text-xs">
            © {currentYear} AUREOO. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link
              href="/privacy"
              className="text-brand-gray text-xs hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-brand-gray text-xs hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
