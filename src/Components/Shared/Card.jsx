import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ course }) => {
    //destructure the course object came as props which is an object
    const { picture, name, id } = course;
    return (
        <Link to={`/courses/${id}`}>
            <div className="max-w-xs p-6 rounded-md shadow-md bg-gray-100 dark:text-gray-50 shadow-gray-500 cursor-pointer">
                <img src={picture} alt="" className="object-cover object-center hover:scale-110 duration-300 overflow-hidden w-full rounded-md h-72 dark:bg-gray-500" />
                <div className="mt-6 mb-2 flex justify-between">
                    <span className="block text-md font-semibold tracking-widest uppercase dark:text-violet-400">{name}</span>
                </div>
            </div>
        </Link>
    );
};

export default Card;