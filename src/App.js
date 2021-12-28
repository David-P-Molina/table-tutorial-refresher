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
        <h2>Add a contact</h2>
        <form>
          <input 
            type="text" 
            name='fullName' 
            required='required' 
            placeholder='Enter a Name...' 
          />
          <input 
            type="text" 
            name='address' 
            required='required' 
            placeholder='Enter an Address...' 
          />
          <input 
            type="text" 
            name='phoneNumber' 
            required='required' 
            placeholder='Enter a Phone Number...' 
          />
          <input 
            type="text" 
            name='email' 
            required='required' 
            placeholder='Enter an Email...' 
          />
          <button type='submit' name='submit'>Add</button>
        </form>
    </div>
  )
}

export default App
