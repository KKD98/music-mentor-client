import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import useInstructor from '../hooks/useInstructor';

const InstructorRoute = ({children}) => {
    const {user , loading} = useAuth();
    const [isInstructor , isInstructorLoading] = useInstructor();
    const location = useLocation();

    if(loading || isInstructorLoading){
        return <span className="loading loading-spinner loading-lg text-rose-700"></span>
    }

    if(user && isInstructor){
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default InstructorRoute;