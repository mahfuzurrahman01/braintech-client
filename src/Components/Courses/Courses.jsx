import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Shared/Card';
import LeftNav from './LeftNav';

const Courses = () => {
    //useloaderdata use for fetching the data from routes loader
    const courses = useLoaderData()
    return (
        <div>
            <div className='md:w-11/12  w-full mx-auto flex md:flex-row flex-col md:mt-10 mt-5 md:gap-x-5 gap-y-5 px-5'>
                <div className='md:w-1/5 w-full'>
                    <LeftNav></LeftNav>
                </div>
                <div className='md:w-4/5 w-full mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                    {
                        courses.map(course => <Card key={course.id} course={course}></Card>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;