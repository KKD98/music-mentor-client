import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';
import useStudent from '../../hooks/useStudent';
import { FaCheck, FaCheckDouble, FaFolder, FaHome, FaRegPlusSquare, FaUserShield, FaUsers, FaWallet } from 'react-icons/fa';

const DashBoard = () => {

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const [isStudent] = useStudent();

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-90 h-full bg-black text-white">

                    {
                        isAdmin && <> <li className='text-2xl font-semibold'><NavLink to="/dashboard/manageallusers" style={({ isActive }) => {
                            return {
                                color: isActive && "#660032",
                                background: isActive && "black"
                            };
                        }}><FaUsers></FaUsers> Manage Users</NavLink></li>
                            <li className='text-2xl font-semibold'><NavLink to="/dashboard/manageallclasses" style={({ isActive }) => {
                                return {
                                    color: isActive && "#660032",
                                    background: isActive && "black"
                                };
                            }}><FaUserShield></FaUserShield> Manage Classes</NavLink></li></>

                    }

                    {
            
                        isInstructor && <>
                            <li className='text-2xl font-semibold'><NavLink to="/dashboard/addaclass" style={({ isActive }) => {
                        return {
                            color: isActive && "#660032",
                            background: isActive && "black"
                        };
                    }}><FaRegPlusSquare></FaRegPlusSquare> Add a class</NavLink></li>
                    <li className='text-2xl font-semibold'><NavLink to="/dashboard/myclasses" style={({ isActive }) => {
                        return {
                            color: isActive && "#660032",
                            background: isActive && "black"
                        };
                    }}><FaFolder></FaFolder> My Classes</NavLink></li>
                            </> 

                    }

                    { isStudent &&

                            <> <li className='text-2xl font-semibold'><NavLink to="/dashboard/selectedclasses" style={({ isActive }) => {
                        return {
                            color: isActive && "#660032",
                            background: isActive && "black"
                        };
                    }}><FaCheck></FaCheck> My selected class</NavLink></li>
                    <li className='text-2xl font-semibold'><NavLink to="/dashboard/myenrolledclasses" style={({ isActive }) => {
                        return {
                            color: isActive && "#660032",
                            background: isActive && "black"
                        };
                    }}><FaCheckDouble></FaCheckDouble> My Enrolled Classes</NavLink></li>
                    <li className='text-2xl font-semibold'><NavLink to="/dashboard/paymenthistory" style={({ isActive }) => {
                        return {
                            color: isActive && "#660032",
                            background: isActive && "black"
                        };
                    }}><FaWallet></FaWallet> Payment History</NavLink></li>
</>
                    }

                    {/* Sidebar content here */}

                    <li className='text-2xl font-semibold'><NavLink to="/" style={({ isActive }) => {
                        return {
                            color: isActive && "#660032",
                            background: isActive && "black"
                        };
                    }}><FaHome></FaHome> Home</NavLink></li>

                </ul>

            </div>
        </div>
    );
};

export default DashBoard;