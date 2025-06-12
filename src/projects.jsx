import { useState } from 'react';

const Projects = () => {
  return (
    <div className=" relative bg-white z-20 text-gray-900 min-h-screen">

      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-center font-custom text-7xl mb-10">PROJECTS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <FeatureCard 
           
            imageSrc="/images/mockaiproj.png"
            imageAlt="Laptop showing study room interface"
          />
          <div className="flex flex-col ">
              <Cardinformation 
                title="Mock AI Interview" 
                description={
                  <>
                    A web-based platform that simulates mock interviews using AI-generated questions and voice input. 
                    Enables users to practice technical interviews with questions generated via AI <br/>
                    
                  </>
                }
              />
              <div className=" mt-4 flex justify-center">
                  <a href="https://github.com/RichaGeeks/Mock-AI-Interview"><button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    Github
                  </button>
                  </a>
              </div>
          </div>
          <div className="flex flex-col hidden sm:block">
              <Cardinformation 
                title="ThreeD Dragon" 
                description={
                  <>
                    Built using Three.js, GLTFLoader and OrbitControls, this project features a fully animated 3D dragon model that responds dynamically to scroll events. Whether you're here for the fire breathing aesthetics or the code wizardry this one's for you.
                  </>
                }
              />
              <div className="flex mt-4 justify-center">
                  <a href="https://github.com/RichaGeeks/Dragon-three.js " ><button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    Github
                  </button>
                  </a>
                  <a href="https://dragon-threejs-richa.netlify.app/">
                  <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    Live Demo
                  </button>
                  </a>
              </div>
          </div>
          <FeatureCard 
            imageSrc="/images/dragonproj.png"
            imageAlt="Laptop showing group study room"
          />
          <div className="flex flex-col block sm:hidden">
              <Cardinformation 
                title="ThreeD Dragon" 
                description={
                  <>
                    Built using Three.js, GLTFLoader and OrbitControls, this project features a fully animated 3D dragon model that responds dynamically to scroll events. Whether you're here for the fire breathing aesthetics or the code wizardry this one's for you.
                  </>
                }
              />
              <div className="flex mt-4 justify-center">
                  <a href="https://github.com/RichaGeeks/Dragon-three.js " ><button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    Github
                  </button>
                  </a>
                  <a href="https://dragon-threejs-richa.netlify.app/">
                  <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    Live Demo
                  </button>
                  </a>
              </div>
          </div>

          <FeatureCard 
            imageSrc="/images/weathergreekproj.png"
            imageAlt="Laptop showing tutor help interface"
          />

          <div className="flex flex-col">
              <Cardinformation 
                title="Weather Greek Hackathon Winner " 
                description={
                  <>
                    A mythical weather tracking dashboard inspired by the world of Greek gods. Weather Greek is a frontend-only project built with React, designed during a hackathon and secured 3rd place among top innovative solutions. 
                  </>
                }
              />
              <div className="flex mt-4 justify-center">
                  <a href="https://github.com/RichaGeeks/WeatherGreek-main" > 
                  <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    Github
                  </button>
                  </a>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({  imageSrc, imageAlt }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
    <article 
      className="relative bg-[#f7f6f5] rounded-lg p-10 flex flex-col items-center mx-12 h-full transition-transform duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute w-[380px] h-[240px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 skew-y-[-10deg] rounded-3xl z-0 bg-gradient-to-br from-[#0e12eb] to-[#989b9c]  "></div>
      
      <div className="mb-0 relative z-10 w-[460px] h-[200px] flex items-center justify-center">
        <div className={`transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}>
          <img 
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-auto max-w-[420px] object-cover"
            style={{
              filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))',
              transform: 'perspective(800px) rotateX(5deg) rotateY(-5deg)'
            }}
          />
        </div>
      </div>
      
      
    </article>
    </>
  );
};

const Cardinformation = ({ title, description}) => {

  return (
       <div className= "flex flex-col ">
            <h3 className="font-custom text-center mt-10 mb-2 z-10  text-2xl">{title}</h3>
            <p className=" text-sm z-10 px-12 text-gray-700 text-center leading-relaxed">
            {description}
            </p>
        </div>
  
  ); };

export default Projects;