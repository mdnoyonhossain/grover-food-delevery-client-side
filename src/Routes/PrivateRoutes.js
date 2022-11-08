import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../contexts/AuthContext';

const PrivateRoutes = ({ children }) => {
    const { user, loader } = useContext(UserContext);

    if (loader) {
        return <div className='text-center'>
            <div class="spinner-border text-danger align-center" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    }

    if (user || user?.uid) {
        return children;
    }

    return <Navigate to="/login"></Navigate>
};

export default PrivateRoutes;