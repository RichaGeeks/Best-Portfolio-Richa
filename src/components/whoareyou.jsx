import { useEffect, useState } from "react";

const gothicFontUrl =
  "https://fonts.googleapis.com/css2?family=UnifrakturCook:wght@700&display=swap";

const mysteriousQuestions = [
  "Who are you",
  "What brings you here",
  "Seeking something special",
  "Looking for magic",
  "Drawn by curiosity",
];

const creativeLines = [
  "Guessing you're looking for Richa's skills...",
  "Perhaps you seek creative brilliance...",
  "Maybe you're hunting for innovation...",
  "Searching for technical artistry...",
  "Drawn to exceptional talent...",
];

function WhoAreYouSection() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

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
    const questionInterval = setInterval(() => {
      setCurrentQuestionIndex((prev) => (prev + 1) % mysteriousQuestions.length);
    }, 2500);
    return () => clearInterval(questionInterval);
  }, []);

  useEffect(() => {
    const lineInterval = setInterval(() => {
      setCurrentLineIndex((prev) => (prev + 1) % creativeLines.length);
    }, 3200);
    return () => clearInterval(lineInterval);
  }, []);

  useEffect(() => {
    const answerTimer = setTimeout(() => {
      setShowAnswer(true);
    }, 1500);
    return () => clearTimeout(answerTimer);
  }, []);

  return (
    <div className="min-h-screen w-screen flex items-center justify-end pr-8 md:pr-16 lg:pr-24">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=UnifrakturCook:wght@700&display=swap');
        
        .font-gothic {
          font-family: 'UnifrakturCook', cursive;
        }
        
        .mystical-glow {
          animation: mysticalGlow 4s ease-in-out infinite;
        }
        
        .fade-in-right {
          animation: fadeInFromRight 0.8s ease-out;
        }
        
        .subtle-float {
          animation: subtleFloat 6s ease-in-out infinite;
        }
        
        .text-reveal {
          animation: textReveal 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .gothic-border::before {
          content: '';
          position: absolute;
          top: -20px;
          right: -20px;
          bottom: -20px;
          left: -20px;
          border: 2px solid transparent;
          border-image: linear-gradient(45deg, #8b5cf6, #ec4899, #8b5cf6) 1;
          opacity: 0.3;
          animation: subtleFloat 8s ease-in-out infinite reverse;
        }
        
        @keyframes mysticalGlow {
          0%, 100% { 
            text-shadow: 0 0 20px #8b5cf6, 0 0 40px #8b5cf6, 0 0 60px #8b5cf6;
          }
          50% { 
            text-shadow: 0 0 30px #ec4899, 0 0 60px #ec4899, 0 0 90px #ec4899;
          }
        }
        
        @keyframes fadeInFromRight {
          0% { 
            opacity: 0; 
            transform: translateX(50px);
          }
          100% { 
            opacity: 1; 
            transform: translateX(0);
          }
        }
        
        @keyframes subtleFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes textReveal {
          0% { 
            opacity: 0; 
            transform: translateY(30px) scale(0.9);
          }
          100% { 
            opacity: 1; 
            transform: translateY(0) scale(1);
          }
        }
      `}</style>

      <div className="text-right max-w-2xl space-y-8 fade-in-right">
        {/* Main Question */}
        <div className="relative">
          <h1 
            key={currentQuestionIndex}
            className="font-custom text-4xl md:text-6xl lg:text-7xl text-white mystical-glow text-reveal subtle-float tracking-wider leading-tight"
          >
            {mysteriousQuestions[currentQuestionIndex]}
          </h1>
        </div>

        {/* Creative Line */}
        
          <div className="space-y-4 text-reveal">
            <p 
              className="text-lg md:text-xl  text-gray-300 font-light text-reveal tracking-wide"
              style={{
                textShadow: "0 2px 20px rgba(139, 92, 246, 0.3)",
              }}
            >
            You are at the right place. Welcome to my,
            </p>
            
            {/* Portfolio Statement */}
            <div className="mt-8 space-y-3">
              <p 
                className="font-custom text-3xl md:text-5xl text-white tracking-wide"
                style={{
                  textShadow: "0 4px 24px rgba(38, 72, 224, 0.4)",
                }}
              >
                Portfolio
              </p>
            </div>

            {/* Decorative Ornaments */}
            <div className="flex justify-end items-center space-x-4 mt-12 opacity-60">
              <div className="w-8 h-px bg-gradient-to-r from-[#0e12eb] to-[#989b9c]"></div>
              <div className="w-2 h-2 bg-[#0e12eb] rounded-full animate-pulse"></div>
              <div className="w-12 h-px bg-gradient-to-r from-[#0e12eb] to-[#989b9c]"></div>
              <div className="w-2 h-2 bg-[#989b9c] rounded-full animate-pulse delay-75"></div>
              <div className="w-8 h-px bg-gradient-to-r from-[#0e12eb] to-[#989b9c]"></div>
            </div>
          </div>
        
      </div>
    </div>
  );
 }
    
 export default WhoAreYouSection;