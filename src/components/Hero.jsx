import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      className="relative h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden"
    >
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="35%" stopColor="#0B1D51" />
            <stop offset="100%" stopColor="#800000" />
            <stop offset="100%" stopColor="#F5F1E9" />
          </linearGradient>
        </defs>
        <path
          d="M0,0 L100,0 L100,80 Q50,100 0,80 Z"
          fill="url(#grad)"
        />
      </svg>

      {/* Background image without clipPath, adjusted position and scale */}
      <motion.img
        src="/herosec.png"
        alt="Hero Background"
        className="absolute w-[100%] max-w-none max-h-[100vh] -translate-x-1/2 -translate-y-1/2 object-cover opacity-60 mix-blend-screen pointer-events-none"
        style={{ zIndex: 0 }}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="relative z-10 max-w-4xl px-6"
      >
        <h1 className="text-5xl md:text-7xl font-serif font-extrabold text-golden-400 drop-shadow-lg">
          Embrace the Sacred Energy of Rudraksha
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-sandalwood-100 font-serif drop-shadow-md max-w-xl mx-auto">
          Discover the spiritual power and timeless beauty of our handcrafted Rudraksha malas and accessories.
        </p>
        <motion.button
          whileHover={{ scale: 1.1, boxShadow: '0 0 20px 10px rgba(255, 215, 0, 0.7)' }}
          className="mt-10 px-8 py-3 bg-maroon-900 rounded-full text-lg font-semibold tracking-wide cursor-pointer shadow-lg text-golden-300 font-serif"
        >
          Shop Spiritual Collection
        </motion.button>
      </motion.div>
    </section>
  );
}







