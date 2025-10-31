import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import "./App.css";

function App() {
  // Section references
  const aboutRef = useRef(null);

  // Smooth scroll to About/Bio section
  const scrollToBio = () => {
    if (aboutRef.current) {
      window.scrollTo({
        top: aboutRef.current.offsetTop + aboutRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  // Open dialer
  const openDialer = () => {
    window.location.href = "tel:9434973681";
  };

  useEffect(() => {
    gsap.registerPlugin();
  }, []);

  return (
    <div className="bg-black">
      {/* Navigation */}
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
              whileHover={{ scale: 1.1, color: "#fbbf24" }}
              className="cursor-pointer"
              onClick={scrollToBio}
            >
              Portfolio
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1, color: "#fbbf24" }}
              className="cursor-pointer"
              onClick={openDialer}
            >
              Contact
            </motion.li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
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
            onClick={scrollToBio}
          >
            Explore Gallery
          </motion.button>
        </div>
      </motion.section>

      {/* Gallery Section */}
      <motion.section
        className="py-20 bg-black px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Featured Artworks
          </h2>
          {/* your original artworks/cards remain here */}
        </div>
      </motion.section>

      {/* About (Bio) Section */}
      <motion.section
        ref={aboutRef}
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
            I am a passionate artist dedicated to creating stunning visual
            experiences. My work expresses emotion through colors and motion.
            Every stroke in my artworks is my survival oxygen.
          </motion.p>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 text-center py-8">
        <p>&copy; 2025 Art Showcase. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
