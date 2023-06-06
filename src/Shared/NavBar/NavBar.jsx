import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Summer School Camp</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <details>
                                <summary>
                                    Our Services
                                </summary>
                                <ul className="p-2 bg-base-100">
                                    <li>
                                        <Link>Home</Link>
                                        <Link>Instructors</Link>
                                        <Link>Classes</Link>
                                        <Link>Dashboard</Link>
                                    </li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;