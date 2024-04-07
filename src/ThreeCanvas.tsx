import { useRef, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const Model = () => {
  const group = useRef(null);
  const { nodes } = useGLTF('src/poly.gltf');
  const node = nodes['Node_#0'] as THREE.Mesh;
  return (
    <group ref={group} dispose={null}>
      <mesh geometry={node.geometry} material={node.material} />
    </group>
  );
};

export const ThreeCanvas = () => {
  return (
    <Canvas
      camera={{ position: [2, 0, 12.25], fov: 15 }}
      style={{
        backgroundColor: '#111a21',
        width: '100vw',
        height: '100vh',
      }}
    >
      <ambientLight intensity={1.25} />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={0.4} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

useGLTF.preload('src/poly.gltf');
