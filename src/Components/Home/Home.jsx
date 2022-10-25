import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/imges/12079894_4905784.jpg'
const Home = () => {
    return (
        <div className='md:w-11/12 w-full mx-auto'>
            <div className='flex justify-between md:flex-row flex-col-reverse'>
                <div className='md:w-1/2 w-full md:text-left text-center flex flex-col justify-center items-center'>
                    <p className='md:text-4xl text-2xl font-bold text-gray-500 uppercase'>Knowledge at your <span className='font-semibold text-blue-400'>fingertips</span></p>
                    <p className='md:text-2xl text-xl font-bold text-blue-400 uppercase'>digital learning <span className='font-semibold text-gray-500'>transformation</span></p>
                    <p className='text-lg font-semibold text-gray-500'>Join the millions learning to code with <span className='text-2xl font-semibold text-blue-400'>BrainTech</span> for free</p>
                
                    <Link to='/courses'><button className='mt-5 text-white bg-blue-400 hover:bg-blue-500 duration-300 py-1 px-4 rounded shadow-md shadow-gray-600'>More info</button></Link>
                </div>
                <div className='md:w-1/2 w-full'>
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;