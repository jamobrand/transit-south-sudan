import React, { useState } from 'react'

const ValidatePermit: React.FC = () => {
    const [permitNumber, setPermitNumber] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showTable, setShowTable] = useState(false);

    const permitDetails = [
        {
            id: 1,
            transporter: {
                image: 'https://intercrossadmin.netlify.app/assets/img/team-2.jpg',
                name: 'Trinity Logistics',
                driverName: 'David Ayong',
            },
            vehicle: {
                type: 'Oil Tanker',
                model: ' SSD 765T',
                color: 'White',
            },
            consignment: {
                consignor: 'Trinity Logistics',
                consignee: 'EAGOL Ltd',
            },
            status: {
                status: 'Active', // Change this to 'Expired' as needed
            },
            permitNumber: permitNumber,
            payment: '$200',
        },
    ];

    const handleSearch = () => {
        setIsLoading(true);
        // Simulate API call or validation logic
        setTimeout(() => {
            setIsLoading(false);
            setShowTable(true);
        }, 2000); // Simulating a 2-second delay
    };

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-7 lg:px-8">
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-6xl">
                <div className="mt-4 pt-16 mb-5 flex justify-center space-x-4">

                    <input
                        type="text"
                        id="permitNumber"
                        name="permitNumber"
                        autoComplete="off"
                        className="block w-1/3 rounded-md border-gray-300 py-2 px-3 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 focus:ring focus:ring-opacity-50 sm:text-sm"
                        placeholder="Enter Permit Number"
                        value={permitNumber}
                        onChange={(e) => setPermitNumber(e.target.value)}
                    />
                    <button
                        type="button"
                        onClick={handleSearch}
                        className="ml-2 bg-travelButton hover:bg-travelBlue focus:ring-travelBlue focus:ring-offset-2 focus:ring focus:ring-opacity-50 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white shadow-sm disabled:opacity-50"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <>
                                <svg
                                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >

                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291a7.962 7.962 0 01-2-4.892H0c0 3.042.546 5.993 1.537 8.709l3.463-7.98zM20 12c0-4.418-3.582-8-8-8s-8 3.582-8 8h16zm-1.463 7.709A7.963 7.963 0 0022 12h-4c0 2.35-.815 4.525-2.176 6.282l3.713 7.979z"
                                    ></path>
                                </svg>
                                Searching...
                            </>
                        ) : (
                            'Search'
                        )}
                    </button>
                </div>

                {showTable && (
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        {/* ... Your table header and search inputs ... */}
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="p-4">
                                        {/* ... Checkbox input ... */}
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Transporter Details
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Vehicle Details
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Consignment Details
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Permit Status
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Permit Number
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Payment
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {permitDetails.map((permit) => (
                                    <tr
                                        key={permit.id}
                                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                    >
                                        <td className="w-4 p-4">
                                            {/* ... Checkbox input ... */}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center">
                                                <img
                                                    className="w-10 h-10 rounded-full"
                                                    src={permit.transporter.image}
                                                    alt={permit.transporter.name}
                                                />
                                                <div className="pl-3">
                                                    <div className="text-base font-semibold">
                                                        {permit.transporter.name}
                                                    </div>
                                                    <div className="font-normal text-gray-500">
                                                        Driver: {permit.transporter.driverName}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div>
                                                <div className='mb-1'>Type: {permit.vehicle.type}</div>
                                                <div className='mb-1'>Model:  {permit.vehicle.model}</div>

                                            </div>
                                            <div className="text-gray-500">
                                                Color: {permit.vehicle.color}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="mb-1">Consignor: {permit.consignment.consignor}</div>
                                            <div className="mb-1">Consignee: {permit.consignment.consignee}</div>

                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className={permit.status.status === 'Active' ? 'bg-green-500 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300"' : 'bg-red-500 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300'}>{permit.status.status}</span>
                                        </td>
                                        <td className="px-6 py-4">{permit.permitNumber}</td>
                                        <td className="px-6 py-4">{permit.payment}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

            </div>
        </div>
    )
}

export default ValidatePermit