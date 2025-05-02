import React from 'react';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
const lacesThumbnails = [
    "/thumbnails/lace1.jpg",
    "/thumbnails/lace2.webp",
    "/thumbnails/lace3.jpg",
    "/thumbnails/lace4.webp",
    "/thumbnails/lace5.webp",
    "/thumbnails/lace2.webp",

]



const Laces = () => {
    return (
        <div className='overflow-hidden'>
            <div className="flex items-center justify-center slide-in-bottom">
                <Carousel opts={{ align: "center", }} className="w-full max-w-2xl flex items-center" >
                    <CarouselContent className="flex items-center justify-between">
                        {lacesThumbnails.map((imageUrl, index) => (
                            <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/5 pl-10">
                                <div className='flex' key={index}>
                                    <Image src={imageUrl} alt='leather-thumbnail' className='w-18  hover:rounded-3xl cursor-pointer rounded-full' width={75} height={75} />
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

export default Laces;
