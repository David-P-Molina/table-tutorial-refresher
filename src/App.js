import React, { useState } from 'react'
import './App.css'
import data from './mock-data.json'

const App = () => {
  const [contacts, setContacts] = useState(data)
  return (
    <div className='app-container'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.fullName}</td>
              <td>{contact.address}</td>
              <td>{contact.phoneNumber}</td>
              <td>{contact.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
