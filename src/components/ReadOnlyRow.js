import React from 'react'

const ReadOnlyRow = ({ contact }) => {
    return (
        <div>
            <tr key={contact.id}>
              <td>{contact.fullName}</td>
              <td>{contact.address}</td>
              <td>{contact.phoneNumber}</td>
              <td>{contact.email}</td>
            </tr>
        </div>
    )
}

export default ReadOnlyRow
