import React from 'react'
import './App.css'

const App = () => {
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
          <tr>
            <td>Jenny Chan</td>
            <td>3 waterfoot road</td>
            <td>123-424-0987</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App
