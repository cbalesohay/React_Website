import React from 'react';
import { Environment, OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

export default function Iphone() {
  const iphone = useGLTF('./iphone.glb')
  return (
    <Canvas camera={{fov: 15, position: [5,5,5]}} intensity={0.6} fallback={null}>
      <OrbitControls enableZoom={false} autoRotate/>
      <primitive object={iphone.scene}/>
      <Environment preset='city'/>
    </Canvas>
  );
};

useGLTF.preload('./iphone.glb')
