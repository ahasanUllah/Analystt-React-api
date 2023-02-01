import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Contact from './Contact';


const Contacts = () => {
	
	const [contacts, setContacts] = useState([])
	
	useEffect(() =>{
		axios.get('https://jsonplaceholder.typicode.com/users')
		.then(res => setContacts(res.data))
		.catch(err => console.log(err))
	},[])
	console.log(contacts);
	
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
				
				<col className=""/>
			</colgroup>
			<thead className="bg-gray-300">
				
			</thead>
			<tbody>
				{
					contacts.map(contact => <Contact key={contact.id} contact={contact}></Contact> )
				}
				
			</tbody>
		</table>
	</div>
</div>
    );
};

export default Contacts;