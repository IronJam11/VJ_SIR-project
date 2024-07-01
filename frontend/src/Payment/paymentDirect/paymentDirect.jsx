import React from 'react';

import Navbar from '../../Mentorship/Navbar';


const PaymentDirect = () => {
  return (
    <>
      <Navbar />
      <div className="p-4 border rounded-lg shadow-md bg-green-50">
            <p className="mb-4">
              Choose the <strong>PAY NOW</strong> option to continue with checkout. You will still have a chance to review and edit your order before it is finalized.
            </p>
            <hr className="my-4" />
            <h3 className="text-xl font-semibold mb-2">Order Summary</h3>
            <div className="flex justify-between mb-4">
              <span className="font-medium">Item Name</span>
              <span>Mentorship Session'25</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="font-medium">Price</span>
              <span>₹5,000</span>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between mb-4">
              <span className="font-semibold text-green-700">Order Total</span>
              <span className="font-semibold text-green-700">₹5,000</span>
            </div>
            <div className="flex justify-center">
              <button className="bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-green-700">
                PAY NOW
              </button>
            </div>
          </div>
      </>
  )
}
export default PaymentDirect;
      
      