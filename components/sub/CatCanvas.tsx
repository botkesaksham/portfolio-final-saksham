"use client"
import React from "react";
import { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "/cat_and_books/scene.gltf");

  return <primitive object={gltf.scene} scale={0.16} />;
};

export default function CatCanvas() {
  return (
    <div style={{ width: '600px', height: '500px'}}>
      <Canvas
        camera={{
          fov: 25,
          near: 0.4,
          far: 1000,
          position: [2, 3, 3]
        }}
      >
        <ambientLight intensity={0.8} />
        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[100, 30, 100]} castShadow />
        <Suspense fallback={null}>
          <Model />
          <Environment preset="studio" />
        </Suspense>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
