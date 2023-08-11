import React from 'react';

const Hero: React.FC = () => {
    return (
        <div id="prediction" className="overflow-hidden bg-travelBg py-3 sm:py-4 ring-opacity-5">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 sm:gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
                    <div className="lg:pr-8 lg:pt-1">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-indigo-600 mt-36 lg:mt-0 text-center sm:text-left">transit.gov.ss</h2>
                            <p className="mt-2 text-2xl font-bold tracking-tight text-travelBlue sm:text-4xl text-center sm:text-left">Apply for an Inter-County
                                Transit Permit Online!</p>
                            <p className="mt-4 text-lg leading-8 text-gray-600 text-center sm:text-left">
                                Vehicles containing goods leaving Juba to any state in
                                South Sudan must obtain an Inter-County Transit permit.
                            </p>
                        </div>
                        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                            <a
                                href="https://accounts.eservices.gov.ss/register/visitor"
                                className="rounded-md bg-travelBlue px-3.5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-travelBlueTwo focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                Apply Permit
                            </a>
                            {/* <a href="https://accounts.eservices.gov.ss/login" className="text-sm font-semibold leading-6 text-travelBlue">
                                Sign In <span aria-hidden="true">→</span>
                            </a> */}
                        </div>
                    </div>
                    <img
                        src="https://evisa.gov.ss/themes/ss-evisa/assets/img/overview/juba-aerial-view.jpg"
                        alt="Exam Prediction CentyPlus"
                        className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;