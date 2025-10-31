import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import './App.css';

// Navigation Component
function Navigation() {
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
          {['Portfolio', 'About', 'Contact'].map((item, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.1, color: '#fbbf24' }}
              className="cursor-pointer"
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

// Hero Section Component
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
          Welcome to My Art Gallery
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-300 mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Discover stunning digital and traditional artwork
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

// Gallery Card Component
function GalleryCard({ title, image, delay }) {
  return (
    <motion.div
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}
    >
      <div className="w-full h-48 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
        <span className="text-white text-4xl font-bold">{image}</span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">
          A stunning piece of digital art showcasing modern design principles.
        </p>
      </div>
    </motion.div>
  );
}

// Gallery Section Component
function GallerySection() {
  const artworks = [
    { title: 'Digital Dreams', image: '🎨' },
    { title: 'Abstract Harmony', image: '🌈' },
    { title: 'Modern Vision', image: '✨' },
    { title: 'Creative Flow', image: '🎭' },
    { title: 'Artistic Expression', image: '🖼️' },
    { title: 'Color Symphony', image: '🎪' },
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
          Featured Artworks
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((art, i) => (
            <GalleryCard 
              key={i} 
              title={art.title} 
              image={art.image}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// About Section Component
function AboutSection() {
  return (
    <motion.section 
      className="py-20 bg-gray-900 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-white mb-8"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <motion.p 
          className="text-gray-300 text-lg leading-relaxed mb-6"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          I am a passionate artist dedicated to creating stunning visual experiences. 
          With years of experience in digital art and design, I bring creativity and 
          innovation to every project.
        </motion.p>
        <motion.p 
          className="text-gray-300 text-lg leading-relaxed"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          My work spans across multiple mediums, combining traditional techniques 
          with modern digital tools to create unique and captivating pieces.
        </motion.p>
      </div>
    </motion.section>
  );
}

// Contact Section Component
function ContactSection() {
  return (
    <motion.section 
      className="py-20 bg-black px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          className="text-4xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        <motion.form 
          className="space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <textarea 
            placeholder="Your Message" 
            rows="5"
            className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          ></textarea>
          <motion.button 
            type="submit"
            className="w-full px-8 py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 text-center py-8">
      <p>&copy; 2025 Art Showcase. All rights reserved.</p>
      <div className="flex justify-center gap-6 mt-4">
        {['Facebook', 'Instagram', 'Twitter'].map((social, i) => (
          <motion.a 
            key={i}
            href="#"
            className="hover:text-white transition"
            whileHover={{ scale: 1.1 }}
          >
            {social}
          </motion.a>
        ))}
      </div>
    </footer>
  );
}

// Main App Component
function App() {
  useEffect(() => {
    // GSAP animation for scroll effects
    gsap.registerPlugin();
  }, []);

  return (
    <div className="bg-black">
      <Navigation />
      <HeroSection />
      <GallerySection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
