import React from 'react';
import image from '../../assets/imges/12079894_4905784.jpg'
const Home = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className='flex justify-between'>
                <div className='w-1/2 flex flex-col justify-center items-center'>
                    <p className='text-4xl font-bold text-gray-500 uppercase'>Knowledge at your <span className='font-semibold text-blue-400'>fingertips</span></p>
                    <p className='text-2xl font-bold text-blue-400 uppercase'>digital learning <span className='font-semibold text-gray-500'>transformation</span></p>
                    <p className='text-lg font-semibold text-gray-500'>Join the millions learning to code with <span className='text-2xl font-semibold text-blue-400'>BrainTech</span> for free</p>
                    <button className='mt-5 text-white bg-blue-400 hover:bg-blue-500 duration-300 py-1 px-4 rounded shadow-md shadow-gray-600'>More info</button>
                </div>
                <div className='w-1/2'>
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;