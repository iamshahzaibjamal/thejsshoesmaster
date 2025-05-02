"use client"
import React, { useContext, useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Leathers from './customizers/Leathers';
import axios from 'axios';
import Soles from './customizers/Soles';
import InnerSole from './customizers/InnerSole';
import Laces from './customizers/Laces';
import StoreContext from '../context/Store';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Badge } from "@/components/ui/badge"
import { Footprints } from 'lucide-react';


export function MeshNames() {
  const { state, actions } = useContext(StoreContext);
  const [leatherData, setLeatherData] = useState(null);
  const [innerSole, setInnerSole] = useState(null);
  const [soleData, setSoleData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // leatherData api responce
        const leatherResponse = await axios.get('https://leaury.xpertprime.com/api/leather');
        setLeatherData(leatherResponse.data);

        // Sole API fetch Response
        const soleResponse = await axios.get('https://leaury.xpertprime.com/api/soles');
        setSoleData(soleResponse.data);
        
        // InnerSole API fetch Response
        const innerSoleResponse = await axios.get('https://leaury.xpertprime.com/api/inner');
        setInnerSole(innerSoleResponse.data);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>
  }

  const classNames = "bg-none text-gray-50 h-16 hover:bg-white hover:text-black w-full z-10 rounded-t-3xl rounded-b-none data-[state=active]:shadow-none"
  const labels = ["Leathers", "Sole", "Heal", "Inner Sole"];
  const handleClick = (value) => {
    actions.setSelectedMesh(value);
  };

  const handleNextClick = () => {
    console.log("handleNextClick");
  }
  const handleBackClick = () => {
    console.log("handleBackClick");
  }
  return (
    <>
      <Tabs value={state.selectedMesh ? state.selectedMesh : 1} className="">
        <div className="bg-[#a1a1a1] w-full flex items-center justify-center">
          <TabsList className="flex bg-transparent rounded-none text-black font-semibold w-1/2">
            {labels.map((label, index) => (
              <TabsTrigger onClick={() => handleClick(index + 1)} value={index + 1} className={`${classNames}`}>{label}</TabsTrigger>
            ))}
          </TabsList>
        </div>
        {labels.map((label, index) => (
          <TabsContent key={index} value={index + 1}>
            <div className='w-full items-center justify-between flex h-28 px-5'>
              <div className='w-1/6 flex justify-center items-center'>
                {label === "Leathers" &&
                  <Carousel opts={{ align: "start", }} className="w-44" >
                    <CarouselContent className="flex justify-between">
                      {leatherData?.data.map((data, index) => (
                        <>
                          <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                            <Badge variant="outline" className="w-full px-2 py-2 text-gray-500 border-none flex items-center justify-center tracking-tight font-extrabold text-md text-center">{data.leather_type_name}<Footprints className=' h-10 w-10 px-2' /></Badge>
                          </CarouselItem>
                        </>
                      ))}
                    </CarouselContent>
                    <div onClick={() => handleNextClick()}>
                      <CarouselPrevious className="bg-[#E7A78B] text-white" />
                    </div>
                    <div onClick={() => handleBackClick()}>
                      <CarouselNext className="bg-[#E7A78B] text-white" />
                    </div>
                  </Carousel>
                }
              </div>
              <div className='w-4/6'>
                {label === "Leathers" ? <Leathers leatherData={leatherData} /> : label === "Sole" ? <Soles soleData= {soleData}/>
                  : label === "Toe Cap" ? <Toecap /> : label === "Inner Sole" ? <InnerSole innerSole={innerSole} /> : <Laces />}
              </div>
              <div className='w-1/6'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit </p>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </>
  );
}
