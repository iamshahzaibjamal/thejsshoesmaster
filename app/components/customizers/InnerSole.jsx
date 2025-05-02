import React from 'react';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';


const InnerSole = ({innerSole}) => {
    return (
        <div className='overflow-hidden'>
            <div className="flex items-center justify-center gap-7 slide-in-bottom">
                <Carousel opts={{ align: "center", }} className="w-full max-w-2xl mt-2" >
                    <CarouselContent className="flex items-center justify-between"> 
                        {innerSole?.data.map((item, index) => (
                            <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/5">
                                <div className='flex flex-col items-center justify-center h-24'>
                                        <Image src={item.image} alt='leather-thumbnail' className='cursor-pointer rounded-full hover:ring-4 hover:ring-offset-4 hover:ring-[#D3B7AB]' width={60} height={60} />
                                        <p className='text-black font-medium text-xs pt-2 capitalize'>{item.name}</p>
                                    </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

            </div>
        </div>
    );
};

export default InnerSole;
