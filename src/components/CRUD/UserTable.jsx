import React from 'react';

const UserTable = props => {
  const apiURL = "http://localhost:5000/users"; // Добавляем API URL

  const handleDeleteUser = async id => {
    let answer = window.confirm('Are you sure?');

    if (answer) {
      try {
        let res = await fetch(`${apiURL}/${id}`, {
          method: "DELETE",
        });

        if (!res.ok) {
          throw new Error("Error: " + res.status);
        }

        props.deleteUser(id);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
  
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Password</th>
        <th>Role</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td>{user.role}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(user);
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                  className="button muted-button"
                  onClick={() => handleDeleteUser(user.id)}
                >
                  Delete
                </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
);
};
export { UserTable };
