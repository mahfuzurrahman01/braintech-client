import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthContext/UserContext';

const Private = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <div className="flex items-center justify-center mt-10 space-x-2">
            <div className="w-4 h-4 rounded-full animate-pulse bg-gray-500"></div>
            <div className="w-4 h-4 rounded-full animate-pulse bg-gray-500"></div>
            <div className="w-4 h-4 rounded-full animate-pulse bg-gray-500"></div>
        </div>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children
};

export default Private;