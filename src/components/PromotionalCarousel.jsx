import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const promotions = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80', // Himalayan mountain
    title: 'Sacred Himalayan Retreat',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80', // Rudraksha beads
    title: 'Authentic Rudraksha Beads',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1519741491521-1a7a7a7a7a7a?auto=format&fit=crop&w=800&q=80', // Mandala art
    title: 'Traditional Mandala Designs',
  },
];

export default function PromotionalCarousel() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ['0%', '-100%'],
      filter: ['blur(3px)', 'blur(0px)', 'blur(3px)'],
      opacity: [0.7, 1, 0.7],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 25,
          ease: 'linear',
        },
        filter: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 25,
          ease: 'easeInOut',
        },
        opacity: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 25,
          ease: 'easeInOut',
        },
      },
    });
  }, [controls]);

  return (
    <section className="overflow-hidden py-16 bg-sandalwood-100 rounded-lg shadow-lg">
      <motion.div
        className="flex space-x-8 max-w-7xl mx-auto"
        animate={controls}
      >
        {promotions.concat(promotions).map(({ id, image, title }, index) => (
          <motion.div
            key={index}
            className="relative w-80 h-48 rounded-lg overflow-hidden shadow-lg flex-shrink-0"
            whileHover={{ scale: 1.05, filter: 'blur(0)' }}
            style={{ filter: 'blur(3px)' }}
          >
            <img src={image} alt={title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-maroon-900 via-transparent to-transparent flex items-center justify-center">
              <h3 className="text-golden-300 text-xl font-serif font-semibold">{title}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
