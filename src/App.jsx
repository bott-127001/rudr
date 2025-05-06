import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryCards from './components/CategoryCards';
import FeaturedProducts from './components/FeaturedProducts';
import BenefitsOfRudraksh from './components/BenefitsOfRudraksh';
import BlogSection from './components/BlogSection';
import RudrakshaQuiz from './components/RudrakshaQuiz';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Hero />
      <RudrakshaQuiz />
      <CategoryCards />
      <BenefitsOfRudraksh />
      <FeaturedProducts />
      
      <BlogSection />
      <Footer />
    </div>
  );
}
