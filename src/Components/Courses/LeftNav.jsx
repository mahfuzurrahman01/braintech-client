import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [courses,setCourses] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/courses')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div>
            {
                courses.map(course => <p key={course.id} className='text-gray-100 bg-blue-400 hover:bg-blue-500 py-1 px-3 rounded shadow-md shadow-gray-500 my-2'><Link to={`/course/${course.id}`}>{course.name}</Link></p>)
            }
        </div>
    );
};

export default LeftNav;