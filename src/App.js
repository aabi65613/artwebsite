import React, { useRef } from "react";
import "./App.css";

function App() {
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul>
          <li onClick={() => scrollToSection(aboutRef)}>About</li>
          <li onClick={() => scrollToSection(portfolioRef)}>Portfolio</li>
          <li onClick={() => scrollToSection(contactRef)}>Contact</li>
        </ul>
      </nav>

      {/* Hero / Top Section */}
      <header className="hero">
        <h1>Welcome to My Art Website</h1>
        <p>Explore my creativity, works & passion.</p>
      </header>

      {/* About Section */}
      <section ref={aboutRef} id="about" className="section about">
        <h2>About Me</h2>
        <p>
          Hi, I’m an artist passionate about creating unique designs and artwork.
          I love expressing emotions through visuals and storytelling.
        </p>

        {/* Bio part */}
        <div className="bio">
          <h3>My Bio</h3>
          <p>
            I started my art journey with sketching and gradually moved into
            digital artwork. I enjoy exploring different styles and forms of
            creativity.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section ref={portfolioRef} id="portfolio" className="section portfolio">
        <h2>My Portfolio</h2>
        <p>Here are some of my best works and creative projects.</p>

        <div className="portfolio-gallery">
