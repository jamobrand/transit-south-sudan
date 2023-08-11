import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarBottom: React.FC = () => {
    return (
        <nav className="bg-gray-50 dark:bg-gray-700">
            <div className="max-w-screen-xl px-4 py-3 mx-auto">
                <div className="flex items-center">
                    <ul className="flex flex-row font-semibold mt-0 mr-6 space-x-8 text-sm">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) => (isActive ? "text-blue-600" : "text-gray-900 dark:text-white")}
                            //className="text-gray-900 dark:text-white hover:text-blue-600"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/transit/validate-permit"
                                className={({ isActive }) => (isActive ? "text-blue-600" : "text-gray-900 dark:text-white")}
                            >
                                Validate Permit
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/transit/manage-permit"
                                className={({ isActive }) => (isActive ? "text-blue-600" : "text-gray-900 dark:text-white")}
                            >
                                Manage Permit
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavbarBottom;
