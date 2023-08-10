import React from 'react'

// Mock permit details data
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
        permitNumber: "ICTPL-02029X",
        payment: '$50',
    },
    {
        id: 2,
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
            status: 'Expired', // Change this to 'Expired' as needed
        },
        permitNumber: "ICTPL-02018X",
        payment: '$50'
    },
    {
        id: 3,
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
            status: 'Expired', // Change this to 'Expired' as needed
        },
        permitNumber: 'ICTPL-01039Y',
        payment: '$50',
    },
    {
        id: 4,
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
            status: 'Expired', // Change this to 'Expired' as needed
        },
        permitNumber: 'ICTPL-01029Y',
        payment: '$50',
    },
    // Add more permit details...
];

const ManagePermit: React.FC = () => {

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-7 lg:px-8">
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-8xl">
                <div className="relative overflow-x-auto mb-6 shadow-md sm:rounded-lg">
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
                                <th scope="col" className="px-6 py-3">
                                    Action
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
                                    <td className="px-6 py-4">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ManagePermit