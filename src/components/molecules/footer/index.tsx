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
            <span className="self-center text-base sm:text-2xl font-semibold text-travelBlueTwo whitespace-nowrap dark:text-travelBlueTwo">
              Inter-County Border Transit Permit
            </span>

          </a>
          <ul className="flex flex-wrap items-center mb-4 sm:mb-0 text-sm font-medium text-gray-500 sm:text-base dark:text-gray-400">
            <li>
              <a href="https://accounts.eservices.gov.ss/terms" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="https://www.eservices.gov.ss/" className="mr-4 hover:underline md:mr-6">
                Licensing
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-6" />
        <div className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          <span className="block mb-2 sm:inline-block sm:mb-0">
            © 2023 <a href="/" className="hover:underline">Republic of South Sudan</a>.
          </span>
          <span className="block sm:inline-block">
            All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
