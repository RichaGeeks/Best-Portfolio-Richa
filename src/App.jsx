import React from "react";
import "./style.css";
import { Bloom, EffectComposer, ToneMapping } from "@react-three/postprocessing";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cyl from "./Cyl";
import Faqs from "./FAQs";
import Quotes from "./quotes";
//#212121,#F4F4F4,#43A047,#F4511E,#7659ea
//white #F4F4F4,purple #7659EA,cyan #7cfce3,black #212121,orange #F4511E


const App = () => {


  console.log("Hello World This is Richa Suryawanshi");
  return (
    <div className="app-container bg-[#121111]">
      <div className=" text-[#ffffff]">Richa Suryawanshi </div>
      <h1 className=" text-[#ffffff]">Hello world This is Richa Suryawanshi</h1>
      <div >
          {/*<Canvas camera={{ fov: 30 }} >
            <OrbitControls />
            <ambientLight intensity={10} />
            <directionalLight position={[8, 0, 0]} intensity={0.03} />
            <Cyl />
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
          </Canvas>*/}
      </div>
      <div className="overlay">
        <h1>Hello World</h1>
        <Faqs />
        <Quotes/>
      </div>
    </div>
  );
};

export default App;
