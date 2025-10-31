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
      <div className="w-full h-48 flex items-center justify-center">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover" 
          onError={(e) => { e.target.onerror = null; e.target.src="/images/placeholder.jpg" }} // Fallback for missing images
        />
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
    { title: 'Painting 1', image: 'images/image1.jpg' },
    { title: 'Painting 2', image: 'images/image2.jpg' },
    { title: 'Painting 3', image: 'images/image3.jpg' },
    { title: 'Painting 4', image: 'images/image4.jpg' },
    { title: 'Painting 5', image: 'images/image5.jpg' },
    { title: 'Painting 6', image: 'images/image6.jpg' },
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
  const bioText = "I am Joydev Bala, a professional painter from Kolkata. After passing out from the Indian College of Art and Draftsmanship under Rabindra Bharati University College in 2000, I am still alive with my artwork (painting). In creating my artworks, showing environmental awareness in lifestyle, loving society, protecting the green, de-polluting the beautiful environment of the earth, not wasting water and maintaining communal harmony have repeatedly been expressed. I use flowers and birds as decorations in my paintings. I continue to try my painting scientifically. My artworks have lines, textures, a style of my own and an Indian feel to my paintings. To date I have held around 21 solo exhibitions and over 200 group exhibitions. Also, I have been able to do many exhibitions and art workshops in the presence of many good people in the country and abroad. Many people from home and abroad have collected my paintings. With the blessing of my parents, Gurudev’s love, I want to draw like this all my life. So artworks is my survival oxygen.";
  
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
          About the Artist
        </motion.h2>
        {bioText.split('. ').map((sentence, index) => (
          <motion.p 
            key={index}
            className="text-gray-300 text-lg leading-relaxed mb-4"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            {sentence}.
          </motion.p>
        ))}
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
        <div className="text-gray-300 text-xl space-y-4 mb-8">
            <p><i className="fas fa-phone-alt mr-2"></i> 9434973681</p>
            <p><a href="mailto:joydev.bala@gmail.com" className="hover:text-yellow-500 transition"><i className="fas fa-envelope mr-2"></i> joydev.bala@gmail.com</a></p>
            <p><i className="fas fa-camera mr-2"></i> @JOYDEB8865</p>
            <p><a href="https://www.facebook.com/joydeb.bala2" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition"><i className="fab fa-facebook mr-2"></i> joydeb.bala2 (Facebook)</a></p>
        </div>
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
      <p>&copy; 2025 Joydev Bala Art Gallery. All rights reserved.</p>
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
