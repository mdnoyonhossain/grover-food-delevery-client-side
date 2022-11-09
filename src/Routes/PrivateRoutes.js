import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../contexts/AuthContext';

const PrivateRoutes = ({ children }) => {
    const { user, loader } = useContext(UserContext);
    const location = useLocation();

    if (loader) {
        return <div className='text-center'>
            <div className="spinner-border text-danger align-center" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    }

    if (user || user?.uid) {
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoutes;