import { useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Shoes } from './Shoes';
import { extend, useThree } from '@react-three/fiber';
import { Environment } from '@react-three/drei';

extend({ OrbitControls });

const Scene = () => {
  const cameraRef = useRef();
  const { gl, camera } = useThree(); // 'scene' is not used here

  return (
    <>
      <perspectiveCamera ref={cameraRef} position={[0, 0, 15]} />
      <ambientLight intensity={3} />
      <Environment preset="lobby"/>
      <Shoes/>
    </>
  );
};

export default Scene;
