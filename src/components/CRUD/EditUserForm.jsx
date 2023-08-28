import React, { useState, useEffect } from 'react';

const EditUserForm = props => {
  const apiURL = "http://localhost:5000/users";
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  }

  const handleSubmit = async event => {
    event.preventDefault();
    if (!user.name || !user.email) return;

    try {
      let res = await fetch(`${apiURL}/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!res.ok) {
        throw new Error("Error: " + res.status);
      }

      props.updateUser(user.id, user);
    } catch (error) {
      console.error(error);
    }
  }

  return (
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
      <button>Update user</button>
      <button
        /* обновляем флаг editing */
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  );
}

export { EditUserForm };