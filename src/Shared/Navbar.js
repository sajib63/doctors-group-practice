import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import DarkModeToggle from "react-dark-mode-toggle";

const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext)
    const [isDarkMode, setIsDarkMode] = useState(() => false);
    const logOutCurrentUser = () => {
        logOutUser()
            .then(() => {

            })
            .catch(error => {
                console.log(error);
            })
    }
    const navItems = <>
        <li><Link to='/' className='rounded font-bold'>Home</Link></li>
        <li><Link to='/About' className='rounded font-bold'>About</Link></li>
        <li><Link to='/appointment' className='rounded font-bold'>Appointment</Link></li>

        <li><Link to='/contact' className='rounded font-bold'>Contact Us</Link></li>
        {
            user?.uid ?
                <>
                    <li><Link className='rounded font-bold'>{user?.displayName}</Link></li>
                    <li><Link to='/dashboard' className='rounded font-bold'>DashBoard</Link></li>
                    <li><button onClick={logOutCurrentUser} className='rounded font-bold'>LogOut</button ></li>
                </>
                :
                <li><Link to='/login' className='rounded font-bold'>Login</Link></li>
        }

      
            
        <DarkModeToggle
            onChange={setIsDarkMode}
            checked={isDarkMode}
            size={70}
            className='mt-2'
        />
     

      



    </>
    return (
        <div className="navbar bg-base-100 flex justify-between sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl font-bold">Doctors Portal</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navItems}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;