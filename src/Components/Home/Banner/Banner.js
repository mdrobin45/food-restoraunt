import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner text-center'>
            <h2 className='text-4xl'>Best food waiting for your belly</h2>
            <div className='flex justify-center mt-6'>
                <input className='bg-white w-1/3 border-none p-3 rounded-l-full text-lg' type="text" placeholder='Search food items' />
                <button className='bg-red-500 border-none px-6 py-3 rounded-r-full text-lg text-white'>Search</button>
            </div>
        </div>
    );
};

export default Banner;