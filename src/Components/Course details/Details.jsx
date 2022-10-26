import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Details = () => {
    //use loader data from fetch 
    const data = useLoaderData()
    //object destructured
    const { id, name, picture, classes, intro, roadmap } = data
    return (
        <div>
            <div className="flex flex-col max-w-2xl p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-100 dark:text-gray-100 mx-auto my-10">
                <div className="flex space-x-4">

                    <div className="flex flex-col">
                        <p className="text-md font-semibold uppercase text-gray-700">Total <span className='text-gray-100 bg-blue-400 px-3 rounded'>{classes}</span> classes</p>
                    </div>
                </div>
                <div>
                    <img src={picture} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                    <h2 className="mb-1 text-2xl font-semibold uppercase">{name}</h2>
                    <p className="text-sm dark:text-gray-400">{intro}</p>
                </div>

                <div className='flex flex-col gap-y-2'>
                    <p className='text-xl text-gray-700'>What you will learn from this course? </p>
                    <div className='grid grid-cols-2 gap-2'>
                        {
                            roadmap.map(topic => <p className='text-gray-100 bg-blue-400 py-1 px-3 rounded shadow-md shadow-gray-500' key={topic}>{topic}</p>)
                        }
                    </div>
                </div>
                <div className="flex flex-wrap justify-between items-center">
                    <div className="space-x-2">
                        <button aria-label="Share this post" type="button" className="p-2 text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-violet-400">
                                <path d="M404,344a75.9,75.9,0,0,0-60.208,29.7L179.869,280.664a75.693,75.693,0,0,0,0-49.328L343.792,138.3a75.937,75.937,0,1,0-13.776-28.976L163.3,203.946a76,76,0,1,0,0,104.108l166.717,94.623A75.991,75.991,0,1,0,404,344Zm0-296a44,44,0,1,1-44,44A44.049,44.049,0,0,1,404,48ZM108,300a44,44,0,1,1,44-44A44.049,44.049,0,0,1,108,300ZM404,464a44,44,0,1,1,44-44A44.049,44.049,0,0,1,404,464Z"></path>
                            </svg>
                        </button>
                        <button aria-label="Bookmark this post" type="button" className="p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-violet-400">
                                <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="flex space-x-2 text-sm dark:text-gray-400">
                        <Link to={`/checkout/${id}`}><button type="button" className="flex items-center p-1 space-x-1.5 text-gray-100 bg-red-400 hover:bg-red-500 duration-200 rounded shadow-md shadow-gray-500 py-1 px-3">Get premium access</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;