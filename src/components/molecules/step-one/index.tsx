import React from 'react';

const StepOne: React.FC = () => {
    return (
        <div id="prediction" className="overflow-hidden bg-white py-5 sm:py-14">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 sm:gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <p className="mt-6 text-2xl font-bold tracking-tight text-speedyTra sm:text-4xl text-center sm:text-left">Transit Permit Management</p>
                            <p className="mt-4 text-lg leading-8 text-gray-600 text-center sm:text-left">
                                Transporters log in to the government’s e- service
                                portal, apply for an inter-county transit permit,
                                details get validated a permit is sent to email.
                            </p>
                        </div>
                    </div>
                    <img
                        src="https://images.unsplash.com/photo-1601342550031-d6df73676153?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                        alt="Exam Prediction CentyPlus"
                        className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10"
                    />
                </div>
            </div>
        </div>
    );
};

export default StepOne;