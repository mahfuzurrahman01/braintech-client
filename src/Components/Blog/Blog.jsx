import React from 'react';

const Blog = () => {
    return (
        <div className='w-11/12 mx-auto md:mt-10 mt-3'>
            <div className='md:w-1/2 w-11/12 shadow-md shadow-gray-500 mt-4 mx-auto'>
                <p className='text-gray-100 font-semibold text-lg bg-blue-400 rounded-tr-md rounded-tl-md py-1 px-4 '>Q: what is cors?</p>
                <p className='text-gray-700 bg-gray-200 p-4'>A: Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
            </div>
            <div className='md:w-1/2 w-11/12 shadow-md shadow-gray-500 mt-4 mx-auto'>
                <p className='text-gray-100 font-semibold text-lg bg-blue-400 rounded-tr-md rounded-tl-md py-1 px-4 '>Q: Why are you using firebase?</p>
                <p className='text-gray-700 bg-gray-200 p-4'>A: I am using firebase because its easy to use.and its authentication system is more powerful then others . and its light weight thats why its don't have any load on the site.and it provide us google facebook twitter and email password authentication system for free. <span className='font-bold'>What other options do you have to implement authentication?</span> 
                The answer is i will use either Parse or Heroku </p>
            </div>
            <div className='md:w-1/2 w-11/12 shadow-md shadow-gray-500 mt-4 mx-auto'>
                <p className='text-gray-100 font-semibold text-lg bg-blue-400 rounded-tr-md rounded-tl-md py-1 px-4 '>Q: How does the private route work?</p>
                <p className='text-gray-700 bg-gray-200 p-4'>A: The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
            </div>
            <div className='md:w-1/2 w-11/12 shadow-md shadow-gray-500 mt-4 mx-auto'>
                <p className='text-gray-100 font-semibold text-lg bg-blue-400 rounded-tr-md rounded-tl-md py-1 px-4 '>Q: What is Node? How does Node work?</p>
                <p className='text-gray-700 bg-gray-200 p-4'>A:  Node.js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node.js wastes no time or resources on waiting for I/O requests to return. <span className='text-gray-800 font-semibold'>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</span></p>
            </div>
        </div>
    );
};

export default Blog;