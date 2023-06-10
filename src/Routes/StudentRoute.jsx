import React from 'react';
import useAuth from '../hooks/useAuth';
import useStudent from '../hooks/useStudent';
import { Navigate, useLocation } from 'react-router-dom';

const StudentRoute = ({children}) => {
    const {user , loading} = useAuth();
    const [isStudent, isStudentLoading] = useStudent();
    const location = useLocation();

    if(loading || isStudentLoading){
        return <span className="loading loading-spinner loading-lg text-rose-700"></span>
    }

    if(user && isStudent){
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default StudentRoute;