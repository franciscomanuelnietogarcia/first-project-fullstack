import React, { useState, useEffect } from "react";
import { Container, Table, Form, Button } from "react-bootstrap";
import axios from "axios";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [editedUser, setEditedUser] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    role: "",
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleEditUser = (user) => {
    setEditedUser(user);
  };

  const handleSaveUser = async () => {
    try {
      await axios.put(`http://localhost:5000/users/${editedUser.id}`, editedUser);
      fetchUsers();
      setEditedUser({
        id: "",
        name: "",
        email: "",
        password: "",
        role: "",
      });
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <Container>
      <h1>Usuário gestión</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                <Form.Control
                  type="text"
                  value={editedUser.name === user.name ? editedUser.name : user.name}
                  onChange={(e) =>
                    setEditedUser({ ...editedUser, name: e.target.value })
                  }
                />
              </td>
              <td>
                <Form.Control
                  type="email"
                  value={editedUser.email === user.email ? editedUser.email : user.email}
                  onChange={(e) =>
                    setEditedUser({ ...editedUser, email: e.target.value })
                  }
                />
              </td>
              <td>
                <Form.Control
                  type="password"
                  value={
                    editedUser.password === user.password
                      ? editedUser.password
                      : user.password
                  }
                  onChange={(e) =>
                    setEditedUser({ ...editedUser, password: e.target.value })
                  }
                />
              </td>
              <td>
                <Form.Select
                  value={editedUser.role === user.role ? editedUser.role : user.role}
                  onChange={(e) =>
                    setEditedUser({ ...editedUser, role: e.target.value })
                  }
                >
                  <option value="Admin">Admin</option>
                  <option value="User">User</option>
                </Form.Select>
              </td>
              <td>
                <Button onClick={() => handleEditUser(user)}>Edit</Button>
                <Button variant="success" onClick={handleSaveUser}>
                  Save
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default UserManagement;
