import React, { useState } from 'react'

enum Tab {
  CreditCard = 'creditCard',
  MobileMoney = 'mobileMoney',
  NetBanking = 'netBanking',
}

const Payment: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.CreditCard);

  const renderTabContent = () => {
    switch (activeTab) {
      case Tab.CreditCard:
        return (
          <>
            <div className="mt-6 grid grid-cols-3 sm:grid-cols-4 gap-y-6 gap-x-4">
              <div className="col-span-3 sm:col-span-4">
                <label htmlFor="name-on-card" className="block text-sm font-medium text-gray-700">
                  Name on card
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="name-on-card"
                    name="name-on-card"
                    autoComplete="cc-name"
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="col-span-3 sm:col-span-4">
                <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">
                  Card number
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="card-number"
                    name="card-number"
                    autoComplete="cc-number"
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="col-span-2 sm:col-span-3">
                <label htmlFor="expiration-date" className="block text-sm font-medium text-gray-700">
                  Expiration date (MM/YY)
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="expiration-date"
                    id="expiration-date"
                    autoComplete="cc-exp"
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
                  CVC
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="cvc"
                    id="cvc"
                    autoComplete="csc"
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>


            </div>
            <hr />
            <div className="mt-6 gap-x-6">
              <button
                role="button"
                //onClick={handlePayment}
                className="w-full rounded-md bg-travelButton mb-4 px-3 py-3 text-sm font-medium text-white shadow-sm hover:bg-travelBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Pay
              </button>
            </div>
          </>
        );
      case Tab.MobileMoney:
        return (
          <>
            <div className="mt-6 grid grid-cols-3 sm:grid-cols-4 gap-y-6 gap-x-4">
              <div className="col-span-3 sm:col-span-4">
                <label htmlFor="name-on-card" className="block text-sm font-medium text-gray-700">
                  Enter Number
                </label>
                <div className="mt-1">
                  <input
                    type="tel"
                    id="name-on-card"
                    name="name-on-card"
                    autoComplete="cc-name"
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="col-span-3 sm:col-span-4">
                <label htmlFor="name-on-card" className="block text-sm font-medium text-gray-700">
                  Enter Amount
                </label>
                <div className="mt-1">
                  <input
                    type="number"
                    id="name-on-card"
                    name="name-on-card"
                    autoComplete="cc-name"
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>

            <hr />
            <div className="mt-6 gap-x-6">
              <button
                role="button"
                //onClick={handlePayment}
                className="w-full rounded-md bg-travelButton mb-4 px-3 py-3 text-sm font-medium text-white shadow-sm hover:bg-travelBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Pay
              </button>
            </div>
          </>
        );
      case Tab.NetBanking:
        return (
          <>
            <div className="mt-6 grid grid-cols-3 sm:grid-cols-4 gap-y-6 gap-x-4">
              <div className="col-span-3 sm:col-span-4">
                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                  Select your Wallet
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md border-gray-300 py-2 px-3 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 focus:ring focus:ring-opacity-50 sm:text-sm"
                  >
                    <option>Select Wallet</option>
                    <option>M-Gurush</option>
                    <option>My-Wallet</option>
                  </select>
                </div>
              </div>
            </div>

            <hr />
            <div className="mt-6 gap-x-6">
              <button
                role="button"
                //onClick={handlePayment}
                className="w-full rounded-md bg-travelButton mb-4 px-3 py-3 text-sm font-medium text-white shadow-sm hover:bg-travelBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Proceed to payment
              </button>
            </div>
          </>
        );
      default:
        return null;
    }
  };
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-7 lg:px-8">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

        <h2 className="text-base font-semibold leading-7 text-gray-900">Payment Details</h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Please enter your payment details
        </p>

        <div className="mt-7 max-w-3xl px-3 bg-white rounded-lg shadow-lg">
          <div className="flex justify-between border-b p-4">
            <div
              className={`cursor-pointer ${activeTab === Tab.CreditCard ? 'text-blue-500 border-b-2 border-blue-500' : ''
                }`}
              onClick={() => setActiveTab(Tab.CreditCard)}
            >
              Credit Card
            </div>
            <div
              className={`cursor-pointer ${activeTab === Tab.MobileMoney ? 'text-blue-500 border-b-2 border-blue-500' : ''
                }`}
              onClick={() => setActiveTab(Tab.MobileMoney)}
            >
              Mobile Money
            </div>
            <div
              className={`cursor-pointer ${activeTab === Tab.NetBanking ? 'text-blue-500 border-b-2 border-blue-500' : ''
                }`}
              onClick={() => setActiveTab(Tab.NetBanking)}
            >
              CapitalPay
            </div>
          </div>
          {renderTabContent()}
        </div>

      </div>
    </div>
  )
}

export default Payment