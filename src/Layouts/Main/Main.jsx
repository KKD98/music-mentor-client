import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { Outlet, useLocation } from "react-router-dom";
import Footer from '../../components/Footer/Footer';

const Main = () => {
    const location = useLocation();
    const isLoginOrSignUp = location.pathname.includes('login') || location.pathname.includes('signup');
    return (
        <div>
            {isLoginOrSignUp || <NavBar></NavBar>}
            <Outlet></Outlet>
            {isLoginOrSignUp || <Footer></Footer>}
        </div>
    );
};

export default Main;