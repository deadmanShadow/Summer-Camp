import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../../Pages/Providers/AuthProvider';
import { FaShoppingCart } from 'react-icons/fa';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Summer School Camp</a>
                </div>
                <div className="ms-16 navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/class'>Classes</Link></li>
                        <li><Link to='/instructors'>Instructors</Link></li>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/register'>Register</Link></li>
                        <li> <Link to="/">
                            <button className="btn btn-sm">
                            <FaShoppingCart></FaShoppingCart>
                                <div className="badge badge-secondary">+0</div></button>
                        </Link></li>
                    </ul>
                </div>
                {
                    user ? <>
                        <span className='text-sm'>{user?.displayName}</span>
                        <button onClick={handleLogOut} className='btn btn-ghost'>Logout</button>
                    </> : <>
                        <li><Link to="/login">Login</Link></li>
                    </>
                }
            </div>
        </div>
    );
};

export default NavBar;