import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style.css";
import { Bloom, EffectComposer, ToneMapping } from "@react-three/postprocessing";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cyl from "./Cyl";
import Faqs from "./FAQs";
import Nav from './verticlenav';
import Home from './home';
import ModelPage from './skills';
import NotFound from './404pagenotfound';
import Experience from './experience';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/model" element={<ModelPage />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </Router>
  );
};

export default App;



//#212121,#F4F4F4,#43A047,#F4511E,#7659ea
//white #F4F4F4,purple #7659EA,cyan #7cfce3,black #212121,orange #F4511E


{/*<div >
    <Canvas camera={{ fov: 30 }} >
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
    </Canvas>
</div> */}