import React, {useContext} from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useLocation } from "react-router-dom";
import {Navigate} from 'react-router';

const PrivateRoute = ({children}) => {
    const {user , loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <span className="loading loading-spinner loading-lg text-rose-700"></span>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;