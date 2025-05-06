import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function Navbar() {
  const controls = useAnimation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      if (window.scrollY > 50) {
        setScrolled(true);
        controls.start({
          backdropFilter: 'blur(12px)',
          height: 56,
          backgroundColor: 'rgba(255, 255, 255, 0.3)', // transparent white
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        });
      } else {
        setScrolled(false);
        controls.start({
          backdropFilter: 'blur(0px)',
          height: 80,
          backgroundColor: 'rgba(255, 255, 255, 0.1)', // transparent white
          boxShadow: 'none',
        });
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [controls]);

  return (
    <motion.nav
      animate={controls}
      initial={{
        backdropFilter: 'blur(0px)',
        height: 80,
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // transparent white
        boxShadow: 'none',
      }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center px-6"
      style={{
        transition: 'height 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
      }}
    >
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        <div className="text-2xl font-serif font-bold text-maroon-900">ॐ BrandLogo</div>
        <ul className="hidden md:flex space-x-8 text-maroon-800 font-serif font-medium">
          <li className="hover:text-golden-500 cursor-pointer">Home</li>
          <li className="hover:text-golden-500 cursor-pointer">Shop</li>
          <li className="hover:text-golden-500 cursor-pointer">About</li>
          <li className="hover:text-golden-500 cursor-pointer">Contact</li>
        </ul>
        <div className="flex items-center space-x-4">
          <button aria-label="Cart" className="text-maroon-800 hover:text-golden-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 7h13l-1.5-7M7 13h10m-6 8a1 1 0 11-2 0 1 1 0 012 0zm6 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
          </button>
          <button aria-label="User" className="text-maroon-800 hover:text-golden-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A9 9 0 1118.88 6.196 9 9 0 015.12 17.804z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
