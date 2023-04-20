import React from 'react';
import { Environment, OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

export default function Keyboard() {
  const mechanical_keyboard = useGLTF('./mechanical_keyboard.glb')
  return (
    <Canvas camera={{fov: 15, position: [5,5,5]}} intensity={0.6} fallback={null}>
      <OrbitControls enableZoom={false} autoRotate/>
      <primitive object={mechanical_keyboard.scene}/>
      <Environment preset='city'/>
    </Canvas>
  );
};

useGLTF.preload('./mechanical_keyboard.glb')