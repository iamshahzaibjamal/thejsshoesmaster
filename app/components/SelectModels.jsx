"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';

const SelectModels = () => {
    const [modelData, setModelData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://leaury.xpertprime.com/api/models');
                setModelData(response.data);
            } catch (error) {
                setError(error);
            }
        };
        fetchData();
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>
    }

    if (!modelData) {
        return <div>Loading...</div>
    }
    return (
        <div className='w-[20vw] h-[79vh] border-l bg-[#d1d1d1] space-y-2  overflow-hidden pt-5'>
            {/* <h2 className='text-2xl text-left pl-3   pt-1'>Shoe Models</h2> */}
            <div className="grid grid-cols-2 px-3 w-full gap-2 flex-wrap max-h-[79vh]  overflow-y-auto cute-scrollbar">
                {modelData.data.map((item, index) => (
                    <div key={item.id} className='flex-1 h-32 hover:bg-white bg-gray-200 border rounded-md shadow--lg shadow-white cursor-pointer  flex flex-col items-center justify-center'>
                        <Image src={item.image} alt='leather-thumbnail' className='w-fill transition-all hover:animate-in hover:scale-110' width={100} height={100} />
                        <h2 className='font-thin text-sm text-black capitalize'>{item.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SelectModels;
