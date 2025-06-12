import { FaGithub, FaLinkedin } from "react-icons/fa";

const keywords = [
  "Full Stack Developer",
  "Engineer",
  "Problem Solver",
  "ThreeD Web Developer",
  "Team Leader",
  "AI/ML Enthusiast",
  "Data Analyst",
];
const sectionIds = ["welcome", "who", "intro", "extra"];

function WelcomeSection({ currentIndex }) {
  return (
    <div
      className="pointer-events-auto flex flex-col alignItems-center relative w-screen h-screen px-8 py-16"
      style={{
        gap: "2rem",
      }}
    >
      {/* Huge Gothic Heading */}
      <h1
        className="text-gray-800 font-custom text-[4rem] md:text-[8rem] pl-16 pt-4 text-left leading-none"
        style={{
          letterSpacing: "0.03em",
          textShadow: "0 4px 24px #000a,0 1px 0px #fff2",
          marginBottom: "1.0rem",
        }}
      >
       <span  className="text-[2rem] md:text-[5rem] "> Hi I am </span> <br/> Richa Suryawanshi
      </h1>

      {/* Subheading & Buttons Row */}
      <div
        className="flex flex-row md:flex-col items-left justify-center pl-16 gap-6 w-full"
        style={{ minHeight: 72 }}
      > 
        <div className="flex flex-col md:flex-row items-center justify-start gap-6 " >
          {/* Resume Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-0 md:ml-10 px-8 py-3 rounded-full bg-gradient-to-r from-[#0e12eb] to-[#989b9c] hover:from-gray-800 hover:to-gray-700 text-white font-bold text-lg shadow-lg transition-all duration-300 border-2 border-[#989b9c] hover:border-[#0e12eb]"
              style={{
                boxShadow: "0 4px 32px #000a",
                letterSpacing: "0.03em",
                marginLeft: "0",
                minWidth: 180,
              }}
            >
              Download Resume
            </a>

            {/* Social Icons */}
            <div className="flex flex-row gap-5 ml-0 md:ml-10">
          
              <a
                href="https://github.com/RichaGeeks"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="transition-all hover:scale-110"
                style={{
                  color: "#fff",
                  background: "rgba(40,40,40,0.8)",
                  borderRadius: "100%",
                  padding: "0.6rem",
                  boxShadow: "0 2px 18px #0007",
                  lineHeight: 0,
                }}
              >
                <FaGithub size={32} />
              </a>
              <a
                href="https://www.linkedin.com/in/richa-suryawanshi-012bb1255"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition-all hover:scale-110"
                style={{
                  color: "#0A66C2",
                  background: "rgba(240,240,255,0.92)",
                  borderRadius: "100%",
                  padding: "0.6rem",
                  boxShadow: "0 2px 18px #0006",
                  lineHeight: 0,
                }}
              >
                <FaLinkedin size={32} />
              </a>
            </div>
          </div>
        {/* Animated Subheading */}
        <div className="text-xl md:text-3xl text-gray-800 font-medium transition-all duration-500 relative min-w-[220px] text-center md:text-left">
          <span className="opacity-60">I'm a </span>
          <span
            key={keywords[currentIndex]}
            className="inline-block font-custom text-gray-800 gothic-keyword"
            style={{
              fontSize: "1.2em",
              minWidth: 140,
              transition:
                "opacity 0.45s cubic-bezier(.4,2,.6,1), transform 0.45s cubic-bezier(.4,2,.6,1)",
              opacity: 1,
              textShadow: "0 2px 12px #0008",
              willChange: "opacity,transform",
              animation: "fadeInUp 0.7s",
            }}
          >
            {keywords[currentIndex]}
          </span>
          <style>{`
            @keyframes fadeInUp {
              0% { opacity: 0; transform: translateY(30%);}
              55% { opacity: 1; transform: translateY(0);}
              100% { opacity: 1; transform: translateY(0);}
            }
          `}</style>
        </div>
      </div>
    </div>
  );
}

export default WelcomeSection;
