//with helpers 
import React, { Suspense, useEffect } from 'react';
import { Canvas, useLoader, useThree } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useControls } from 'leva';

const Model = ({ position, scale }) => {
  const gltf = useLoader(GLTFLoader, '/astraiamodel.glb');
  return (
    <primitive object={gltf.scene} position={position} scale={scale} />
  );
};

const CameraController = ({ camX, camY, camZ, fov }) => {
  const { camera } = useThree();

  useEffect(() => {
    // Update camera position and FOV imperatively
    camera.position.set(camX, camY, camZ);
    camera.fov = fov;
    camera.updateProjectionMatrix();
  }, [camX, camY, camZ, fov, camera]);

  return null; // no JSX rendered
};

const ModelViewer = () => {
  const { camX, camY, camZ, fov } = useControls('Camera', {
    camX: { value: 2, min: -10, max: 10, step: 0.1 },
    camY: { value: 3, min: -10, max: 10, step: 0.1 },
    camZ: { value: 5.8, min: 0, max: 20, step: 0.1 },
    fov: { value: 5, min: 1, max: 100, step: 1 },
  });

  const { modelPosX, modelPosY, modelPosZ, modelScale } = useControls('Model', {
    modelPosX: { value: 0, min: -5, max: 5, step: 0.1 },
    modelPosY: { value: 0, min: -5, max: 5, step: 0.1 },
    modelPosZ: { value: 0, min: -5, max: 5, step: 0.1 },
    modelScale: { value: 1, min: 0.1, max: 10, step: 0.1 },
  });

  return (
    <Canvas camera={{ position: [camX, camY, camZ], fov }}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[2, 5, 2]} intensity={1} />
      <Suspense fallback={null}>
        <Environment preset="studio" background={false} />
        <Model
          position={[modelPosX, modelPosY, modelPosZ]}
          scale={[modelScale, modelScale, modelScale]}
        />
      </Suspense>
      {/* Imperatively update camera */}
      <CameraController camX={camX} camY={camY} camZ={camZ} fov={fov} />
      <OrbitControls />
    </Canvas>
  );
};

export default ModelViewer;




{/*import React, { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls , Environment } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Model = () => {
  const gltf = useLoader(GLTFLoader, '/astraiamodel.glb'); // put your .glb file in public/

  return <primitive object={gltf.scene} scale={1} />;
};

const ModelViewer = () => {
  return (
    <Canvas camera={{ position: [2, 3, 5.8], fov: 5 }}>
      {/* Neutral lighting for clean material view 
      <ambientLight intensity={1.5} />
      <directionalLight position={[2, 5, 2]} intensity={1} />
      <Suspense fallback={null}>
        <Environment preset="studio" background={false} />
        <Model />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default ModelViewer; */}
