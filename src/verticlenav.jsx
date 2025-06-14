import { useState, useEffect } from "react";

const navItems = [
  { id: "home", label: "HOME" },
  { id: "skills", label: "SKILLS" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "projects", label: "PROJECTS" },
  { id: "faqs", label: "FAQS" },
  { id: "contact", label: "CONTACT" },
];

const VerticalNav = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(navItems[0].id);

  useEffect(() => {
    const handleScroll = () => {
      let current = navItems[0].id;

      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.3 && rect.bottom >= window.innerHeight * 0.3) {
            current = item.id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Vertical nav for md+ screens */}
      <nav className="fixed left-4 top-1/2 z-50 -translate-y-1/2 flex-col items-center justify-center space-y-6 h-[80vh] font-custom hidden md:flex">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`font-bold text-lg tracking-widest transition
              ${activeSection === item.id ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}`}
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
            }}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Hamburger icon for mobile */}
      <button
        className="fixed top-4 left-4 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white/80 shadow-lg md:hidden"
        onClick={() => setOpen((o) => !o)}
        aria-label="Open navigation"
      >
        {/* Hamburger SVG */}
        <svg
          className="w-7 h-7 text-gray-800"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>

      {/* Dropdown menu for mobile */}
      {open && (
        <div className="fixed top-20 left-4 z-50 flex flex-col items-start space-y-2 bg-white/95 rounded-xl shadow-xl p-4 font-custom md:hidden">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`font-bold text-base py-1 px-2 rounded transition
                ${activeSection === item.id ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default VerticalNav;