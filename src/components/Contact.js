import React, { useState } from 'react';

const Contact = ({ contact }) => {
   const { name } = contact;
   console.log(name);
   const [toggleDetails, setToggleDetails] = useState(false);
   return (
      <>
         <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50">
            <td className="p-3">
               <p>Hellomet</p>
            </td>
            <td className="p-3">
               <h2 className=" font-semibold text-md">Contact</h2>
               <p className="text-md">{name}</p>
            </td>
            <td className="p-3">
               <h2 className=" font-semibold text-md">City</h2>
               <p>14 Jan 2022</p>
               <p className="text-gray-600">Friday</p>
            </td>
            <td className="p-3">
               <h2 className=" font-semibold text-md">States</h2>
               <p>01 Feb 2022</p>
            </td>

            <td className="p-3 ">
               <button
                  onClick={() => setToggleDetails(!toggleDetails)}
                  type="button"
                  className="px-2 py-1   rounded-full bg-red-500 text-gray-100"
               >
                  View details
               </button>
            </td>
         </tr>
         {/* View Details */}
         {toggleDetails && (
            <tr className={`border-b border-opacity-20 border-gray-300 bg-gray-50 `}>
               <td className="p-3 text-right  h-96" colSpan={5}></td>
            </tr>
         )}
      </>
   );
};

export default Contact;
