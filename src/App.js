// Navigation Component (replace the existing Navigation() in src/App.js)
function Navigation() {
  const navItems = [
    { label: "Portfolio", target: "portfolio" },
    { label: "About", target: "about" },
    { label: "Contact", target: "contact" },
  ];

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
          {navItems.map((item, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.06 }}
              className="cursor-pointer select-none"
            >
              <button
                onClick={() => handleScroll(item.target)}
                className="bg-transparent text-white px-2 py-1 focus:outline-none"
                aria-label={`Scroll to ${item.label}`}
              >
                {item.label}
              </button>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
