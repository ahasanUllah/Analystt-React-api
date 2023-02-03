import React, { useState } from 'react';

const Contact = ({ contact }) => {
   const { name, company, address, email, phone } = contact;

   const [toggleDetails, setToggleDetails] = useState(false);
   return (
      <>
         <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50">
            <td className="p-3 pl-20 py-10 text-lg">
               <p>{company.name}</p>
            </td>
            <td className="p-3 text-lg">
               <h2 className=" font-semibold text-md">Contact</h2>
               <p className="text-md">{name}</p>
            </td>
            <td className="p-3 text-lg">
               <h2 className=" font-semibold text-md">City</h2>
               <p>{address.city}</p>
            </td>
            <td className="p-3 text-lg">
               <h2 className=" font-semibold text-md">Street</h2>
               <p>{address.street}</p>
            </td>

            <td className="p-3 text-lg">
               <button
                  onClick={() => setToggleDetails(!toggleDetails)}
                  type="button"
                  className="px-3 py-1   rounded-full bg-red-500 text-gray-100"
               >
                  {toggleDetails ? 'Hide Details' : 'View Details'}
               </button>
            </td>
         </tr>
         {/* View Details */}
         {toggleDetails && (
            <tr className={`border-b border-opacity-20 border-gray-300 bg-gray-50 text-lg`}>
               <td className="p-3  " colSpan={5}>
                  <div className="p-20">
                     <p className="text-md">
                        Sells and coordinates transportation, accommodations, insurance, tours and activities. Advises
                        clients regarding destinations, cultures, customs, weather and activities. Collects payments,
                        books travel arrangements and pays applicable fees. Handles travel issues, conflicts,
                        complaints, cancelations and refunds
                     </p>
                     <div className="py-4 flex justify-between w-2/4">
                        <div>
                           <div className="py-3">
                              <h1 className="font-semibold">Contact person</h1>
                              <p>{name}</p>
                           </div>
                           <div className="py-3">
                              <h1 className="font-semibold">Designation</h1>
                              <p>{company.bs}</p>
                           </div>
                           <div className="py-3">
                              <h1 className="font-semibold">Email</h1>
                              <p>{email}</p>
                           </div>
                           <div className="py-3">
                              <h1 className="font-semibold">Phone</h1>
                              <p>{phone}</p>
                           </div>
                        </div>
                        {/* Address */}
                        <div>
                           <div className="py-3">
                              <h1 className="font-semibold">Address</h1>
                              <p>{address.suite}</p>
                           </div>
                           <div className="py-3">
                              <h1 className="font-semibold">Street</h1>
                              <p>{address.street}</p>
                           </div>
                           <div className="py-3">
                              <h1 className="font-semibold">City</h1>
                              <p>{address.city}</p>
                           </div>
                           <div className="py-3">
                              <h1 className="font-semibold">Zip Code</h1>
                              <p>{address.zipcode}</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </td>
            </tr>
         )}
      </>
   );
};

export default Contact;
