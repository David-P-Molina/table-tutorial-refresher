import React, { useState } from 'react'
import './App.css'
import data from './mock-data.json'
import { nanoid } from 'nanoid'
import ReadOnlyRow from './components/ReadOnlyRow'
import EditableRow from './components/EditableRow'

const App = () => {
  const [contacts, setContacts] = useState(data)
  const [addFormData, setAddFormData] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    email: '',
  })
  const [editFormData, setEditFormData] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    email: '',
  })
  const [editContactId, setEditContactId] = useState(null)
  const handleAddFormChange = (e) => {
    e.preventDefault()
    const fieldName = e.target.getAttribute('name')
    const fieldValue = e.target.value

    const newFormData = { ...addFormData}
    newFormData[fieldName] = fieldValue
    setAddFormData(newFormData)
  }
  const handleEditFormChange = (e) => {
    e.preventDefault()
    const fieldName = e.target.getAttribute('name')
    const fieldValue = e.target.value

    const newFormData = { ...editFormData }
    newFormData[fieldName] = fieldValue 
    setEditFormData(newFormData)
  }
  const handleAddFormSubmit = (e) => {
    e.preventDefault()
    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email
    }
    const newContacts = [...contacts, newContact]
    setContacts(newContacts)
  }
  const handleEditClick = (e, contact) => {
    e.preventDefault()
    setEditContactId(contact.id)

    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
      }
      setEditFormData(formValues)
  }
  return (
    <div className='app-container'>
      <form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <>
              {editContactId === contact.id ? (
                <EditableRow 
                  key={contact.id}
                  editFormData={editFormData} 
                  handleEditFormChange={handleEditFormChange}/>
              ) : (
                <ReadOnlyRow 
                key={contact.id}
                contact={contact} 
                handleEditClick={handleEditClick}/>
              )}
            </>
          ))}
        </tbody>
        </table>
        </form>
        <h2>Add a contact</h2>
        <form onSubmit={handleAddFormSubmit}>
          <input 
            type="text" 
            name='fullName' 
            required='required' 
            placeholder='Enter a Name...' 
            onChange={handleAddFormChange}
            />
          <input 
            type="text" 
            name='address' 
            required='required' 
            placeholder='Enter an Address...' 
            onChange={handleAddFormChange}
          />
          <input 
            type="text" 
            name='phoneNumber' 
            required='required' 
            placeholder='Enter a Phone Number...' 
            onChange={handleAddFormChange}
          />
          <input 
            type="text" 
            name='email' 
            required='required' 
            placeholder='Enter an Email...' 
            onChange={handleAddFormChange}
          />
          <button type='submit' name='submit'>Add</button>
        </form>
    </div>
  )
}

export default App
