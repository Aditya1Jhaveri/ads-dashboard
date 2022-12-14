import React from 'react';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children }) => {
    if (localStorage.getItem("AUTH_USER")) {
        return <Navigate to="/dashboard" />;
    }
    return (
        <>
            {children} 
        </>
    );
};