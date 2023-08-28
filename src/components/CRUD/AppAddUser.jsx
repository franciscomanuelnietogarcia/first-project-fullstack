import React, { useState, useEffect } from 'react';
import { AddUserForm } from './AddUserForm';
import { UserTable } from './UserTable';
import { EditUserForm } from './EditUserForm';
import './AppAddUser.css';

const apiURL = "http://localhost:5000/users";

const AppAddUser = () => {
  const [users, setUsers] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    id: null,
    name: '',
    email: '',
    password: '',
    role: ''
  });

  async function loadUserList() {
    try {
      let res = await fetch(apiURL, {
        method: "GET",
      });

      if (!res.ok) {
        throw new Error("Error: " + res.status);
      }

      let result = await res.json();
      setUsers(result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadUserList();
  }, []);

  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  }

  const deleteUser = id => {
    setEditing(false);
    setUsers(users.filter(user => user.id !== id));
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  }

  const editRow = user => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role
    });
  }



  return (
    <div className="container">
      <h1>App add User</h1>
      <div className="flex-row">
        <div className="flex-large">
          {/* редактируем ? рисуй форму редактирования, иначе - форму добавления */}
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          {/* передаем editRow */}
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
}

export { AppAddUser }