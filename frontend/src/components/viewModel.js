import React, { Suspense } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const ViewModel = () => {
  const gltf = useLoader(GLTFLoader, "/scene.gltf");

  const showModel = () => {
    return (
      <Suspense fallback={null}>
        <primitive object={gltf.scene} />
      </Suspense>
    );
  };

  return <div></div>;
};

export default ViewModel;
