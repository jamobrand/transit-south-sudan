import React from 'react'

const VehicleConsignment: React.FC = () => {
    return (
        <div id="prediction" className="overflow-hidden bg-white py-5 sm:py-14">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 sm:gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-gr-600">STEP 3</h2>
                            <p className="mt-6 text-2xl font-bold tracking-tight text-speedyTra sm:text-4xl text-center sm:text-left">Vehicle & Consignment Tracking</p>
                            <p className="mt-4 text-lg leading-8 text-gray-600 text-center sm:text-left">
                                Throughout the entire transportation process,
                                Intercross will enable continuous monitoring of
                                vehicles and their associated consignments, all
                                lined to their respective transit permits

                                <br />
                                <br />

                                Leveraging Speed Governor technology, the
                                system can provide precise real-time location
                                tracing of vehicles, ensuring adherence to
                                approved routes and destinations.
                            </p>
                        </div>
                    </div>
                    <img
                        src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                        alt="Exam Prediction CentyPlus"
                        className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10"
                    />
                </div>
            </div>
        </div>
    )
}

export default VehicleConsignment