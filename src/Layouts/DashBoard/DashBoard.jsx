import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';

const DashBoard = () => {
    // TODO: admin and instructor ke server theke anbo
    // const isAdmin = false;
    const [isAdmin] = useAdmin();
    // const isInstructor = true;
    const [isInstructor] = useInstructor();

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-black text-white">

                    {
                        isAdmin ? <> <li className='text-2xl font-semibold'><NavLink to="/dashboard/manageallusers" style={({ isActive }) => {
                            return {
                                color: isActive && "#660032",
                                background: isActive && "black"
                            };
                        }}>Manage Users</NavLink></li>
                            <li className='text-2xl font-semibold'><NavLink to="/dashboard/manageallclasses" style={({ isActive }) => {
                                return {
                                    color: isActive && "#660032",
                                    background: isActive && "black"
                                };
                            }}>Manage Classes</NavLink></li></>

                            : 
            
                        isInstructor ? <>
                            <li className='text-2xl font-semibold'><NavLink to="/dashboard/addaclass" style={({ isActive }) => {
                        return {
                            color: isActive && "#660032",
                            background: isActive && "black"
                        };
                    }}>Add a class</NavLink></li>
                    <li className='text-2xl font-semibold'><NavLink to="/dashboard/myclasses" style={({ isActive }) => {
                        return {
                            color: isActive && "#660032",
                            background: isActive && "black"
                        };
                    }}>My Classes</NavLink></li>
                            </> :

                            <> <li className='text-2xl font-semibold'><NavLink to="/dashboard/addaclass" style={({ isActive }) => {
                        return {
                            color: isActive && "#660032",
                            background: isActive && "black"
                        };
                    }}>My selected class</NavLink></li>
                    <li className='text-2xl font-semibold'><NavLink to="/dashboard/myclasses" style={({ isActive }) => {
                        return {
                            color: isActive && "#660032",
                            background: isActive && "black"
                        };
                    }}>My Enrolled Classes</NavLink></li>
                    <li className='text-2xl font-semibold'><NavLink to="/dashboard/myclasses" style={({ isActive }) => {
                        return {
                            color: isActive && "#660032",
                            background: isActive && "black"
                        };
                    }}>Payment History</NavLink></li>
</>
                    }

                    {/* Sidebar content here */}

                    <li className='text-2xl font-semibold'><NavLink to="/" style={({ isActive }) => {
                        return {
                            color: isActive && "#660032",
                            background: isActive && "black"
                        };
                    }}>Home</NavLink></li>

                </ul>

            </div>
        </div>
    );
};

export default DashBoard;