import React, { useState } from 'react';
import { citiesTownsVillages, countries } from '../../utils/data';
import { useNavigate } from 'react-router-dom';

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

const TravelWidget: React.FC = () => {
    const navigate = useNavigate()

    const [activeTab, setActiveTab] = useState('flight');
    const [tripType, setTripType] = useState('one-way');
    const [oneWayDepartureDate, setOneWayDepartureDate] = useState<Date | null>(null);
    const [roundTripDepartureDate, setRoundTripDepartureDate] = useState<Date | null>(null);
    const [returnDate, setReturnDate] = useState<Date | null>(null);
    const [selectedTripType, setSelectedTripType] = useState('local');

    const [permitNumber, setPermitNumber] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = () => {
        setIsLoading(true);
        // Simulate API call or validation logic
        setTimeout(() => {
            setIsLoading(false);
            // Redirect to the "transit/validate-permit" page
            // navigate('/transit/validate-permit');
            navigate(`/transit/validate-permit?permitNumber=${permitNumber}`)
        }, 2000); // Simulating a 2-second delay
    };


    return (
        
        <div className="flex justify-center mb-9">
            <div className="w-full -mt-32 max-w-5xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex font-semibold justify-center relative border-b border-gray-200 mb-4 space-x-4">
                    <TabButton
                        active={activeTab === 'flight'}
                        onClick={() => setActiveTab('flight')}
                    >
                        Trip Details
                    </TabButton>
                    {/* <TabButton
                        active={activeTab === 'hotel'}
                        onClick={() => setActiveTab('hotel')}
                    >
                        Validate Permit
                    </TabButton>
                    <TabButton
                        active={activeTab === 'car'}
                        onClick={() => setActiveTab('car')}
                    >
                        Manage Permit
                    </TabButton> */}
                </div>
                {activeTab === 'hotel' &&
                    <div className="px-6">
                        <div className="mt-4 mb-5 flex justify-center space-x-4">
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
                                className="ml-2 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-2 focus:ring focus:ring-opacity-50 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white shadow-sm disabled:opacity-50"
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

                    </div>
                }
                {activeTab === 'flight' && (
                    <div className="px-6">
                        <div className="flex space-x-4 mb-4">
                            <TabButton
                                active={tripType === 'one-way'}
                                onClick={() => setTripType('one-way')}
                            >
                                One Way
                            </TabButton>
                            <TabButton
                                active={tripType === 'round-trip'}
                                onClick={() => setTripType('round-trip')}
                            >
                                Round Trip
                            </TabButton>
                        </div>
                        <BookingForm
                            tripType={tripType}
                            selectedTripType={selectedTripType}
                            setSelectedTripType={setSelectedTripType}
                            oneWayDepartureDate={oneWayDepartureDate}
                            setOneWayDepartureDate={setOneWayDepartureDate}
                            roundTripDepartureDate={roundTripDepartureDate}
                            setRoundTripDepartureDate={setRoundTripDepartureDate}
                            returnDate={returnDate}
                            setReturnDate={setReturnDate}
                        />
                    </div>
                )}
                {activeTab === 'car' && <div className="px-6">
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
                    </div></div>}
            </div>
        </div>
    );
};

const BookingForm: React.FC<{
    tripType: string;
    selectedTripType: string;
    setSelectedTripType: (tripType: string) => void;
    oneWayDepartureDate: Date | null;
    setOneWayDepartureDate: (date: Date | null) => void;
    roundTripDepartureDate: Date | null;
    setRoundTripDepartureDate: (date: Date | null) => void;
    returnDate: Date | null;
    setReturnDate: (date: Date | null) => void;
}> = ({ tripType, selectedTripType, oneWayDepartureDate, setOneWayDepartureDate, roundTripDepartureDate, setRoundTripDepartureDate, returnDate, setReturnDate }) => {

    const [isLoading, setIsLoading] = useState(false);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const navigate = useNavigate()

    const isDateValid = (date: Date | null) => {
        return date !== null && date >= today;
    };

    const clearReturnDate = () => {
        if (tripType === 'round-trip') {
            setReturnDate(null);
        }
    };

    const handleBooking = async () => {
        setIsLoading(true); // Show loading
        // Simulate a delay of 3 seconds using setTimeout
        setTimeout(() => {
            setIsLoading(false); // Hide loading
            navigate("/transit/register");
        }, 3000);
    };

    console.log(setOneWayDepartureDate, setRoundTripDepartureDate, setReturnDate)
    // Define options for leaving from and going to based on selected trip type and location
    const leavingFromOptions =
        selectedTripType === 'local'
            ? citiesTownsVillages // Use the array from the data.ts file
            : countries; // Use the array from the data.ts file

    const goingToOptions = citiesTownsVillages; // Always show local city states or villages for Going To

    return (
        <div className="mt-4 mb-5 flex space-x-4">
            {isLoading && (
                <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
                </div>
            )}
            {/* <select
                className="w-1/4 border border-gray-300 rounded-lg p-2"
                value={selectedTripType}
                onChange={(e) => setSelectedTripType(e.target.value)}
            >
                <option value="local">Local</option>
                <option value="international">International</option>
            </select> */}
            <select
                className="sm:w-1/4 w-full border border-gray-300 rounded-lg p-2"
                defaultValue=""
            >
                <option value="" disabled>
                    Origin
                </option>
                {leavingFromOptions.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <select
                className="sm:w-1/4 w-full border border-gray-300 rounded-lg p-2"
                defaultValue=""
            >
                <option value="" disabled>
                    Destination
                </option>
                {goingToOptions.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <input
                type="date"
                className={`sm:w-1/6 w-full border border-gray-300 rounded-lg p-2`}
                value={tripType === 'one-way' && oneWayDepartureDate ? oneWayDepartureDate.toISOString().slice(0, 10) : tripType === 'round-trip' && roundTripDepartureDate ? roundTripDepartureDate.toISOString().slice(0, 10) : ''}
                min={today.toISOString().slice(0, 10)}
                onChange={(e) => {
                    if (tripType === 'one-way') {
                        setOneWayDepartureDate(new Date(e.target.value));
                        clearReturnDate();
                    } else if (tripType === 'round-trip') {
                        setRoundTripDepartureDate(new Date(e.target.value));
                    }
                }}
            />
            {tripType === 'round-trip' && (
                <input
                    type="date"
                    className={`sm:w-1/6 w-full border border-gray-300 rounded-lg p-2`}
                    value={returnDate ? returnDate.toISOString().slice(0, 10) : ''}
                    min={tripType === 'round-trip' && roundTripDepartureDate ? roundTripDepartureDate.toISOString().slice(0, 10) : today.toISOString().slice(0, 10)}
                    onChange={(e) => setReturnDate(new Date(e.target.value))}
                />
            )}
            <button
                className={`bg-blue-500 text-white py-2 px-4 rounded-lg ${(tripType === 'one-way' && !isDateValid(oneWayDepartureDate)) ||
                    (tripType === 'round-trip' && (
                        !isDateValid(roundTripDepartureDate) ||
                        (returnDate !== null && !isDateValid(returnDate))
                    ))
                    ? 'cursor-not-allowed opacity-50'
                    : ''
                    }`}
                disabled={
                    (tripType === 'one-way' && !isDateValid(oneWayDepartureDate)) ||
                    (tripType === 'round-trip' && (
                        !isDateValid(roundTripDepartureDate) ||
                        (returnDate !== null && !isDateValid(returnDate))
                    ))
                }
                onClick={handleBooking}
                role="button"
            >
                {tripType === 'one-way' ? 'Apply Permit' : 'Apply Permit'}
            </button>


        </div>
    );
};

interface TabButtonProps {
    active: boolean;
    onClick: () => void;
    children: React.ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({ active, onClick, children }) => (
    <button
        onClick={onClick}
        className={`py-3 px-4 ${active ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-900'
            }`}
    >
        {children}
    </button>
);

export default TravelWidget;
