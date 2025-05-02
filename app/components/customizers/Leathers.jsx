"use client"
import React, { useContext } from 'react';
import Image from 'next/image';
import StoreContext from '@/app/context/Store';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { extractImageName } from '@/app/utils/helpers';


const Leathers = ({ leatherData }) => {
    const { state, actions } = useContext(StoreContext);
    const handleClick= (imageUrl, imageName) => {
        const url = `/shoe/textures/${extractImageName(imageUrl)}`
        actions.setLeatherTexture({texture: url, name: imageName, leatherType: leatherData.leather_type_name}) 
    }
    return (
        <div className='overflow-hidden'>
            <div className="flex items-center justify-center slide-in-bottom h-24">
                <Carousel opts={{ align: "center", }} className="w-full max-w-2xl mt-2" >
                    <CarouselContent className="flex items-center justify-between">
                        {leatherData?.data.map((data) => (
                            data.leather_types.map((leather, index) => (
                                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/5 ">
                                    <div className='flex flex-col items-center justify-center' onClick={(() => handleClick(leather.image, leather.name))}>
                                        <Image src={leather.image} alt='leather-thumbnail' className='cursor-pointer rounded-full hover:ring-4 hover:ring-offset-4 hover:ring-[#D3B7AB]' width={60} height={60} />
                                        <p className='text-black font-medium text-xs pt-2 capitalize'>{leather.name}</p>
                                    </div>
                                </CarouselItem>
                            ))
                        ))}
                    </CarouselContent>
                    <CarouselPrevious/>
                    <CarouselNext/>
                </Carousel>
            </div>
        </div>
    );
};

export default Leathers;
