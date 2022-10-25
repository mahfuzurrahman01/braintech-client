import React from 'react';
import Slider from '../Shared/Slider';
import LeftNav from './LeftNav';

const Courses = () => {
    return (
        <div className='w-11/12 mx-auto flex'>
            <div className='w-1/5'>
                <LeftNav></LeftNav>
                 <Slider></Slider>
            </div>
            <div className='w-4/5'></div>
        </div>
    );
};

export default Courses;