import React from 'react';
import "./style.css";
import { Bloom, EffectComposer, ToneMapping } from "@react-three/postprocessing";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Cyl from "./cyl";

const App = () => {
  return (
    <Canvas camera={{ fov: 30 }} >
      <OrbitControls />
      <ambientLight intensity={8} />
      <directionalLight  position={[8, 0, 0]} intensity={0.03} />
      <Cyl />
      <EffectComposer>
        <ToneMapping adaptive={false} exposure={3.5} />
        <Bloom
          mipmapBlur
          intensity={5}
          luminanceThreshold={0.8}
          luminanceSmoothing={0.7}
        />
      </EffectComposer>
    </Canvas>
  );
};

export default App;