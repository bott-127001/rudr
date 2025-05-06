import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const triviaPrompts = [
  "Did you know the first Rudraksha fell from Shiva’s tears?",
  "What was the secret weapon born from Amrit Manthan?",
  "How can a single bead protect your aura?",
  "The cosmic dance of Shiva influences the universe.",
  "Rudraksha beads are said to have healing vibrations.",
  "Ancient Vedic texts mention the power of Rudraksha.",
];

const blogTeasers = [
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    summary: 'Explore the spiritual significance and healing properties of Rudraksha beads.',
    buttonText: 'Explore the Blog',
  },
  {
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80',
    summary: 'Learn how to incorporate Rudraksha malas into your meditation routine for deeper focus.',
    buttonText: 'Dive Deeper',
  },
  {
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
    summary: 'Discover how Rudraksha beads can aid in balancing your energy and promoting wellness.',
    buttonText: 'Read the Story',
  },
];

function TypingText({ text }) {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    let index = 0;
    setDisplayed(''); // Clear old text before typing new
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text[index]);
      index++;
      if (index >= text.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [text]);
  return <span>{displayed}</span>;
}

export default function BlogSection() {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [prompts, setPrompts] = useState(triviaPrompts.slice(0, 3));
  const [buttonClicked, setButtonClicked] = useState(false);

  const shufflePrompts = () => {
    const shuffled = [...triviaPrompts].sort(() => Math.random() - 0.5).slice(0, 3);
    setPrompts(shuffled);
    setFlippedIndex(null);
    setButtonClicked(true);
    setTimeout(() => setButtonClicked(false), 300);
  };

  const handleViewAllClick = () => {
    setButtonClicked(true);
    setTimeout(() => {
      setButtonClicked(false);
      window.location.href = '/blog';
    }, 300);
  };

  return (
    <section className="relative bg-gradient-to-r from-offwhite-50 via-offwhite-100 to-offwhite-50 py-20 px-10 rounded-lg">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-serif font-bold text-deepteal-700 mb-12">
          Spiritual Insights & Guides
        </h2>
        <button
          onClick={shufflePrompts}
          className={`mb-10 px-6 py-2 bg-warmamber-400 text-mahogany-900 font-semibold rounded-md transition-shadow duration-300 ${
            buttonClicked ? 'shadow-inner scale-95' : 'hover:shadow-lg hover:scale-105'
          }`}
        >
          Shuffle Wisdom
        </button>
        <div className="flex justify-center space-x-10 mb-12">
          {prompts.map((prompt, i) => {
            const flipped = flippedIndex === i;
            return (
              <motion.div
                key={i}
                className={`relative w-72 h-96 perspective cursor-pointer`}
                onClick={() => setFlippedIndex(flipped ? null : i)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.3, duration: 0.6 }}
              >
                <div
                  className={`absolute w-full h-full rounded-xl shadow-lg transition-transform duration-700 transform-style-preserve-3d ${
                    flipped ? 'rotate-y-180' : ''
                  }`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Front Side */}
                  <div className="absolute w-full h-full bg-white bg-opacity-90 rounded-xl flex items-center justify-center p-6 backface-hidden shadow-md">
                    <p className="text-xl font-serif text-deepteal-700">
                      <TypingText text={prompt} />
                    </p>
                  </div>
                  {/* Back Side */}
                  <div className="absolute w-full h-full bg-gradient-to-br from-warmamber-400 to-warmamber-600 rounded-xl p-6 text-white backface-hidden rotate-y-180 shadow-lg flex flex-col justify-between">
                    <img
                      src={blogTeasers[i].image}
                      alt="Blog teaser"
                      className="rounded-md mb-4 h-40 object-cover"
                    />
                    <p className="text-lg font-serif mb-4">{blogTeasers[i].summary}</p>
                    <button className="self-start bg-white text-warmamber-600 font-semibold px-4 py-2 rounded-md hover:bg-yellow-300 transition-colors duration-300">
                      {blogTeasers[i].buttonText}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        <button
          onClick={handleViewAllClick}
          className={`px-8 py-3 bg-deepteal-700 text-offwhite-50 font-semibold rounded-md transition-shadow duration-300 ${
            buttonClicked ? 'shadow-inner scale-95' : 'hover:shadow-lg hover:scale-105'
          }`}
        >
          View All Blogs
        </button>
      </div>
      <style>{`
        .perspective {
          perspective: 1000px;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}
