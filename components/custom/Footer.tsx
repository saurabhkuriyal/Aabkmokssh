"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Sparkles,
  Twitter,
  Youtube
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-sky-400' },
    { name: 'Youtube', icon: Youtube, href: '#', color: 'hover:text-red-500' },
  ];

  const footerLinks = {
    products: [
      { name: "Healing Crystals", href: "/explore/healing" },
      { name: "Prosperity Gems", href: "/explore/money" },
      { name: "Protection Stones", href: "/explore/protection" },
      { name: "Limited Edition", href: "/explore/limited" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Story", href: "/our-story" },
      { name: "Impact", href: "/impact" },
      { name: "Careers", href: "/careers" },
    ],
    support: [
      { name: "Help Center", href: "/help" },
      { name: "Shipping & Returns", href: "/shipping" },
      { name: "Size Guide", href: "/size-guide" },
      { name: "Contact Us", href: "/contact" },
    ]
  };

  return (
    <footer className="relative bg-[#050505] text-white pt-20 pb-10 overflow-hidden mt-auto">
      {/* Ambient Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-900/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Brand Section */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="flex items-center gap-3 w-fit group">
              <div className="relative w-10 h-10 overflow-hidden rounded-xl">
                <Image
                  src="/logo.PNG"
                  alt="AankMokssh"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:to-indigo-400 transition-all duration-300">
                AankMokssh
              </span>
            </Link>

            <p className="text-gray-400 leading-relaxed max-w-sm">
              Bridging the ancient wisdom of sacred gemstones with modern spiritual seeking.
              Find balance, protection, and harmony in every handcrafted piece.
            </p>

            <div className="flex gap-4 pt-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ y: -3 }}
                  className={`p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 transition-colors ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-lg mb-6 text-white/90">Shop</h3>
            <ul className="space-y-4">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-lg mb-6 text-white/90">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Review / Newsletter Column */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="font-bold text-lg text-white/90">Stay Spiritually Connected</h3>
            <p className="text-sm text-gray-400">
              Join our newsletter for exclusive drops, spiritual guides, and early access to limited collections.
            </p>

            <div className="relative group">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pr-12 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-900/50 transition-all"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-indigo-600 rounded-lg text-white opacity-80 hover:opacity-100 transition-opacity">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-2 pt-4">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-medium text-emerald-400">10% off your first order</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <p className="text-gray-500 text-sm md:text-left text-center">
            &copy; {currentYear} AankMokssh. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6 justify-center md:justify-end text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;