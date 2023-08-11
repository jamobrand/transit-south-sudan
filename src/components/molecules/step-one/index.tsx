import React from 'react';
import StepImage from "../../../assets/TRAVEL.png"

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
                        src={StepImage}
                        alt="Exam Prediction CentyPlus"
                        className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10"
                    />
                </div>
            </div>
        </div>
    );
};

export default StepOne;