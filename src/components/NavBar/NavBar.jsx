import React, { useContext } from 'react';
import { Link , NavLink} from "react-router-dom";
import logo from '../../assets/logo.png'
import { AuthContext } from '../../providers/AuthProvider';
import { Tooltip } from 'react-tooltip';


const NavBar = () => {
    const {user , logOut} = useContext(AuthContext);

    // TODO: admin and instructor ke server theke anbo
    const isAdmin = false;
    const isInstructor = true;

    const userImage = user?.photoURL ? user.photoURL : " ";
    const userName = user?.displayName ? user.displayName : " ";


    const handleLogOut = () => {
        logOut()
        .then(() => {})
        .catch(error => {
            console.log(error)
        })
    }

    const navbarOptions = <>
        <li className='hover:text-rose-800'><NavLink to="/"  style={({ isActive }) => {
                            return {
                                color: isActive && "red",
                                background: isActive && "black"
                            };
                        }}>Home</NavLink></li>
        <li className='hover:text-rose-800'><NavLink to="/instructors" style={({ isActive }) => {
                            return {
                                color: isActive && "red",
                                background: isActive && "black"
                            };
                        }}>Instructors</NavLink></li>
        <li className='hover:text-rose-800'><NavLink to="/allclasses" style={({ isActive }) => {
                            return {
                                color: isActive && "red",
                                background: isActive && "black"
                            };
                        }}>Classes</NavLink></li>
       {user &&  <li className='hover:text-rose-800'><NavLink to={isAdmin ? '/dashboard/manageallusers' : isInstructor ? '/dashboard/addaclass' : '/dashboard/myselectedclasses'} style={({ isActive }) => {
                            return {
                                color: isActive && "red",
                                background: isActive && "black"
                            };
                        }}>DashBoard</NavLink></li>}
    </>
    return (
        <div className="navbar fixed z-10 max-w-screen-xl bg-black text-white ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 text-black shadow bg-base-100 rounded-box w-52">
                       {navbarOptions}
                    </ul>
                </div>
                <div className='flex items-center gap-2'>
                <img className='w-[20px]' src={logo} alt="" />
                <a className="text-xl ml-0">MusicMentor</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {navbarOptions}
                </ul>
            </div>
            <div className="navbar-end">
            <Tooltip id='userName'></Tooltip>
            {
                userImage && <div data-tooltip-id='userName' data-tooltip-content={userName}><img className='w-[42px] mr-3 rounded-full' src={userImage}/></div>
            }
                {
                    user ? <button onClick={handleLogOut} className="btn bg-rose-700 border-none text-white hover:bg-rose-900">Logout</button> :
                    <Link to="/login" className="btn bg-rose-700 border-none text-white hover:bg-rose-900">Login</Link>
                }
            </div>
        </div>
    );
};

export default NavBar;