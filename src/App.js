import React, { useState } from 'react'
import UserTable from './UserTable'
import AddUserForm from './AddUserForm'
import EditUserForm from './EditUserForm'

const App = () => {
  const userData = [{ id: 1, name: 'Somsak', username: 'Tong' },
  { id: 2, name: 'Saowanee', username: 'Lek' },]

  const initialFormState = { id: null, name: '', username: '' }

  const [users, setUsers] = useState(userData)
  const [editing, setEditing] = useState(false)
  const [currentUser, setCurrentUser] = useState(initialFormState)

  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }
  const editRow = (user) => {
    setEditing(true)
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }
  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
  }



  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <hr />
      <div className="row">
        {editing ? (<div className="col">
          <h2>Add user</h2>
          <EditUserForm setEditing={setEditing} currentUser={currentUser} updateUser={updateUser} />
        </div>) : (
            <div className="col">
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </div>)}

        <div className="col">
          <h2>View users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
}

export default App;
