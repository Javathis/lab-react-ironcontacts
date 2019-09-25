import React from 'react'

const ContactList = (props) => {
  const contacts = props.contacts.map(celeb => {
    return (
      <tr key={celeb.id}>
        <td><img src={celeb.pictureUrl} alt="" style={{ height: "200px" }} /></td>
        <td>{celeb.name}</td>
        <td>{celeb.popularity.toFixed(2)}</td>
        <td><button onClick={() => props.deleteContact(celeb.id)}>Delete</button></td>
      </tr>
    )
  })
  return (
    <table>
      <thead>
        <tr >
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {contacts}
      </tbody>
    </table>
  )
}

export default ContactList