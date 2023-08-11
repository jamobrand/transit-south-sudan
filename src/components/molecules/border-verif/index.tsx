import React from 'react';
import BorderImage from "../../../assets/boarder-1.png"

const BorderVerif: React.FC = () => {
    return (
        <div id="ai-learning" className="overflow-hidden bg-borderVerif py-5 sm:py-14">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 sm:gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
                    <img
                        src={BorderImage}
                        alt="AI Powered CentyPlus"
                        className="hidden sm:block w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10"
                    />
                    <div className="lg:pl-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-gr-600">STEP 2</h2>
                            <p className="mt-6 text-2xl font-bold tracking-tight text-speedyTra sm:text-4xl text-center sm:text-left">Border Verification Management</p>
                            <p className="mt-4 text-lg leading-8 text-gray-600 text-center sm:text-left">
                                Transporters Present their permit to the border
                                officer at county border of entry. The officer
                                validates the transit permit and check goods in
                                transit.
                                <br />
                                <br />
                                Finally, if there is no issue with permit
                                application or documents, the officer will
                                stamp the transporters transit permit and
                                welcome them to the next state.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="sm:hidden mt-6">
                    <img
                        src={BorderImage}
                        alt="Product screenshot"
                        className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10"
                    />
                </div>
            </div>
        </div>
    );
};

export default BorderVerif;