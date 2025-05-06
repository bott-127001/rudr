import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  { name: 'Rudraksha Malas', image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80', cta: "Explore Malas" },
  { name: 'Beads & Bracelets', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80', cta: "Explore Bracelets" },
  { name: 'Spiritual Accessories', image: 'https://images.unsplash.com/photo-1519741491521-1a7a7a7a7a7a?auto=format&fit=crop&w=800&q=80', cta: "Explore Accessories" },
  { name: 'Vedic Ritual Items', image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80', cta: "Explore Rituals" },
];

const cardVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.75,
      duration: 3,
      type: 'spring',
      stiffness: 250,
      damping: 20,
    },
  }),
};

export default function CategoryCards() {
  return (
    <section className="max-w-7xl mx-auto px-3 pt-6 pb-8 mt-20 mb-10 bg-sandalwood-50 rounded-lg shadow-lg">
      <h2 className="text-3xl font-serif font-bold mb-8 text-maroon-900">Shop by Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {categories.map(({ name, image, cta }, index) => (
          <motion.div
            key={name}
            className="relative rounded-xl overflow-hidden cursor-pointer shadow-lg bg-white"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            whileHover={{ scale: 1.05, rotateY: 8, rotateX: 4 }}
          >
            <img src={image} alt={name} className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-maroon-900 via-transparent to-transparent flex flex-col items-center justify-end p-6 space-y-2">
              <h3 className="text-golden-300 text-2xl font-semibold font-serif">{name}</h3>
              <button className="px-4 py-2 bg-maroon-900 rounded-full text-golden-300 text-sm font-serif hover:bg-maroon-800 transition">
                {cta}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
