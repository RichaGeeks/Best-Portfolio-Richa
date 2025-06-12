import React, { useEffect, useState, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";
import CenteredOverlay from "./components/fixedhero";
import RotatingCircularText from "./components/rotatingcirculartext";


// Helper for smooth interpolation
function damp(current, target, lambda, delta) {
  return THREE.MathUtils.damp(current, target, lambda, delta);
}

// 3D Model Component with smooth transitions
function DragonModel({ targetConfig, transitionActive, visible }) {
  const group = useRef();
  const { camera } = useThree();
  const { scene, animations } = useGLTF("/astraiamodel.glb");
  const { actions } = useAnimations(animations, group);

  // Play animation if available
  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      const firstAnimationKey = Object.keys(actions)[0];
      actions[firstAnimationKey]?.play();
    }
  }, [actions]);

  // Set initial values to exact config on mount or snap
  useEffect(() => {
    if (!transitionActive && group.current) {
      group.current.position.set(
        targetConfig.position.x,
        targetConfig.position.y,
        targetConfig.position.z
      );
      group.current.rotation.set(
        targetConfig.rotation.x,
        targetConfig.rotation.y,
        targetConfig.rotation.z
      );
      group.current.scale.set(
        targetConfig.scale.x,
        targetConfig.scale.y,
        targetConfig.scale.z
      );
      group.current.visible = visible;

      camera.position.set(
        targetConfig.camera.position.x,
        targetConfig.camera.position.y,
        targetConfig.camera.position.z
      );
      camera.fov = targetConfig.camera.fov;
      camera.updateProjectionMatrix();
    }
  }, [targetConfig, transitionActive, visible, camera]);

  // Animate smoothly only during transition
  useFrame((state, delta) => {
    if (!transitionActive || !group.current) return;

    // Model
    group.current.position.x = damp(
      group.current.position.x,
      targetConfig.position.x,
      3,
      delta
    );
    group.current.position.y = damp(
      group.current.position.y,
      targetConfig.position.y,
      3,
      delta
    );
    group.current.position.z = damp(
      group.current.position.z,
      targetConfig.position.z,
      3,
      delta
    );

    group.current.rotation.x = damp(
      group.current.rotation.x,
      targetConfig.rotation.x,
      3,
      delta
    );
    group.current.rotation.y = damp(
      group.current.rotation.y,
      targetConfig.rotation.y,
      3,
      delta
    );
    group.current.rotation.z = damp(
      group.current.rotation.z,
      targetConfig.rotation.z,
      3,
      delta
    );

    group.current.scale.x = damp(
      group.current.scale.x,
      targetConfig.scale.x,
      3,
      delta
    );
    group.current.scale.y = damp(
      group.current.scale.y,
      targetConfig.scale.y,
      3,
      delta
    );
    group.current.scale.z = damp(
      group.current.scale.z,
      targetConfig.scale.z,
      3,
      delta
    );

    group.current.visible = visible;

    // Camera
    camera.position.x = damp(
      camera.position.x,
      targetConfig.camera.position.x,
      3,
      delta
    );
    camera.position.y = damp(
      camera.position.y,
      targetConfig.camera.position.y,
      3,
      delta
    );
    camera.position.z = damp(
      camera.position.z,
      targetConfig.camera.position.z,
      3,
      delta
    );
    camera.fov = damp(camera.fov, targetConfig.camera.fov, 3, delta);
    camera.updateProjectionMatrix();
  });

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}

function CameraController() {
  const { camera } = useThree();
  useEffect(() => {
    camera.lookAt(0, 0, 0);
  }, [camera]);
  return null;
}

export default function ScrollingWebsite() {
  // 4 sections, spaced out for slower/smoother transitions
  const sectionList = [
    {
      id: "welcome",
      name: "welcome",
      config: {
        position: { x: 0, y: 3, z: 6 },
        rotation: { x: 0, y: 0, z: 0 },
        scale: { x: 0.1, y: 0.1, z: 0.1 },
        camera: { position: { x: 0, y: 0, z: 12 }, fov: 100 },
      },
    },
    {
      id: "who",
      name: "who",
      config: {
        position: { x: 6, y: 2, z: 1 },
        rotation: { x: 0, y: 0.6, z: 0 },
        scale: { x: 4.2, y: 4.2, z: 4.2 },
        camera: { position: { x: 8, y: 2, z: 9 }, fov: 42 },
      },
    },
    {
      id: "intro",
      name: "intro",
      config: {
        position: { x: -4, y: 2, z: -5 },
        rotation: { x: -0.1, y: -0.8, z: 0 },
        scale: { x: 1.5, y: 1.5, z: 1.5 },
        camera: { position: { x: -5.8, y: 2, z: 8 }, fov: 10 },
      },
    },
    {
      id: "extra",
      name: "extra",
      config: {
        position: { x: 0, y: -6, z: -1 },
        rotation: { x: 1, y: 1, z: 0 },
        scale: { x: 1.1, y: 1.1, z: 1.1 },
        camera: { position: { x: 0, y: -6, z: 9 }, fov: 4 },
      },
    }
  ];

  // Always use same initial camera for Canvas for consistency!
  const initialCamera = {
    position: [
      sectionList[0].config.camera.position.x,
      sectionList[0].config.camera.position.y,
      sectionList[0].config.camera.position.z,
    ],
    fov: sectionList[0].config.camera.fov,
  };

  const [currentSection, setCurrentSection] = useState(sectionList[0].id);
  const [transitionActive, setTransitionActive] = useState(false);
  const [targetConfig, setTargetConfig] = useState(sectionList[0].config);

  // Section transition detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let foundSection = sectionList[0].id;
      let foundConfig = sectionList[0].config;
      let foundIndex = 0;
      sections.forEach((section, i) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = window.scrollY + rect.top;
        const sectionBottom = sectionTop + rect.height;
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          foundSection = section.id;
          foundConfig = sectionList.find((s) => s.id === section.id)?.config;
          foundIndex = i;
        }
      });

      // When within 30% of the section from top or bottom, start transition
      const rect = sections[foundIndex]?.getBoundingClientRect();
      const sectionTop = rect ? window.scrollY + rect.top : 0;
      const sectionBottom = sectionTop + (rect ? rect.height : 0);
      const buffer =
        rect && rect.height ? Math.max(200, rect.height * 0.3) : 200;
      let transitioning = false;
      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + buffer
      ) {
        transitioning = true;
      } else if (
        scrollPosition > sectionBottom - buffer &&
        scrollPosition <= sectionBottom
      ) {
        transitioning = true;
      }

      setTransitionActive(transitioning);
      setCurrentSection(foundSection);
      setTargetConfig(foundConfig);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line
  }, []);

  // Navigation scroll
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Only show model on all four sections
  const isModelVisible = sectionList.map(s => s.id).includes(currentSection);

  // Section heights: less than before for less scrolling
  const sectionHeight = "100vh";

  return (
    <div
      className="relative min-h-screen"
      style={{ minHeight: "100vh", overflowX: "hidden" }}
    >
      {/* Fixed 3D Canvas Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas
          camera={{
            position: initialCamera.position,
            fov: initialCamera.fov
          }}
          gl={{ alpha: true, antialias: true }}
        >
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />

          <DragonModel
            targetConfig={targetConfig}
            transitionActive={transitionActive}
            visible={isModelVisible}
          />
          <CameraController />

          {/* OrbitControls only enabled in first section */}
          <OrbitControls
            enabled={currentSection === sectionList[0].id}
            enableDamping={true}
            dampingFactor={0.05}
          />
        </Canvas>
      </div>


      {/* Overlay */}
      <CenteredOverlay />

      {/* Content Sections */}
      <div className="relative z-10" style={{ pointerEvents: "auto" }}>
        {/* Home Section */}
        <section
          id="welcome"
          className="section flex items-center justify-center"
          style={{ minHeight: sectionHeight }}
        >
          
        </section>

        {/* About Section */}
        <section
          id="who"
          className="section flex items-center justify-center"
          style={{ minHeight: sectionHeight }}
        >
          

        </section> 

        {/* Services Section */}
        <section
          id="intro"
          className="section flex items-center justify-center"
          style={{ minHeight: sectionHeight }}
        >
        </section>

        {/* Contact Section */}
        <section
          id="extra"
          className="section flex items-center justify-center"
          style={{ minHeight: sectionHeight }}
        >
        </section>
      </div>


      {/* Rotating Circular Text */}
      <div
        className="fixed bottom-8 right-8 z-30 pointer-events-none select-none"

        aria-label="Rotating circular signature"
       >
        <RotatingCircularText text=" RICHA SURYAWANSHI" radius={45} speed={10} />
       </div>
    </div>
  );
}