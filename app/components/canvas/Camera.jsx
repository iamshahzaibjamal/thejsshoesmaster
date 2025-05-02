import React, { useContext, useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import StoreContext from '@/app/context/Store';

const Camera = ({ children }) => {
  const group = useRef();
  const { state } = useContext(StoreContext);
  const [targetPosition, setTargetPosition] = useState([-3.8, 0, 1.5]);
  const [interpolationFactor, setInterpolationFactor] = useState(0.01);

  // Linear interpolation function
  const lerp = (start, end, t) => {
    return start * (1 - t) + end * t;
  };

  useFrame((state1, delta) => {
    const currentPosition = state1.camera.position;
    const target = targetPosition;

    if (!state.isFullScreen) {
      // Increase the interpolation factor gradually until it reaches 0.1
      setInterpolationFactor(Math.min(interpolationFactor + 0.009, 0.2));

      // Interpolate each axis independently
      const newPosition = {
        x: lerp(currentPosition.x, target[0], interpolationFactor),
        y: lerp(currentPosition.y, target[1], interpolationFactor),
        z: lerp(currentPosition.z, target[2], interpolationFactor)
      };

      // Update the camera position
      state1.camera.position.set(newPosition.x, newPosition.y, newPosition.z);
    }
  });

  // Update target position when state changes
  useEffect(() => {
    switch (state.selectedMesh) {
      case 1:
        setTargetPosition([-3.4, 0, 1]);
        break;
      case 2:
        setTargetPosition([-2.8, -2.2, 0.3]);
        break;
      case 3:
        setTargetPosition([-1.7, -2.2, -1.5]);
        break;
      case 4:
        setTargetPosition([-1.1, 3.0, -0.25]);
        break;
      case 5:
        setTargetPosition([-1.1, 3.0, -0.25]);
        break;
      default:
        setTargetPosition([-3.8, 0, 1.5]);
        break;
    }
    // Reset interpolation factor when target changes
    setInterpolationFactor(0.01);
  }, [state.selectedMesh]);

  return <group ref={group}>{children}</group>;
};

export default Camera;
