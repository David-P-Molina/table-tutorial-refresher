import React from 'react'

const EditableRow = () => {
    return (
        <div>
            <tr>
            <input 
                type='text' 
                required='required' 
                placeholder='Enter a Name...' 
                name='fullName'
            />
            <input 
                type='text' 
                required='required' 
                placeholder='Enter a Address...' 
                name='address'
            />
            <input 
                type='text' 
                required='required' 
                placeholder='Enter a Phone Number...' 
                name='phoneNumber'
            />
            <input 
                type='text' 
                required='required' 
                placeholder='Enter an Email...' 
                name='email'
            />
            </tr>
        </div>
    )
}

export default EditableRow
