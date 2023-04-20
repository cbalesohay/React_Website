import React from 'react';
import { Environment, OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

export default function Web() {
  const flat_design_web = useGLTF('./flat_design_web.glb')
  return (
    <Canvas camera={{fov: 85, position: [4,4,4]}} intensity={0.6} fallback={null}>
      <OrbitControls enableZoom={false} autoRotate/>
      <primitive object={flat_design_web.scene}/>
      <Environment preset='city'/>
    </Canvas>
  );
};

useGLTF.preload('./flat_design_web.glb')