import React, { useState } from 'react';
import { motion } from 'framer-motion';

const companyLinks = [
  { name: 'About Us', href: '#' },
  { name: 'Contact', href: '#' },
];

const quickLinks = [
  { name: 'Shop', href: '#' },
  { name: 'Terms & Conditions', href: '#' },
  { name: 'Privacy Policy', href: '#' },
];

const socialLinks = [
  {
    name: 'Instagram',
    href: '#',
    svg: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
        <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm8.75 2a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: '#',
    svg: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54v-2.89h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: '#',
    svg: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
        <path d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 001.98-2.48 9.14 9.14 0 01-2.88 1.1 4.52 4.52 0 00-7.7 4.13A12.84 12.84 0 013 4.89a4.52 4.52 0 001.4 6.04 4.48 4.48 0 01-2.05-.57v.06a4.52 4.52 0 003.63 4.43 4.52 4.52 0 01-2.04.08 4.52 4.52 0 004.22 3.14A9.05 9.05 0 012 19.54a12.8 12.8 0 006.92 2.03c8.3 0 12.84-6.87 12.84-12.83 0-.2 0-.42-.02-.63A9.22 9.22 0 0023 3z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: '#',
    svg: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.061-1.865-3.061-1.865 0-2.151 1.454-2.151 2.959v5.706h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.562 2.838-1.562 3.036 0 3.6 2 3.6 4.59v5.605z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [email, setEmail] = React.useState('');
  const [subscribed, setSubscribed] = React.useState(false);

  const handleSubscribe = () => {
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <motion.footer
      className="bg-mahogany-900 text-offwhite-50 py-12 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Newsletter Section */}
        <div>
          <h2 className="text-2xl font-serif mb-4">Stay Connected</h2>
          <p className="mb-4 font-sans text-mutedgold-300">
            Subscribe for spiritual insights, updates, and exclusive offers.
          </p>
          {subscribed ? (
            <motion.div
              className="text-warmamber-400 font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Thank you for subscribing!
            </motion.div>
          ) : (
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow px-4 py-2 rounded-l-md border border-mutedgold-300 focus:outline-none focus:ring-2 focus:ring-warmamber-400 text-mahogany-900"
              />
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 10px 3px rgba(255, 143, 0, 0.7)' }}
                onClick={handleSubscribe}
                className="bg-warmamber-400 text-mahogany-900 px-6 rounded-r-md font-semibold cursor-pointer"
              >
                Subscribe
              </motion.button>
            </div>
          )}
        </div>

        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-serif mb-4">Company Info</h2>
          <ul className="space-y-2 font-sans">
            {companyLinks.map(({ name, href }) => (
              <li key={name}>
                <a href={href} className="hover:underline hover:text-warmamber-400 transition-colors">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-2xl font-serif mb-4">Quick Links</h2>
          <ul className="space-y-2 font-sans">
            {quickLinks.map(({ name, href }) => (
              <li key={name}>
                <a href={href} className="hover:underline hover:text-warmamber-400 transition-colors">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-2xl font-serif mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            {socialLinks.map(({ name, href, svg }) => (
              <a
                key={name}
                href={href}
                aria-label={name}
                className="text-mutedgold-300 hover:text-warmamber-400 transition-colors transform hover:scale-110"
              >
                {svg}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
