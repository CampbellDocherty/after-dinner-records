import { useRef, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const GLTF_FILE = import.meta.env.DEV ? '/poly.json' : '/adr/poly.json';

const Model = () => {
  const group = useRef(null);
  const { nodes } = useGLTF(GLTF_FILE);
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
      camera={{ position: [-18, 9, 12.25], fov: 14 }}
      style={{
        backgroundColor: '#0e161c',
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
      <OrbitControls maxDistance={30} />
    </Canvas>
  );
};

useGLTF.preload(GLTF_FILE);
