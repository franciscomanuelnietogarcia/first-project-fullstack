import React, { useState } from 'react';

const AddUserForm = props => {
  const apiURL = "http://localhost:5000/users";
  const initialFormState = { id: null, name: '', email: '', password: '', role: '' };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    setUser({ ...user, [name]: value });
  }

  const handleSubmit = async event => {
    event.preventDefault();
    if (!user.name || !user.email) return;

    try {
      let res = await fetch(apiURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!res.ok) {
        throw new Error("Error: " + res.status);
      }

      let newUser = await res.json();
      props.addUser(newUser);
      setUser(initialFormState);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
    {/* указали функцию на submit */}
    <h4>Add User</h4>
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Email</label>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleInputChange}
      />
      <label>Password</label>
      <input
        type="text"
        name="password"
        value={user.password}
        onChange={handleInputChange}
      />
      <label>Role</label>
      <input
        type="text"
        name="role"
        value={user.role}
        onChange={handleInputChange}
      />
      <button>Add new user</button>
    </form>
    </>
  )
}

export { AddUserForm }