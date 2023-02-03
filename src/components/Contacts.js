import React from 'react';
import Contact from './Contact';

const Contacts = ({ contactsData }) => {
   console.log(contactsData);
   return (
      <div className="container p-2 mx-auto sm:p-4 text-gray-800">
         <h2 className="mb-4 text-2xl font-semibold leading-tight">Contacts</h2>
         <div className="overflow-x-auto">
            <table className="min-w-full text-xs">
               <colgroup>
                  <col />
                  <col />
                  <col />
                  <col />

                  <col className="" />
               </colgroup>
               <thead className="bg-gray-300"></thead>
               <tbody>
                  {contactsData.map((contact) => (
                     <Contact key={contact.id} contact={contact}></Contact>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default Contacts;
