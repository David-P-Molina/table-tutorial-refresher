import React from 'react'

const EditableRow = ({ editFormData, handleEditFormChange }) => {
    return (
            <tr>
            <td>
                <input 
                    type='text' 
                    required='required' 
                    placeholder='Enter a Name...' 
                    name='fullName'
                    value={editFormData.fullName}
                    onChange={handleEditFormChange}
                />
            </td>    
            <td>
                <input 
                    type='text' 
                    required='required' 
                    placeholder='Enter a Address...' 
                    name='address'
                    value={editFormData.address}
                    onChange={handleEditFormChange}
                />
            </td>    
            <td>
                <input 
                    type='text' 
                    required='required' 
                    placeholder='Enter a Phone Number...' 
                    name='phoneNumber'
                    value={editFormData.phoneNumber}
                    onChange={handleEditFormChange}
                />
            </td>    
            <td>
                <input 
                    type='text' 
                    required='required' 
                    placeholder='Enter an Email...' 
                    name='email'
                    value={editFormData.email}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <button type="submit">Save</button>
                <button>Cancel</button>
            </td>
            </tr>
    )
}

export default EditableRow
