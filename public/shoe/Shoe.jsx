

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/shoe.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.BezierCurve008.geometry} material={materials['Yarn.001']} />
      <mesh geometry={nodes.BezierCurve008_1.geometry} material={materials.sole} />
      <mesh geometry={nodes.BezierCurve008_2.geometry} material={materials['solen rand']} />
      <mesh geometry={nodes.BezierCurve008_3.geometry} material={materials['Hat.001']} />
      <mesh geometry={nodes.BezierCurve008_4.geometry} material={materials.shoe} />
      <mesh geometry={nodes.BezierCurve008_5.geometry} material={materials.Innensole} />
      <mesh geometry={nodes.BezierCurve008_6.geometry} material={materials.Futter} />
      <mesh geometry={nodes.BezierCurve008_7.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.BezierCurve008_8.geometry} material={materials.senkel} />
      <mesh geometry={nodes.BezierCurve003.geometry} material={materials['Yarn.001']} />
      <mesh geometry={nodes.BezierCurve003_1.geometry} material={materials.sole} />
      <mesh geometry={nodes.BezierCurve003_2.geometry} material={materials['solen rand']} />
      <mesh geometry={nodes.BezierCurve003_3.geometry} material={materials['Hat.001']} />
      <mesh geometry={nodes.BezierCurve003_4.geometry} material={materials.shoe} />
      <mesh geometry={nodes.BezierCurve003_5.geometry} material={materials.Innensole} />
      <mesh geometry={nodes.BezierCurve003_6.geometry} material={materials.Futter} />
      <mesh geometry={nodes.BezierCurve003_7.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.BezierCurve003_8.geometry} material={materials.senkel} />
      <mesh geometry={nodes.BezierCurve008.geometry} material={materials['Yarn.001']} />
      <mesh geometry={nodes.BezierCurve008_1.geometry} material={materials.sole} />
      <mesh geometry={nodes.BezierCurve008_2.geometry} material={materials['solen rand']} />
      <mesh geometry={nodes.BezierCurve008_3.geometry} material={materials['Hat.001']} />
      <mesh geometry={nodes.BezierCurve008_4.geometry} material={materials.shoe} />
      <mesh geometry={nodes.BezierCurve008_5.geometry} material={materials.Innensole} />
      <mesh geometry={nodes.BezierCurve008_6.geometry} material={materials.Futter} />
      <mesh geometry={nodes.BezierCurve008_7.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.BezierCurve008_8.geometry} material={materials.senkel} />
      <mesh geometry={nodes.BezierCurve003.geometry} material={materials['Yarn.001']} />
      <mesh geometry={nodes.BezierCurve003_1.geometry} material={materials.sole} />
      <mesh geometry={nodes.BezierCurve003_2.geometry} material={materials['solen rand']} />
      <mesh geometry={nodes.BezierCurve003_3.geometry} material={materials['Hat.001']} />
      <mesh geometry={nodes.BezierCurve003_4.geometry} material={materials.shoe} />
      <mesh geometry={nodes.BezierCurve003_5.geometry} material={materials.Innensole} />
      <mesh geometry={nodes.BezierCurve003_6.geometry} material={materials.Futter} />
      <mesh geometry={nodes.BezierCurve003_7.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.BezierCurve003_8.geometry} material={materials.senkel} />
    </group>
  )
}

useGLTF.preload('/shoe.glb')
