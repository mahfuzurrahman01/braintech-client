import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Shared/Card';
import LeftNav from './LeftNav';

const Courses = () => {
    const courses = useLoaderData()
    return (
        <div>
            <div className='md:w-11/12  w-full mx-auto flex mt-10 gap-x-5 px-5'>
                <div className='md:w-1/5 w-1/4'>
                    <LeftNav></LeftNav>
                </div>
                <div className='md:w-4/5 w-3/4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                    {
                        courses.map(course => <Card key={course.id} course={course}></Card>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;