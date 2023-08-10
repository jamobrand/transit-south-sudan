import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white mt-6 rounded-lg dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="/" className="flex items-center mb-4 sm:mb-0">
            <img
              src="https://evisa.gov.ss/themes/ss-evisa/assets/img/DCRNPI.png"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold text-travelBlueTwo whitespace-nowrap dark:text-travelBlueTwo">
            Inter-County Border Transit Permit
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {/* <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li> */}
            <li>
              <a href="https://accounts.eservices.gov.ss/terms" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="https://www.eservices.gov.ss/" className="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            {/* <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li> */}
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 <a href="/" className="hover:underline">Republic of South Sudan</a>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
