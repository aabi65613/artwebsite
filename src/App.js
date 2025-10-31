import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import './App.css';

// Navigation
function Navigation({ scrollToBioEnd }) {
  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.h1
          className="text-2xl font-bold text-white"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          ART SHOWCASE
        </motion.h1>
        <ul className="flex gap-8 text-white">
          <motion.li
            whileHover={{ scale: 1.1, color: '#fbbf24' }}
            className="cursor-pointer"
            onClick={scrollToBioEnd}
          >
            Portfolio
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1, color: '#fbbf24' }}
            className="cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            About
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1, color: '#fbbf24' }}
            className="cursor-pointer"
          >
            <a href="tel:9434973681">Contact</a>
          </motion.li>
        </ul>
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection() {
  return (
    <motion.section
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center">
        <motion.h2
          className="text-6xl font-bold text-white mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Joydev Bala Art Gallery
        </motion.h2>
        <motion.p
          className="text-xl text-gray-300 mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          artwork is my survival oxygen
        </motion.p>
        <motion.button
          className="px-8 py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Explore Gallery
        </motion.button>
      </div>
    </motion.section>
  );
}

// Gallery Section
function GalleryCard({ title, image, description, delay }) {
  return (
    <motion.div
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}
    >
      <div className="w-full h-48 flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          onError={(e) => { e.target.onerror = null; e.target.src = "/images/placeholder.jpg"; }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </motion.div>
  );
}

function GallerySection() {
  const artworks = [
    { title: 'Painting 1', image: 'images/image1.jpg', description: 'Artist - Joydev Bala | Title - Outrage | Medium - Acrylic on Canvas' },
    { title: 'Painting 2', image: 'images/image2.jpg', description: 'Artist - Joydev Bala | Title - Love | Medium - Acrylic on Canvas' },
    { title: 'Painting 3', image: 'images/image3.jpg', description: 'Artist - Joydev Bala | Title - Mother and Child | Medium - Acrylic on Canvas' },
  ];

  return (
    <section className="py-20 bg-black px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-white text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Gallery Collection
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((art, i) => (
            <GalleryCard key={i} {...art} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

// About / Bio Section
function AboutSection({ bioRef }) {
  const bioText = "I am Joydev Bala, a professional painter from Kolkata...";
  return (
    <motion.section
      ref={bioRef}
      className="py-20 bg-gray-900 px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-8">About the Artist</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-10">
          {bioText}
        </p>
        <p className="text-gray-400 italic">
          “My art represents emotion and inner truth — not what the eyes see, but what the soul feels.”
        </p>
      </div>
    </motion.section>
  );
}

// Contact Section
function ContactSection() {
  return (
    <motion.section className="py-20 bg-black px-6 text-center text-white">
      <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
      <p className="text-gray-300 text-xl mb-4">
        <a href="tel:9434973681" className="text-yellow-400 hover:text-yellow-300">📞 9434973681</a>
      </p>
      <p className="text-gray-300 text-lg">
        ✉️ joydev.bala@gmail.com
      </p>
    </motion.section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 text-center py-8">
      <p>&copy; 2025 Joydev Bala Art Gallery. All rights reserved.</p>
    </footer>
  );
}

// Main App Component
function App() {
  const bioRef = useRef(null);

  const scrollToBioEnd = () => {
    bioRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  };

  useEffect(() => {
    gsap.registerPlugin();
  }, []);

  return (
    <div className="bg-black">
      <Navigation scrollToBioEnd={scrollToBioEnd} />
      <HeroSection />
      <GallerySection />
      <AboutSection bioRef={bioRef} />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
