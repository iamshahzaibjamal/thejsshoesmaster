import React, { useContext } from 'react';
import Image from 'next/image';
import StoreContext from '@/app/context/Store';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { extractImageName } from '@/app/utils/helpers';

const Soles = ({soleData}) => {
    const {actions } = useContext(StoreContext);
    const handleClick= (imageUrl, imageName) => {
        const url = `/shoe/textures/${extractImageName(imageUrl)}`
        actions.setSoleTexture({texture: url, name: imageName}) 
    }
    return (
        <div className='overflow-hidden'>
            <div className="flex items-center justify-center gap-5 slide-in-bottom  h-24">
            <Carousel opts={{align: "center", }} className="w-full max-w-2xl flex items-center" >
            <CarouselContent className="flex items-center justify-between">
            {soleData?.data.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 px-4">
                   <div className='flex flex-col items-center justify-center h-18' key={index} onClick={(() => handleClick(item.sole_image, item.sole_name))}>
                        <Image  src={item.sole_image} alt='sole-thumbnail' className='w-2/3 hover:scale-125 transition-all hover:animate-in cursor-pointer border-gray-400 ' width={60} height={60} />
                        <p className='text-black font-medium text-xs capitalize'>{item.sole_name}</p>
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="" />
            <CarouselNext className=""/>
          </Carousel>
            </div>
        </div>
    );
};

export default Soles;
