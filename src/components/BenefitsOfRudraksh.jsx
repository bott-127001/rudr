
import React from 'react';
import { motion } from 'framer-motion';

const benefits = [
  'Improves Focus: Enhances concentration and mental clarity through spiritual energy.',
  'Spiritual Protection: Shields you from negative energies and promotes peace.',
  'Balances Chakras: Aligns your energy centers for holistic well-being.',
];

// URL or local path to the trishul or rudraksh image to use as bullet points
const bulletImage = '/rudrakshbulletin.png'; // Please ensure this image is in the public folder

const listItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.5,
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
};

export default function BenefitsOfRudraksh() {
  return (
    <section className="bg-gradient-to-b from-offwhite-50 to-offwhite-100 relative py-16 px-6 min-h-[300px]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl font-serif font-bold text-deepteal-700 mb-12 text-center">
          Why Us?
        </h2>
        <ul className="max-w-3xl mx-auto space-y-8 text-2xl text-mahogany-700 font-serif list-none">
          {benefits.map((benefit, index) => (
            <motion.li
              key={index}
              className="flex items-center space-x-6"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={listItemVariants}
            >
              <img src={bulletImage} alt="bullet" className="w-8 h-8" />
              <span>{benefit}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
