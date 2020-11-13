import React, { useEffect, useState } from 'react'

const EditUserForm = (props) => {

    useEffect(() => {
        setUser(props.currentUser)
    }, [props])

    const [user, setUser] = useState(props.currentUser)

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }

    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            props.updateUser(user.id, user)
        }}>
            <div className='form-group'>
                <label>Name</label>
                <input className="form-control" type="text" name="name" value={user.name} onChange={handleInputChange}></input>
            </div>
            <div className='form-group'>
                <label>Username</label>
                <input className="form-control" type="text" name="username" value={user.username} onChange={handleInputChange}></input>
            </div>
            <button className="btn btn-info mr-2">Update user</button>
            <button onClick={() => props.setEditing(false)} className="btn btn-secondary">Cancel</button>
        </form>
    )

}

export default EditUserForm