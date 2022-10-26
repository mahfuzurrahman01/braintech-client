import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from '../Shared/Slider';

const LeftNav = () => {
    const [courses,setCourses] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/courses')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div className='sticky top-20'>
            {
                courses.map(course => <Link to={`/courses/${course.id}`} key={course.id}><p className='text-gray-100 bg-blue-400 hover:bg-blue-500 py-1 px-3 rounded shadow-md shadow-gray-500 mb-2'>{course.name}</p></Link>)
            }
            <Slider></Slider>
        </div>
    );
};

export default LeftNav;