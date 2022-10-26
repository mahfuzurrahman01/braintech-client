import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    //use loader data for load the fetch data
    const data = useLoaderData()
    //destructure
    const { name, pricing, beginnerPricing, proPricing } = data;
    return (
        <div>
            <section className="md:py-20 py-5 md:w-3/4 w-11/12 mx-auto text-gray-100">
                <div className='text-center  md:my-5 my-3'>
                    <p className='text-gray-400 uppercase md:text-3xl text-xl font-bold'>Choose The best <span className='text-blue-400'>deal!</span></p>
                    <p className='text-2xl text-gray-400 font-bold uppercase'>for</p>
                    <p className='md:text-2xl text-xl text-gray-100 bg-blue-400 rounded py-1 px-3 shadow-md shadow-gray-400 md:w-1/4 w-3/4 mx-auto uppercase'>{name}</p>
                </div>
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap justify-center items-stretch -mx-4">
                        <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                            <div className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8  bg-blue-500 text-gray-100">
                                <div className="space-y-2">
                                    <h4 className="text-2xl font-bold">Beginner</h4>
                                    <span className="text-6xl font-bold">${pricing.Beginner}<span className="text-sm tracking-wide">/month</span></span>
                                </div>
                                <p className="mt-3 leading-relaxed">In beginner set of classes You will be benefited with: </p>
                                <ul className="flex-1 mb-6  ">
                                    {
                                        beginnerPricing.map(benefit => <li className="flex mb-2 space-x-2 uppercase" key={benefit}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6  text-gray-400">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                            </svg>
                                            <span>{benefit}</span>
                                        </li>)
                                    }
                                </ul>
                                <button type="button" className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded  bg-gray-400 hover:bg-gray-500 duration-200  text-gray-100">Get Started</button>
                            </div>
                        </div>
                        <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                            <div className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8  bg-gray-400  text-gray-100">
                                <div className="space-y-2">
                                    <h4 className="text-2xl font-bold">Pro</h4>
                                    <span className="text-6xl font-bold">${pricing.professional}
                                        <span className="text-sm tracking-wide">/month</span>
                                    </span>
                                </div>
                                <p className="leading-relaxed">In professional set of classes You will be benefited with: </p>
                                <ul className="flex-1 space-y-2">
                                    {
                                        proPricing.map(price => <li className="flex items-center space-x-2 uppercase" key={price}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                            </svg>
                                            <span>{price}</span>
                                        </li>)
                                    }
                                </ul>
                                <a rel="noopener noreferrer" href="# " className="inline-block w-full px-5 py-3  tracking-wider text-center rounded  bg-blue-500 hover:bg-blue-600 duration-200 text-white">Get Started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CheckOut;