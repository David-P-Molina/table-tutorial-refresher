import React from 'react'

const EditableRow = () => {
    return (
            <tr>
            <td>
                <input 
                    type='text' 
                    required='required' 
                    placeholder='Enter a Name...' 
                    name='fullName'
                />
            </td>    
            <td>
                <input 
                    type='text' 
                    required='required' 
                    placeholder='Enter a Address...' 
                    name='address'
                />
            </td>    
            <td>
                <input 
                    type='text' 
                    required='required' 
                    placeholder='Enter a Phone Number...' 
                    name='phoneNumber'
                />
            </td>    
            <td>
                <input 
                    type='text' 
                    required='required' 
                    placeholder='Enter an Email...' 
                    name='email'
                />
            </td>
            </tr>
    )
}

export default EditableRow
