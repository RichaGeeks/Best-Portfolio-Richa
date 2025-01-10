import React from 'react';
import "./style.css"
import {Canvas} from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei" ;
const App = () => {

  return (
    <Canvas>
      <OrbitControls/>
      <ambientLight />
      <mesh>
        <cylinderGeometry/>
        <boxGeometry/>
        <meshStandardMaterial/>
      </mesh>
    </Canvas>
  )
};

export default App;