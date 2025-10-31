import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './style.css';

// --- Components ---

// Modal Component for full-size image view
const ImageModal = ({ src, onClose }) => {
    return (
        <AnimatePresence>
            {src && (
                <motion.div
                    className="modal"
                    onClick={onClose}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <span className="close-button" onClick={onClose}>&times;</span>
                    <motion.img
                        id="modalImage"
                        className="modal-content"
                        src={src}
                        alt="Full size painting"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

// Header Component
const Header = () => (
    <motion.header
        className="header"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 14 }}
    >
        <div className="header-content">
            <h1 className="main-title">🎨 Joydev Bala Art Gallery 🎨</h1>
            <p className="subtitle">artwork is my survival oxygen</p>
        </div>
    </motion.header>
);

// About Section Text Component with Framer Motion text reveal
const AboutText = () => {
    const textContent = [
        "**About the artist**",
        "I am Joydev Bala, a professional painter from Kolkata.",
        "After passing out from the Indian College of Art and Draftsmanship under Rabindra Bharati University College in 2000, I am still alive with my artwork (painting).",
        "In creating my artworks, showing environmental awareness in lifestyle, loving society, protecting the green, de-polluting the beautiful environment of the earth, not wasting water and maintaining communal harmony have repeatedly been expressed.",
        "I use flowers and birds as decorations in my paintings.",
        "I continue to try my painting scientifically.",
        "My artworks have lines, textures, a style of my own and an Indian feel to my paintings.",
        "To date I have held around 21 solo exhibitions and over 200 group exhibitions.",
        "Also, I have been able to do many exhibitions and art workshops in the presence of many good people in the country and abroad.",
        "Many people from home and abroad have collected my paintings.",
        "With the blessing of my parents, Gurudev’s love, I want to draw like this all my life.",
        "So artworks is my survival oxygen.",
        '<i class="fas fa-phone-alt"></i> 9434973681',
        '<a href="mailto:joydev.bala@gmail.com" class="social-link"><i class="fas fa-envelope"></i> joydev.bala@gmail.com</a>',
        '<i class="fas fa-camera"></i> @JOYDEB8865',
        '<a href="https://www.facebook.com/joydeb.bala2" target="_blank" class="social-link"><i class="fab fa-facebook"></i> joydeb.bala2</a>',
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // Delay between each line's animation
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.p
            className="about-text"
            id="about-text-container"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
        >
            {textContent.map((line, index) => (
                <motion.span
                    key={index}
                    className="text-reveal-line"
                    variants={itemVariants}
                    dangerouslySetInnerHTML={{ __html: line }}
                />
            ))}
        </motion.p>
    );
};

// About Section Component
const AboutSection = () => (
    <section className="about-section">
        <div className="about-container">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                About the Artist
            </motion.h2>
            <AboutText />
            <div className="artist-signature">
                <p className="artist-name">Joydev Bala</p>
                <p className="artist-title"> Artist</p>
            </div>
        </div>
    </section>
);

// Gallery Item Component with Framer Motion for hover and click effects
const GalleryItem = ({ image, onClick }) => {
    // Determine the animation direction based on the image index for a staggered effect
    const direction = image.id % 2 === 0 ? -50 : 50;

    return (
        <motion.div
            className="gallery-item"
            onClick={() => onClick(image.src)}
            // Initial animation for fade-in and slide
            initial={{ opacity: 0, x: direction }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.4 }}
            // Framer Motion hover effects
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.8)" }}
            whileTap={{ scale: 0.95 }}
        >
            <img src={image.src} alt={image.alt} className="gallery-image" />
        </motion.div>
    );
};

// Gallery Section Component
const GallerySection = ({ openModal }) => {
    const images = Array.from({ length: 15 }, (_, i) => ({
        id: i + 1,
        src: \`/images/image\${i + 1}.jpg\`,
        alt: \`Painting \${i + 1}\`,
    }));

    return (
        <section className="gallery-section">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                Gallery Collection
            </motion.h2>
            <div className="gallery-grid">
                {images.map((image) => (
                    <GalleryItem key={image.id} image={image} onClick={openModal} />
                ))}
            </div>
        </section>
    );
};

// Footer Component
const Footer = () => (
    <footer className="footer">
        <p>&copy; 2024 Joydev Bala Art Gallery. All rights reserved.</p>
        <p className="footer-subtitle">Celebrating art, creativity, and the human spirit</p>
        <div className="social-links">
            <a href="mailto:joydev.bala@gmail.com" target="_blank" className="social-icon-link">
                <img src="/images/gmail_logo.png" alt="Gmail" className="social-logo" />
            </a>
            <a href="https://www.facebook.com/joydeb.bala2" target="_blank" className="social-icon-link">
                <img src="/images/facebook_logo.png" alt="Facebook" className="social-logo" />
            </a>
        </div>
    </footer>
);


// --- Main App Component ---

function App() {
    const [modalImageSrc, setModalImageSrc] = useState(null);

    const openModal = (src) => {
        setModalImageSrc(src);
        document.body.style.overflow = 'hidden'; // Disable body scroll
    };

    const closeModal = () => {
        setModalImageSrc(null);
        document.body.style.overflow = 'auto'; // Enable body scroll
    };
    
    // Add Font Awesome link to the document head
    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css';
        link.integrity = 'sha512-SnH5WK+bZxgPHs44uWIX+LLMDJzTjG5l8iK1Tz2t/K09Y993uYQy6x25t9gY9y9y9g==';
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
        
        // Update document title
        document.title = "Joydev Bala Art Gallery";

        return () => {
            document.head.removeChild(link);
        };
    }, []);


    return (
        <>
            <Header />
            <main>
                <AboutSection />
                <GallerySection openModal={openModal} />
            </main>
            <Footer />
            <ImageModal src={modalImageSrc} onClose={closeModal} />
        </>
    );
}

export default App;
