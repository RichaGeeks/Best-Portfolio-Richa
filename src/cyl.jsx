import React, {useRef} from 'react';

import { useTexture } from "@react-three/drei" ;
import * as THREE from "three";
import {useFrame} from "@react-three/fiber";

const Cyl = () => {

  let tex= useTexture("./cylindercover.png");
  //tex.needsUpdate = true;
  let cyll = useRef(null);

  useFrame((state,delta)=> {
      cyll.current.rotation.y += delta ; 

  });

  return (
    <group rotation={[0,0,0]}>
        <mesh ref={cyll} >
            <cylinderGeometry args = {[1,1,1, 60,60,true ]}/>
            <meshStandardMaterial  map={tex} transparent side={THREE.DoubleSide} metalness={0.7} roughness={0.1} />
        </mesh>
    </group>
  )
};

export default Cyl;