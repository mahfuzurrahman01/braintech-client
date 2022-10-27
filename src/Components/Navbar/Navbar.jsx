import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Swal from 'sweetalert2'
import logo from '../../assets/logo/Lars_Peeters-removebg-preview.png'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { useContext } from 'react';
import { FaUser } from 'react-icons/fa'
import { AuthContext } from '../../AuthContext/UserContext';
const Navbar = () => {
    //This state is for responsive menu open and close state define
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    //This state is for set the toggle mode 
    const [mode, setMode] = useState(false)
    //calling the usecontext function and destructuring the data
    const { user, logOut, setDark, dark } = useContext(AuthContext)
    //sign out handler use
    const signOutHandler = () => {
        logOut()
            .then(() => {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
                Toast.fire({
                    icon: 'warning',
                    title: 'You are logged out!'
                })
            })
    }

    return (
        <div className='sticky top-0 z-10'>
            <div className='px-4 mx-auto sm:max-w-xl md:max-w-full lg:w-11/12 lg:py-4 py-2 md:px-24 lg:px-8 bg-gray-100'>
                <div className='relative flex items-center justify-between'>
                    <Link
                        to='/'

                        className='inline-flex items-center'
                    >
                        <img src={logo} className='h-16 w-20' alt="" />
                        <p className='text-3xl font-semibold text-gray-400'>BrainTech</p>

                    </Link>
                    <ul className='flex hidden items-center space-x-8 lg:flex'>

                        <li>
                            <NavLink
                                to='/Courses'


                                className={({ isActive }) => isActive ? 'font-semibold tracking-wide text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400 text-lg' : 'font-medium tracking-wide text-gray-600 transition-colors duration-200 hover:text-deep-purple-accent-400'}
                            >
                                Courses
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/faq'


                                className={({ isActive }) => isActive ? ' text-lg font-semibold tracking-wide text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide text-gray-600 transition-colors duration-200 hover:text-deep-purple-accent-400'}
                            >
                                FAQ
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/blog'

                                className={({ isActive }) => isActive ? ' text-lg font-semibold tracking-wide text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide text-gray-600 transition-colors duration-200 hover:text-deep-purple-accent-400'}
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            {
                                user?.uid ? <div className='flex gap-1'><Link to='/profile'><div className="tooltip  tooltip-bottom" data-tip={user.displayName ? user.displayName : 'user name'}>{user.photoURL === null ? <FaUser className='w-8 h-8 text-gray-400'></FaUser> : <img src={user.photoURL} alt='' className='w-8 h-8 rounded-full'></img>}</div></Link><button className='text-gray-100 bg-blue-400 rounded py-1 px-2' onClick={signOutHandler}>Sign out</button></div> : <Link
                                    to='/login'
                                    className='font-medium tracking-wide text-gray-400 hover:text-gray-500 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                >
                                    <button className='bg-blue-400 py-1 px-5 rounded hover:bg-blue-500 text-white'>Log in</button>
                                </Link>
                            }
                        </li>

                        <li onClick={() => setMode(!mode)} >
                            {
                                mode ? <MdDarkMode onClick={() => setDark(!dark)} className='w-6 h-6 text-blue-400'></MdDarkMode> : <MdLightMode onClick={() => setDark(!dark)} className='w-6 h-6 text-blue-400'></MdLightMode>
                            }
                        </li>
                    </ul>
                    <div className='lg:hidden'>
                        <button
                            aria-label='Open Menu'
                            className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 '
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg className='w-5 text-gray-500' viewBox='0 0 24 24'>
                                <path
                                    fill='currentColor'
                                    d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                                />
                                <path
                                    fill='currentColor'
                                    d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                                />
                                <path
                                    fill='currentColor'
                                    d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div className='absolute top-0 left-0 w-full'>
                                <div className='p-5 bg-white border rounded shadow-sm'>
                                    <div className='flex items-center justify-between mb-4'>
                                        <div>
                                            <Link
                                                to='/'
                                                aria-label='Company'
                                                className='inline-flex items-center'
                                            >
                                                {/* <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 32 32'
                    fill='currentColor'
                    className='flex-shrink-0 w-8 h-8 rounded-full text-gray-900'
                  >
                    <path d='M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z'></path>
                  </svg>
                  <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                    Smart Home
                  </span> */}
                                                <img src={logo} className='h-12 w-16' alt="" />
                                                <p className='text-3xl font-semibold text-gray-400'>BrainTech</p>

                                            </Link>
                                        </div>
                                        <div>
                                            <button
                                                aria-label='Close Menu'
                                                className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg className='w-5 text-gray-700' viewBox='0 0 24 24'>
                                                    <path
                                                        fill='currentColor'
                                                        d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul className='space-y-4'>

                                            <li>
                                                <NavLink
                                                    to='/courses'

                                                    className={({ isActive }) => isActive ? ' text-lg font-semibold tracking-wide text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide text-gray-600 transition-colors duration-200 hover:text-deep-purple-accent-400'}
                                                >
                                                    Courses
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to='/faq'

                                                    className={({ isActive }) => isActive ? ' text-lg font-semibold tracking-wide text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide text-gray-600 transition-colors duration-200 hover:text-deep-purple-accent-400'}
                                                >
                                                    FAQ
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to='/blog'

                                                    className={({ isActive }) => isActive ? ' text-lg font-semibold tracking-wide text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide text-gray-600 transition-colors duration-200 hover:text-deep-purple-accent-400'}
                                                >
                                                    Blog
                                                </NavLink>
                                            </li>
                                            <li>
                                                {
                                                    user?.uid ? <div><Link to='/profile'><div className="tooltip  tooltip-top flex flex-col gap-y-3" data-tip={user.displayName ? user.displayName : 'user name'}>{user.photoURL === null ? <FaUser className='w-8 h-8 text-gray-400'></FaUser> : <img src={user.photoURL} alt='' className='w-8 h-8 rounded-full'></img>}</div></Link><button className='text-gray-100 bg-blue-400 rounded py-1 px-2 w-1/4' onClick={signOutHandler}>Sign out</button></div> : <Link
                                                        to='/login'
                                                        className='font-medium tracking-wide text-gray-400 hover:text-gray-500 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                                    >
                                                        <button className='bg-blue-400 py-1 px-5 rounded hover:bg-blue-500 text-white'>Log in</button>
                                                    </Link>
                                                }
                                            </li>
                                            <li onClick={() => setMode(!mode)} >
                                                {
                                                    mode ? <MdDarkMode onClick={() => setDark(!dark)} className='w-6 h-6 text-blue-400'></MdDarkMode> : <MdLightMode onClick={() => setDark(!dark)} className='w-6 h-6 text-blue-400'></MdLightMode>
                                                }
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;