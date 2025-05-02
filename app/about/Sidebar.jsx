
import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoePrints } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
const Sidebar = () => {
    return (
        <div className="fixed top-0 left-0 h-full w-44 bg-gray-800 text-white flex flex-col">
            <div className="flex flex-col justify-between h-full">
                <Link href="#" className="flex flex-col items-center justify-center border-b-2 border-gray-500 py-2 px-4 hover:bg-gray-700 h-1/6">
                    <Image src="/images/logo-white.png" alt="cart-icon" className="cursor-pointer w-32" width={100} height={100} />
                </Link>
                
                <Link href="#" className="flex flex-col items-center justify-center border-b-2 border-gray-500 py-2 px-4 hover:bg-gray-700 h-1/6">
                    <FontAwesomeIcon icon={faShoePrints} className="mb-2 w-10" />  <span className='font-bold uppercase'>Tassel</span>
                </Link>
                <div href="#" className="flex flex-col items-center justify-center border-b-2 border-gray-500 py-2 px-4 hover:bg-gray-700 h-1/6">
                    <FontAwesomeIcon icon={faShoePrints} className="mb-2 w-10" />  <span className='font-bold uppercase'>Loafer</span>
                </div>
                <Link href="#" className="flex flex-col items-center justify-center border-b-2 border-gray-500 py-2 px-4 hover:bg-gray-700 h-1/6">
                    <FontAwesomeIcon icon={faShoePrints} className="mb-2 w-10" />  <span className='font-bold uppercase'>Menu</span>
                </Link>
                <Link href="#" className="flex flex-col items-center justify-center border-b-2 border-gray-500 py-2 px-4 hover:bg-gray-700 h-1/6">
                    <FontAwesomeIcon icon={faShoePrints} className="mb-2 w-10" />  <span className='font-bold uppercase'>Menu</span>
                </Link>
                <Link href="#" className="flex flex-col items-center justify-center border-b-2 border-gray-500 py-2 px-4 hover:bg-gray-700 h-1/6">
                    <FontAwesomeIcon icon={faShoePrints} className="mb-2 w-10" />  <span className='font-bold uppercase'>Menu</span>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
