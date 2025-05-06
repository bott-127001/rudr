import React, { useState } from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Rudraksha Mala',
    price: '₹1,499',
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    name: 'Beaded Bracelet',
    price: '₹799',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    name: 'Spiritual Pendant',
    price: '₹1,199',
    image: 'https://images.unsplash.com/photo-1519741491521-1a7a7a7a7a7a?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 4,
    name: 'Vedic Ritual Kit',
    price: '₹2,499',
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 5,
    name: 'Meditation Beads',
    price: '₹999',
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 6,
    name: 'Sacred Bracelet',
    price: '₹699',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80',
  },
];

export default function FeaturedProducts() {
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 bg-sandalwood-50 rounded-lg shadow-lg">
      <h2 className="text-3xl font-serif font-bold mb-8 text-maroon-900">Featured Products</h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {products.map(({ id, name, price, image }) => (
          <motion.div
            key={id}
            className="relative rounded-xl shadow-lg overflow-hidden cursor-pointer bg-white"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            onClick={() => setQuickViewProduct(products.find(p => p.id === id))}
          >
            <img src={image} alt={name} className="w-full h-56 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-maroon-900 font-serif">{name}</h3>
              <p className="text-golden-600 font-bold font-serif">{price}</p>
            </div>
            <motion.button
              initial={{ x: '100%' }}
              whileHover={{ x: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="absolute top-4 right-4 bg-maroon-900 text-golden-300 px-3 py-1 rounded-full shadow-lg font-serif"
            >
              Add to Cart
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
      <div className="mt-8 flex justify-center">
        <button className="px-6 py-3 bg-maroon-900 text-golden-300 rounded-full font-semibold shadow-lg hover:bg-maroon-800 transition font-serif">
          View All Products
        </button>
      </div>

      {quickViewProduct && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setQuickViewProduct(null)}
        >
          <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-maroon-800 hover:text-maroon-900 font-serif"
              onClick={() => setQuickViewProduct(null)}
            >
              &times;
            </button>
            <img src={quickViewProduct.image} alt={quickViewProduct.name} className="w-full h-64 object-cover rounded" />
            <h3 className="text-xl font-bold mt-4 text-maroon-900 font-serif">{quickViewProduct.name}</h3>
            <p className="text-golden-600 font-bold font-serif">{quickViewProduct.price}</p>
            <p className="mt-2 text-maroon-800 font-serif">This is a quick view of the product. Add more details here as needed.</p>
            <button className="mt-4 px-4 py-2 bg-maroon-900 text-golden-300 rounded hover:bg-maroon-800 transition font-serif">
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
