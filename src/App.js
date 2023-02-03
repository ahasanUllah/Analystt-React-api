import './App.css';
import Contacts from './components/Contacts';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Pagination from './components/Pagination';

function App() {
   const [contacts, setContacts] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [contactPerPage, setContactPerPage] = useState(3);

   useEffect(() => {
      axios
         .get('https://jsonplaceholder.typicode.com/users')
         .then((res) => setContacts(res.data))
         .catch((err) => console.log(err));
   }, []);
   const lastContactIndex = currentPage * contactPerPage;
   const firstContactIndex = lastContactIndex - contactPerPage;
   const currentContacts = contacts.slice(firstContactIndex, lastContactIndex);
   return (
      <div className="">
         <Contacts contactsData={currentContacts}></Contacts>
         <Pagination
            totalContacts={contacts.length}
            contactPerPage={contactPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
         ></Pagination>
      </div>
   );
}

export default App;
