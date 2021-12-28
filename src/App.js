import React, { useState } from 'react'
import './App.css'
import data from './mock-data.json'

const App = () => {
  const [contacts, setContacts] = useState(data)
  const [addFormData, setAddFormData] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    email: '',
  })
  const handleAddFormChange = (e) => {
    e.preventDefault()
    const fieldName = e.target.getAttribute('name')
    const fieldValue = e.target.value

    const newFormData = { ...addFormData}
    newFormData[fieldName] = fieldValue
    setAddFormData(newFormData)
  }
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
            onChange={handleAddFormChange()}
          />
          <input 
            type="text" 
            name='address' 
            required='required' 
            placeholder='Enter an Address...' 
            onChange={handleAddFormChange()}
          />
          <input 
            type="text" 
            name='phoneNumber' 
            required='required' 
            placeholder='Enter a Phone Number...' 
            onChange={handleAddFormChange()}
          />
          <input 
            type="text" 
            name='email' 
            required='required' 
            placeholder='Enter an Email...' 
            onChange={handleAddFormChange()}
          />
          <button type='submit' name='submit'>Add</button>
        </form>
    </div>
  )
}

export default App
