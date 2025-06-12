import { useEffect, useState } from "react";

const gothicFontUrl =
  "https://fonts.googleapis.com/css2?family=UnifrakturCook:wght@700&display=swap";

const whisperingWords = [
  "Dreams",
  "Vision",
  "Passion",
  "Innovation",
  "Magic",
  "Wonder",
];

const achievements = [
  "✦ Conjured 50+ Digital Realms",
  "⚡ Mastered Sacred Code Languages", 
  "🔮 Wielded Ancient & Modern Arts",
  "⭐ Guided Fellow Apprentices",
  "🌟 Breathed Life into Ideas",
  "💫 Transformed Visions to Reality",
];

function GothicIntroSection() {
  const [currentWhisperIndex, setCurrentWhisperIndex] = useState(0);
  const [visibleAchievements, setVisibleAchievements] = useState([]);
  const [particlesVisible, setParticlesVisible] = useState(false);

  useEffect(() => {
    // Add gothic font to document head
    const link = document.createElement("link");
    link.href = gothicFontUrl;
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  useEffect(() => {
    const whisperInterval = setInterval(() => {
      setCurrentWhisperIndex((prev) => (prev + 1) % whisperingWords.length);
    }, 3500);
    return () => clearInterval(whisperInterval);
  }, []);

  useEffect(() => {
    // Stagger achievement reveals with wave effect
    achievements.forEach((_, index) => {
      setTimeout(() => {
        setVisibleAchievements(prev => [...prev, index]);
      }, (index + 1) * 600);
    });

    // Show particles after initial load
    setTimeout(() => setParticlesVisible(true), 2000);
  }, []);

  return (
    <div className="min-h-screen w-screen flex items-center justify-start pl-8 md:pl-16 lg:pl-24 relative overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=UnifrakturCook:wght@700&display=swap');
        
        .font-gothic {
          font-family: 'UnifrakturCook', cursive;
        }
        
        .slide-in-left {
          animation: slideInLeft 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .fade-up-stagger {
          animation: fadeUpStagger 0.8s ease-out forwards;
        }
        
        .whisper-glow {
          animation: whisperGlow 3.5s ease-in-out infinite;
        }
        
        .floating-particles {
          animation: floatingParticles 8s linear infinite;
        }
        
        .wave-reveal {
          animation: waveReveal 0.6s ease-out forwards;
        }
        
        .shimmer-border {
          animation: shimmerBorder 3s linear infinite;
        }
        
        .pulse-glow {
          animation: pulseGlow 2s ease-in-out infinite alternate;
        }
        
        .glass-morphism {
          backdrop-filter: blur(10px);
          background: rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .neon-glow {
          animation: neonGlow 3s ease-in-out infinite alternate;
        }
        
        .glitch-text {
          animation: glitch 2s linear infinite;
        }
        
        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-100px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeUpStagger {
          0% {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes whisperGlow {
          0%, 100% { 
            text-shadow: 0 0 20px #6366f1, 0 0 40px #6366f1;
            filter: brightness(1);
          }
          50% { 
            text-shadow: 0 0 30px #ec4899, 0 0 60px #ec4899, 0 0 80px #ec4899;
            filter: brightness(1.2);
          }
        }
        
        @keyframes floatingParticles {
          0% { transform: translateY(100vh) translateX(-50px) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-10vh) translateX(-30px) rotate(360deg); opacity: 0; }
        }
        
        @keyframes waveReveal {
          0% {
            opacity: 0;
            transform: translateX(-30px) scale(0.95);
            filter: blur(5px);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
            filter: blur(0px);
          }
        }
        
        @keyframes shimmerBorder {
          0% { border-color: #0e12eb; box-shadow: 0 0 20px rgba(99, 102, 241, 0.3); }
          33% { border-color: [#0e12eb; box-shadow: 0 0 20px rgba(236, 72, 153, 0.3); }
          66% { border-color: #989b9c; box-shadow: 0 0 20px rgba(6, 182, 212, 0.3); }
          100% { border-color:#989b9c; box-shadow: 0 0 20px rgba(99, 102, 241, 0.3); }
        }
        
        @keyframes pulseGlow {
          0% {
            box-shadow: 0 0 20px rgba(99, 102, 241, 0.2);
          }
          100% {
            box-shadow: 0 0 40px rgba(236, 72, 153, 0.4), 0 0 60px rgba(99, 102, 241, 0.2);
          }
        }
        
        @keyframes neonGlow {
          0% {
            text-shadow: 0 0 5px #6366f1, 0 0 10px #6366f1, 0 0 15px #6366f1;
          }
          100% {
            text-shadow: 0 0 10px #ec4899, 0 0 20px #ec4899, 0 0 30px #ec4899;
          }
        }
        
        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
        }
      `}</style>

      {/* Floating Particles */}
      {particlesVisible && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-[#0e12eb] to-[#989b9c] rounded-full floating-particles"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 2}s`,
              }}
            />
          ))}
        </div>
      )}

      <div className="text-left max-w-4xl space-y-3 slide-in-left relative z-10">
        {/* Main Title with Modern Gothic Style */}
        <div className="relative">
          <h1 className="font-custom text-2xl md:text-3xl lg:text-4xl text-white mt-8 mb-0 pb-0 tracking-wider leading-none">
            About me 
          </h1>
        </div>

        {/* Modern Story Content */}
        <div className="pt-2 mt-0 fade-up-stagger rounded-2xl  backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50  hover:scale-105 hover:shadow-2xl">
          <pre className="text-xs md:text-xs p-4 lg:text-xs text-white font-light leading-relaxed max-w-4xl whitespace-pre-wrap" style={{ fontFamily: "monospace" }}>
            {`public class AboutMe {
                private String name = "Richa Suryawanshi";
                private String degree = "B.Tech in Electronics and Computer Engineering";
                private String specialization = "Honors in Data Science and Analytics";

                private List<String> techStack = Arrays.asList(
                    "Java", "React.js", "Node.js", "MongoDB",
                    "HTML/CSS", "JavaScript", "Git", "Express.js"
                );

                private List<String> softSkills = Arrays.asList(
                    "Problem Solving", "Team Collaboration", "Creative Thinking", "Curiosity-Driven Learning"
                );

                public void introduce() {
                    System.out.println("Hey, I'm " + name + ", a final-year engineering student with a passion for turning ideas into functional, elegant code.");
                }

                public void buildThings() {
                    System.out.println("From designing user-friendly frontends to structuring clean backend logic — I like building stuff that actually works.");
                }

                public void collaborate() {
                    System.out.println("I thrive in teams, contribute with clarity, and debug like it’s an Olympic sport.");
                }
            }`}
          </pre>
        </div>

        
      </div>
    </div>
  );
}

export default GothicIntroSection;


{/* 
{/* Modern Achievement Grid 
        <div className="space-y-8">
          <div className="flex items-center space-x-6">
            <div className="w-12 h-px bg-gradient-to-r from-indigo-400 to-transparent"></div>
            <h2 className="text-xl md:text-2xl text-white font-light tracking-widest uppercase">
              Milestones
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
          </div>

          {/* Clean Achievement Cards 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`group p-6 glass-morphism rounded-lg transition-all duration-700 hover:scale-105 wave-reveal ${
                  visibleAchievements.includes(index) 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-12'
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-pink-400 rounded-full group-hover:animate-ping"></div>
                  <span className="text-gray-300 font-light text-sm md:text-base tracking-wide">
                    {achievement}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Modern Signature Quote 
          <div className="relative mt-20 p-8 glass-morphism rounded-lg pulse-glow">
            <div className="text-center space-y-6">
              <blockquote className="text-lg md:text-xl text-gray-200 font-light leading-relaxed italic">
                "Design is not just what it looks like and feels like.<br />
                Design is how it works."
              </blockquote>
              <div className="flex justify-center items-center space-x-6 mt-8">
                <div className="w-8 h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent"></div>
                <cite className="text-base text-gray-400 font-light tracking-widest not-italic">RICHA</cite>
                <div className="w-8 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>    
*/}