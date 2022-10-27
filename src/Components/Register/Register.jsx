import React from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/UserContext';
import { errorToast, successToast } from '../Shared/Toast';

const Register = () => {
    //getting the create user function with context
    const { createUserWithEmail, profileUpdate } = useContext(AuthContext)
    const navigate = useNavigate()
    const registerHandler = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.username.value;
        const photourl = form.photourl.value;
        const email = form.email.value;
        const password = form.password.value;
        createUserWithEmail(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                //update user 
                updateUserProfile(name, photourl)
                    .then(() => { })
                    .catch(error => console.error(error))
                //set success toast
                successToast()
                form.reset()
                //refresh page for getting user 
                refreshPage()
                navigate('/')
            })
            .catch(error => {
                const errorMessage = error.message
                //toast error
                errorToast(errorMessage)
            })
    }
    const updateUserProfile = (name, photoURL) => {
        const profile = { displayName: name, photoURL: photoURL }
        return profileUpdate(profile)
    }
    //refresh the page for getting the user information in navbar
    function refreshPage() {
        window.location.reload(false);
    }
    return (

        <div className='md:w-1/4 w-11/12 mx-auto my-10'>
            <label htmlFor="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer text-gray-100">
                <Link to='/login'><span className="relative">
                    <input id="Toggle1" type="checkbox" className="hidden peer" />
                    <div className="w-12 h-6 rounded-full shadow-inner bg-blue-400 peer-checked:bg-gray-800"></div>
                    <div className="absolute inset-y-0 right-0 w-4 h-4 m-1 rounded-full shadow peer-checked:left-0 peer-checked:right-auto bg-gray-500"></div>
                </span></Link>
            </label>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-200 text-gray-100">
                <h1 className="lg:text-3xl text-2xl font-semibold text-center text-blue-400">Register</h1>
                <form onSubmit={registerHandler} noValidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-gray-600">Name</label>
                        <input type="text" name="username" id="username" placeholder="full name" className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-900 border-violet-400" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="photourl" className="block text-gray-600">Photo url</label>
                        <input type="text" name="photourl" id="photourl" placeholder="Photo url" className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-900 border-violet-400" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block text-gray-600">Email</label>
                        <input type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-900 border-violet-400" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block text-gray-600">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-100 text-gray-900 focus:border-violet-400" required />

                    </div>
                    <button type='submit' className="block w-full p-3 text-center rounded-sm text-gray-200 bg-blue-400 hover:bg-blue-500 duration-300">Sign up</button>
                </form>
                <p className="text-xs text-center sm:px-6 text-gray-500">Already have an account?
                    <Link rel="noopener noreferrer" to='/login' className="underline text-gray-600">Sign in</Link>
                </p>

            </div>
        </div>
    );
};

export default Register;