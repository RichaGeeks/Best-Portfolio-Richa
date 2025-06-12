import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Whoareyou from "./whoareyou";
import Intro from './intro';
import WelcomeSection from './welcome';


const keywords = [
  "Developer",
  "Engineer",
  "Problem Solver",
  "Open Source Enthusiast",
  "Tech Visionary",
  "Architect",
  "Mentor",
];
const sectionIds = ["welcome", "who", "intro", "extra"];

const sectionContent = (currentIndex) => ({
  welcome: <WelcomeSection currentIndex={currentIndex} />,
  who: <Whoareyou currentIndex={currentIndex} />,
  intro: <Intro currentIndex={currentIndex} /> ,
  extra: (
    <div className="text-3xl font-custom text-white text-center">
      
    </div>
  ),
});

function CenteredOverlay() {
  const [currentSection, setCurrentSection] = useState("welcome");
  const [show, setShow] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const int = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % keywords.length);
    }, 1800); // Change every 1.8 seconds
    return () => clearInterval(int);
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      let found = null;
      for (let id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom > window.innerHeight / 2
          ) {
            found = id;
            break;
          }
        }
      }
      setCurrentSection(found);
      // Hide overlay if not in any of the four sections
      setShow(!!found);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-40 pointer-events-none">
      <div className=" flex items-center justify-center transition-all duration-500">
        {sectionContent(currentIndex)[currentSection]}
      </div>
    </div>
  );
}

export default CenteredOverlay;