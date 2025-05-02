"use client"
import React, { Suspense, useContext, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Shoes } from "./Shoes";
import { OrderForm } from "../OrderForm";
import FullScreenToggle from "../Fullscreen";
import Camera from "./Camera";
import { OverViewSidebar } from "../OverViewSidebar";
import StoreContext from "@/app/context/Store";
import { Size } from "../Size";

export default function CanvasModel() {
  const { state, actions } = useContext(StoreContext);
  const canvasRef = useRef();

  return (
    <div ref={canvasRef} className="h-[79vh] w-[80vw] bg-white flex items-center justify-center relative">
      <Canvas shadows={true} className="bg-[#f3f3f3] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/Background.jpg')" }}>
        <Camera>
          <ambientLight intensity={4} />
          <directionalLight position={[5, 5, 5]} intensity={0.8} castShadow />
          <Shoes />
        </Camera>
        <OrbitControls enablePan={false} enableZoom={true} enableDamping/>
        <ContactShadows scale={20} blur={0.3} opacity={0.8} far={40} position={[0.01,-0.99, 0]}/>
        <Environment preset="park"/>
      </Canvas>
      <div className="absolute right-4 top-4 gap-5">
        <FullScreenToggle targetRef={canvasRef} />
        {!state.isFullScreen && <Size/>}
        {!state.isFullScreen && <OverViewSidebar/> }
        {!state.isFullScreen && <OrderForm />}
      </div>
    </div>
  );
}
