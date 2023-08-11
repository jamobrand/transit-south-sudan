import React from 'react';

const NavbarTop: React.FC = () => {
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <a href="/" className="flex items-center">
                    <img
                        src="https://evisa.gov.ss/themes/ss-evisa/assets/img/DCRNPI.png"
                        className="h-8 mr-3"
                        alt="South Sudan Country Logo"
                    />
                    <span className="self-center text-2xl text-travelBlue font-semibold whitespace-nowrap dark:text-white">
                        Inter-County Border Transit Permit
                    </span>
                </a>
                <div className="flex items-center">
                    {/* <a
                        href="tel:5541251234"
                        className="mr-6 text-sm text-gray-500 dark:text-white hover:underline"
                    >
                        (555) 412-1234
                    </a> */}
                    <a
                        href="https://accounts.eservices.gov.ss/login"
                        className="text-sm font-semibold text-blue-600 dark:text-blue-500 hover:underline"
                    >
                        Sign Out
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default NavbarTop;
