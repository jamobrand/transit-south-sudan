import React, { useEffect, useRef } from 'react';
import QRCode from 'qrcode';

const ViewPermit: React.FC = () => {
    const qrCodeRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        generateQRCode();
    }, []);

    // Placeholder for QR code data (replace with actual data)
    const qrCodeData = JSON.stringify({
        permitNumber: 'ICTPL-02037X',
        startDate: '2023-08-15',
        endDate: '2023-08-31',
        origin: 'Juba',
        destination: 'Malakal',
        issuedTo: 'David Anyang',
        dateIssued: '2023-08-10',
        validity: '30 days',
    });

    const generateQRCode = async () => {
        try {
            const qrCodeUrl = await QRCode.toDataURL(qrCodeData);
            if (qrCodeRef.current) {
                qrCodeRef.current.src = qrCodeUrl;
            }
        } catch (error) {
            console.error('Error generating QR code:', error);
        }
    };

    return (
        <div className="bg-white p-8 shadow-lg rounded-lg border">

            <div className="flex justify-center items-center pt-20 mb-6">
                <img
                    src="https://evisa.gov.ss/themes/ss-evisa/assets/img/DCRNPI.png"
                    alt="South Sudan Logo" className="h-24 w-24" />
            </div>
            <h2 className="text-lg text-center mb-6 font-semibold">Republic of South Sudan</h2>

            <table className="flex justify-center items-center mb-4">
                <tbody>
                    <tr>
                        <td className="pl-36 pr-5 py-1 font-semibold">Permit Number:</td>
                        <td>TP123456</td>
                    </tr>
                    <tr>
                        <td className="pl-36 pr-5 py-1 font-semibold">Valid from:</td>
                        <td>2023-08-15 to 2023-08-31</td>
                    </tr>
                    <tr>
                        <td className="pl-36 pr-5 py-1 font-semibold">Origin:</td>
                        <td>Mombasa</td>
                    </tr>
                    <tr>
                        <td className="pl-36 pr-5 py-1 font-semibold">Destination:</td>
                        <td>Juba</td>
                    </tr>
                    <tr>
                        <td className="pl-36 pr-5 py-1 font-semibold">Issued to:</td>
                        <td>David Anyang</td>
                    </tr>
                    <tr>
                        <td className="pl-36 pr-5 py-1 font-semibold">Date Issued:</td>
                        <td>2023-08-10</td>
                    </tr>
                    <tr>
                        <td className="pl-36 pr-5 py-1 font-semibold">Validity:</td>
                        <td>30 days</td>
                    </tr>
                </tbody>
            </table>


            <div className="mb-4 text-center">
                <img ref={qrCodeRef} alt="QR Code" className="h-24 mx-auto" />
            </div>
            <p className="text-sm flex justify-center items-center text-gray-600">
                This permit is issued for the transportation of goods in transit. Please ensure compliance
                with all relevant regulations.
            </p>
        </div>
    );
};

export default ViewPermit;
