import React from 'react';

const Pagination = ({ totalContacts, contactPerPage, setCurrentPage, currentPage }) => {
   let pages = [];
   for (let i = 1; i <= Math.ceil(totalContacts / contactPerPage); i++) {
      pages.push(i);
   }

   return (
      <div>
         <div className="flex justify-center space-x-1 text-gray-800">
            {currentPage > 1 && (
               <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  title="previous"
                  type="button"
                  className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-gray-50 border-gray-100"
               >
                  <svg
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                     strokeWidth="2"
                     fill="none"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     className="w-4"
                  >
                     <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
               </button>
            )}

            {pages.map((page, index) => {
               return (
                  <button
                     key={index}
                     onClick={() => setCurrentPage(page)}
                     type="button"
                     title="Page 1"
                     className={`${
                        page === currentPage ? 'bg-red-600 text-white' : ''
                     } inline-flex items-center justify-center w-8 h-8 text-sm font-semibold  rounded shadow-md bg-gray-50   `}
                  >
                     {page}
                  </button>
               );
            })}

            {currentPage < pages.length && (
               <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  title="next"
                  type="button"
                  className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-gray-50 border-gray-100"
               >
                  <svg
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                     strokeWidth="2"
                     fill="none"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     className="w-4"
                  >
                     <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
               </button>
            )}
         </div>
      </div>
   );
};

export default Pagination;
