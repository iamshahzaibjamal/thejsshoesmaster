"use client"
import React, { useContext, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import StoreContext from '@/app/context/Store';

export function Shoes(props) {
  const { state, actions } = useContext(StoreContext);
  const { nodes, materials } = useGLTF('/shoe/shoe.glb');
  const leatherTexture = useLoader(TextureLoader, state.leatherTexture.texture);
  const soleTexture = useLoader(TextureLoader, state.soleTexture.texture);
  const handleClick = (index) => {
    actions.setSelectedMesh(index);
  };

  const meshData = [
    { label: "sole", geometry: nodes.BezierCurve003.geometry, material: materials['Yarn.001'] },
    { label: "sole", geometry: nodes.BezierCurve003_1.geometry, material: materials.sole },
    { label: "sole", geometry: nodes.BezierCurve003_2.geometry, material: materials['solen rand'] },
    { label: "sole", geometry: nodes.BezierCurve003_3.geometry, material: materials['Hat.001'] },
    { label: "leather", geometry: nodes.BezierCurve003_4.geometry, material: materials.shoe },
    { label: "sole", geometry: nodes.BezierCurve003_5.geometry, material: materials.Innensole },
    { label: "sole", geometry: nodes.BezierCurve003_6.geometry, material: materials.Futter },
    { label: "sole", geometry: nodes.BezierCurve003_7.geometry, material: materials['Material.001'] },
    { label: "sole", geometry: nodes.BezierCurve003_8.geometry, material: materials.senkel },
  ];

  return (
    <group {...props} dispose={null} scale={[18, 18, 18]} position={[0.8, -1, 0.45]}>
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
      <pointLight position={[-5, 5, 5]} intensity={0.5} castShadow />
      {meshData.map((mesh, index) => (
        <mesh
          key={index}
          geometry={mesh.geometry}
          material={mesh.material}
          onClick={() => handleClick(index)}
          castShadow receiveShadow
        >
          {(mesh.label === "leather") && <meshBasicMaterial map={leatherTexture} />}
          {(index === 2) && <meshBasicMaterial map={soleTexture} />}
        </mesh>
      ))}
    </group>
  );
}

useGLTF.preload('/shoe/shoe.glb');

