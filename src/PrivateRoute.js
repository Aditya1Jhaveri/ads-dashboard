import React from 'react';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
    if (!localStorage.getItem("AUTH_USER")) {
        return <Navigate to="/login" />;
    }
    return (
        <>
            {/* <AppSidebar /> */} {/* your other components */}
            {children}
                
        </>
    );
};