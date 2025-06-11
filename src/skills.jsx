import { Bloom, EffectComposer, ToneMapping } from "@react-three/postprocessing";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cyl from "./Cyl";
import React, { useState, useEffect } from 'react';
import Techstack from './components/techstack';
import Book from './components/book';

const GradientFadeSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className=" w-full mt-0">

      {/* Gradient Fade Section */}
      <div 
        className={`
          relative w-full min-h-screen
          transition-all duration-1000 ease-out
          ${isVisible 
            ? 'opacity-100 translate-y-0 blur-none' 
            : 'opacity-0 translate-y-8 blur-sm'
          }
        `}
        style={{
          background: `
            radial-gradient(circle at top center, 
              #338ae3 0%, 
              #0032d3 15%, 
              #050c30 35%, 
              #010102 50%, 
              #212121 100%
            )
          `
        }}
      >
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen mt-0 py-0 px-8 text-center">
          <div className="mt-0 mb-0 w-screen h-[500px]">
            <Canvas camera={{ position: [0, 0 ,1], fov: 100 }}>
              <OrbitControls />
              <ambientLight intensity={10} />
              <directionalLight position={[8, 0, 0]} intensity={0.03} />

              {/* Position the model at the origin and keep it upright */}
              <Cyl position={[0, 0, 0]} rotation={[0, 0, 0]} />

              <EffectComposer>
                <ToneMapping adaptive exposure={3.5} />
                <Bloom
                  mipmapBlur
                  intensity={12}
                  luminanceThreshold={3}
                  luminanceSmoothing={0}
                  radius={0.5}
                />
              </EffectComposer>
            </Canvas>
          </div>
          <h1 className="text-5xl md:text-7xl font-custom text-gray-200 mb-0 drop-shadow-lg">
            Technical Skills 
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-0 max-w-2xl leading-relaxed">
            What I Bring to the Table
          </p>
        </div>
        <Techstack/>
        <section id="experience"><Book/></section>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#0032d3] opacity-20 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-[#0032d3] opacity-15 rounded-full blur-lg"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#0032d3] opacity-25 rounded-full blur-md"></div>
      </div>
    </div>
  );
};

export default GradientFadeSection;
