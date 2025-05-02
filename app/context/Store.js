"use client"
import { createContext, useState } from 'react';

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [leatherTexture, setLeatherTexture] = useState({texture: '/shoe/textures/wood.avif' , name:'Wooden' , leatherType: 'Test Leather'});
  const [soleTexture, setSoleTexture] = useState({texture: '/shoe/textures/sole1.avif',  name: 'Leather Sole'});
  const [selectedMesh, setSelectedMesh] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [loading, setLoading] = useState(true);



  const state = {
    leatherTexture,
    selectedMesh,
    soleTexture,
    isFullScreen,
    loading
  };

  const actions = {
    setLeatherTexture,
    setSelectedMesh,
    setSoleTexture,
    setIsFullScreen,
    setLoading
  };

  return (
    <StoreContext.Provider value={{ state, actions }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContext;