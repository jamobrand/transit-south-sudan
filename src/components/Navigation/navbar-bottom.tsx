import React from 'react';

const NavbarBottom: React.FC = () => {
    return (
        <nav className="bg-gray-50 dark:bg-gray-700">
            <div className="max-w-screen-xl px-4 py-3 mx-auto">
                <div className="flex items-center">
                    <ul className="flex flex-row font-semibold mt-0 mr-6 space-x-8 text-sm">
                        <li>
                            <a
                                href="/"
                                className="text-gray-900 dark:text-white hover:text-blue-600"
                                aria-current="page"
                            >
                                Home
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavbarBottom;
