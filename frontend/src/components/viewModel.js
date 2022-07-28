import React, { Suspense, useEffect } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Environment, OrbitControls } from '@react-three/drei'

const ViewModel = () => {
  const Model = () => {
    const gltf = useLoader(GLTFLoader, "./scene.gltf");
    return (
      <>
        <primitive object={gltf.scene} scale={0.4} />
      </>
    );
  };

  const showModel = () => {
    return (
      <Canvas style={{height : '100vh'}}>
        <Suspense fallback={null}>
          <Model />
          <OrbitControls />
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas>
    );
  };


  return <div>
    {showModel()}
  </div>;
};

export default ViewModel;
