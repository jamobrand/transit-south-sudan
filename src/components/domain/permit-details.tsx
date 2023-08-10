import React from 'react'
import { useNavigate } from 'react-router-dom';

const PermitDetails: React.FC = () => {
    const navigate = useNavigate()

    const handlePayment = () => {
        // Navigate to the subject prediction page
        navigate("/transit/payment");
    };
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-7 lg:px-8">
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6">
                <div className="sm:col-span-full">
                        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                            Mode of transport
                        </label>
                        <div className="mt-2">
                            <select
                                id="country"
                                name="country"
                                autoComplete="country-name"
                                className="block w-full rounded-md border-gray-300 py-2 px-3 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 focus:ring focus:ring-opacity-50 sm:text-sm"
                            >
                                <option>Select transport mode</option>
                                <option>Road</option>
                                <option>Air</option>
                                <option>Water</option>
                            </select>
                        </div>
                    </div>

                    <h2 className="text-base font-semibold leading-7 text-gray-900">Consignmnet Details</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                        Please enter your consignment details
                    </p>

                    <div className="sm:col-span-full">
                        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                            Consignmnet Type
                        </label>
                        <div className="mt-2">
                            <select
                                id="country"
                                name="country"
                                autoComplete="country-name"
                                className="block w-full rounded-md border-gray-300 py-2 px-3 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 focus:ring focus:ring-opacity-50 sm:text-sm"
                            >
                                <option>Select a consignment type</option>
                                <option>Petroleum</option>
                                <option>Food Stuff</option>
                                <option>Furniture</option>
                            </select>
                        </div>
                    </div>

                    <div className="sm:col-span-full">
                        <label htmlFor="valueOfGoods" className="block text-sm font-medium leading-6 text-gray-900">
                            Value of Goods
                        </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                id="valueOfGoods"
                                name="valueOfGoods"
                                autoComplete="off"
                                placeholder='e.g 30,000'
                                className="block w-full rounded-md border-gray-300 py-2 px-3 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 focus:ring focus:ring-opacity-50 sm:text-sm"
                            />
                        </div>
                    </div>

                    <hr />

                    <h2 className="text-base font-semibold leading-6 text-gray-900">Vehicle Details</h2>
                    <p className="text-sm leading-6 text-gray-600">
                        Please enter your vehicle details
                    </p>

                    <div className="sm:col-span-full">
                        <label htmlFor="vehicleRegistration" className="block text-sm font-medium leading-6 text-gray-900">
                            Vehicle Registration
                        </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                id="vehicleRegistration"
                                name="vehicleRegistration"
                                autoComplete="off"
                                placeholder='e,g SSD 0178'
                                className="block w-full rounded-md border-gray-300 py-2 px-3 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 focus:ring focus:ring-opacity-50 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-full">
                        <label htmlFor="vehicleType" className="block text-sm font-medium leading-6 text-gray-900">
                            Vehicle Type
                        </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                id="vehicleType"
                                name="vehicleType"
                                autoComplete="off"
                                className="block w-full rounded-md border-gray-300 py-2 px-3 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 focus:ring focus:ring-opacity-50 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-full">
                        <label htmlFor="driverLicense" className="block text-sm font-medium leading-6 text-gray-900">
                            Driver's Name
                        </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                id="driverLicense"
                                name="driverLicense"
                                autoComplete="off"
                                placeholder='e.g John'
                                className="block w-full rounded-md border-gray-300 py-2 px-3 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 focus:ring focus:ring-opacity-50 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-full">
                        <label htmlFor="driverLicense" className="block text-sm font-medium leading-6 text-gray-900">
                            Driver's Phone Number
                        </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                id="driverLicense"
                                name="driverLicense"
                                autoComplete="off"
                                className="block w-full rounded-md border-gray-300 py-2 px-3 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 focus:ring focus:ring-opacity-50 sm:text-sm"
                            />
                        </div>
                    </div>

                    {/* <div className="sm:col-span-full">
                        <label htmlFor="insurance" className="block text-sm font-medium leading-6 text-gray-900">
                            Insurance Details
                        </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                id="insurance"
                                name="insurance"
                                autoComplete="off"
                                className="block w-full rounded-md border-gray-300 py-2 px-3 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 focus:ring focus:ring-opacity-50 sm:text-sm"
                            />
                        </div>
                    </div> */}

                    <hr />

                    <div className="mt-6 gap-x-6">
                        <button
                            role="button"
                            onClick={handlePayment}
                            className="w-full rounded-md bg-travelButton px-3 py-3 text-sm font-medium text-white shadow-sm hover:bg-travelBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Continue to Payment
                        </button>
                    </div>


                </form>
            </div>
        </div>
    )
}

export default PermitDetails