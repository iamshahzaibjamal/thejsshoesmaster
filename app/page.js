// import React, { useRef } from "react";
import { Suspense } from "react";
import CanvasModel from "./components/canvas/CanvasModel";
import Loader from "./components/Loader";
import { MeshNames } from "./components/MeshNames";
import SelectModels from "./components/SelectModels";
import { StoreProvider } from "./context/Store";

export default function Home() {
  return (
    <StoreProvider>
      <Suspense fallback={<Loader/>} >
    <section className="h-screen">
      <div className="flex justify-between">
        <SelectModels/>
        <CanvasModel />
      </div>  
      <MeshNames />
    </section>
    </Suspense>
    </StoreProvider>
  );
}
