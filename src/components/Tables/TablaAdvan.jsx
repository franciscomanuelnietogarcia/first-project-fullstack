import React, { useState, useEffect } from "react";
import { Container, Table, Button, } from "react-bootstrap";
import axios from "axios";
import EditAdvan from "../Modales/EditAdvan"

const AdvantagesManagement = () => {
  const [advantages, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/advantages");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching advantage:", error);
    }
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setSelectedUser(null);
    setShowEditModal(false);
  };

  const handleSaveUser = async () => {
    try {
      await axios.put(`http://localhost:5000/advantages/${selectedUser.id}`, selectedUser);
      fetchUsers();
      handleCloseEditModal();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <Container border="primary">
      <h1>Gestión de ventajas</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Desc</th>
            <th>Cover</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {advantages.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.title}</td>
              <td>{user.desc}</td>
              <td>{user.cover}</td>
              <td>
                <Button variant="warning" onClick={() => handleEditUser(user)}>Modificar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <EditAdvan show={showEditModal}
       onHide={handleCloseEditModal}
       onSubmit={handleSaveUser}
       selectedUser={selectedUser}
       setSelectedUser={setSelectedUser}
       />
       </Container>
  );
};

export default AdvantagesManagement;
