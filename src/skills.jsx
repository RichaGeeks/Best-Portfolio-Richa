const ModelPage = () => (
  <div className="h-screen w-screen">
    <Canvas camera={{ fov: 30 }}>
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
  </div>
);

export default ModelPage;