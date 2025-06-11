import React, { useRef, useEffect, useState } from 'react';

const Techstack = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillsCategories = [
    {
      title: "Frontend Development",
      icon: "./techstackimages/frontend.png",
      gradient: "from-[#0e12eb] to-[#989b9c]",
      subcategories: ["Web", "Mobile"],
      skills: [ "HTML/CSS/JavaScript", "React", "Redux" ,"Next.js", "React Native", "Tailwind CSS", "Figma"]
    },
    //Flutter GSAP 
    {
      title: "Backend Development",
      icon: "./techstackimages/backend.png",
      gradient: "from-[#0e12eb] to-[#989b9c]",
      skills: ["Node.js", "Express.JS", "PostgreSQL","Firebase", "MongoDB", "REST APIs", "Postman"]
    },
//springboot django graphql
    {
      title: "Gen AI Integration",
      icon: "./techstackimages/genai.png",
      gradient: "from-[#0e12eb] to-[#989b9c]",
      skills: ["LLMs API", "LangChain", "RAG","Vector Database"]
    },
    //, "Diffusion Models", "Stable Diffusion", "GPT", "Transformers"
    {
      title: "Data Analytics",
      icon: "./techstackimages/datanalysis.png",
      gradient: "from-[#0e12eb] to-[#989b9c]",
      skills: ["Tableau"]
    },
    //"SQL", "Pandas", "Tableau", "Power BI", "BigQuery", "Data Visualization"
    {
      title: "ThreeD Interactive Web",
      icon: "./techstackimages/genai.png",
      gradient: "from-[#0e12eb] to-[#989b9c]",
      skills: ["Three.js", "React Three Fiber", "Blender"]
    },
    //, "Diffusion Models", "Stable Diffusion", "GPT", "Transformers"
  ];
      {/*
      title: "AI ML",
      icon: "./techstackimages/ml.png",
      gradient:"from-[#0e12eb] to-[#989b9c]",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Computer Vision", "NLP", "Reinforcement Learning"]
    },
    {
      title: "DevOps",
      icon: "./techstackimages/devops.png",
      gradient: "from-[#0e12eb] to-[#989b9c]",
      skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform", "Monitoring"]
    */}
  return (
    <div className="mt-8 px-6 ">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in-scale {
          animation: fadeInScale 0.6s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse 2s ease-in-out infinite;
        }

        .skill-card {
          opacity: 0;
          transform: translateY(40px) scale(0.9);
        }

        .skill-card.visible {
          animation: fadeInScale 0.6s ease-out forwards;
        }

        .skill-tag {
          opacity: 0;
          transform: translateY(20px);
        }

        .skill-tag.visible {
          animation: fadeInUp 0.4s ease-out forwards;
        }
      `}</style>

      <div className="max-w-screen mt-0 mx-auto">


        {/* Skills Grid */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsCategories.map((category, index) => (
            <div
              key={index}
              className={`skill-card group relative overflow-hidden rounded-2xl  backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                isVisible ? 'visible' : ''
              }`}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Glowing Edge Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-20 blur-xl transform scale-95 transition-all duration-500`}></div>
              
              <div className="relative p-8 h-full">
                {/* Header */}
                <div className="flex items-center mb-6">
                  {/*<div className={`text-4xl mr-4 p-3 rounded-xl bg-gradient-to-br ${category.gradient} bg-opacity-20 animate-float`}>
                    
                  <img
                        src={category.icon}
                        alt={`${category.title} icon`}
                        className="w-8 h-8 object-contain"
                    />
                  </div> */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-custom text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                      {category.title}
                    </h3>
                    {category.subcategories && (
                      <div className="flex gap-2 flex-wrap">
                        {category.subcategories.map((sub, i) => (
                          <span
                            key={i}
                            className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${category.gradient} text-white font-medium shadow-lg`}
                          >
                            {sub}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className={`skill-tag px-4 py-2  hover:bg-slate-600/60 text-slate-200 hover:text-white rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 cursor-default border border-slate-600/30 hover:border-slate-500/50 shadow-lg ${
                        isVisible ? 'visible' : ''
                      }`}
                      style={{
                        animationDelay: `${(index * 0.1) + (i * 0.05)}s`
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-[#0e12eb] rounded-full animate-pulse-slow"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-[#989b9c] rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div className={`mt-20  pb-14 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: '0.8s'}}>
          <div className="inline-flex items-center gap-2 text-slate-500">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-slate-500"></div>
            <span className="text-sm font-medium">Always learning, always growing</span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-slate-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Techstack;