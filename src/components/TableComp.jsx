import React, { useEffect, useState } from "react";
import {
  Table,
  Form,
  InputGroup,
  Spinner,
  Alert,
  Badge,
} from "react-bootstrap";
import TableRecord from "./TableRecord";
import { useUsers } from "../context/UserContext";

function TableComp() {
  const { users, loading } = useUsers();
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error] = useState(null);

  // Update filtered users when users or search term changes
  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  useEffect(() => {
    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchTerm, users]);

  const tableStyle = {
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    borderRadius: "15px",
    overflow: "hidden",
    border: "none",
  };

  const theadStyle = {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "#fff",
  };

  return (
    <>
      <div className="mb-4">
        <InputGroup size="lg" className="shadow-sm">
          <InputGroup.Text
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "#fff",
              border: "none",
            }}
          >
            <i className="bi bi-search"></i>
          </InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Search users by name, username, or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              border: "2px solid #667eea",
              borderLeft: "none",
              fontSize: "1rem",
            }}
          />
          {searchTerm && (
            <InputGroup.Text
              style={{
                background: "#fff",
                border: "2px solid #667eea",
                borderLeft: "none",
                cursor: "pointer",
              }}
              onClick={() => setSearchTerm("")}
            >
              <i className="bi bi-x-circle-fill text-danger"></i>
            </InputGroup.Text>
          )}
        </InputGroup>
        <div className="mt-2 d-flex justify-content-between align-items-center">
          <small className="text-muted">
            {searchTerm ? (
              <>
                Showing <Badge bg="primary">{filteredUsers.length}</Badge> of{" "}
                <Badge bg="secondary">{users.length}</Badge> users
              </>
            ) : (
              <>
                Total users: <Badge bg="primary">{users.length}</Badge>
              </>
            )}
          </small>
          {searchTerm && (
            <small className="text-primary">
              <i className="bi bi-funnel-fill me-1"></i>
              Filter active
            </small>
          )}
        </div>
      </div>

      {loading ? (
        <div className="text-center py-5">
          <Spinner
            animation="border"
            variant="primary"
            style={{ width: "3rem", height: "3rem" }}
          />
          <p className="mt-3 text-muted">Loading users...</p>
        </div>
      ) : error ? (
        <Alert variant="danger">
          <i className="bi bi-exclamation-triangle-fill me-2"></i>
          {error}
        </Alert>
      ) : filteredUsers.length === 0 ? (
        <Alert variant="info">
          <i className="bi bi-info-circle-fill me-2"></i>
          No users found matching "{searchTerm}"
        </Alert>
      ) : (
        <div style={tableStyle}>
          <Table hover responsive className="mb-0">
            <thead style={theadStyle}>
              <tr>
                <th className="py-3 px-4">
                  <i className="bi bi-hash me-2"></i>ID
                </th>
                <th className="py-3 px-4">
                  <i className="bi bi-person-fill me-2"></i>Name
                </th>
                <th className="py-3 px-4">
                  <i className="bi bi-at me-2"></i>Username
                </th>
                <th className="py-3 px-4">
                  <i className="bi bi-envelope-fill me-2"></i>Email
                </th>
                <th className="py-3 px-4 text-center">
                  <i className="bi bi-gear-fill me-2"></i>Action
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => (
                <TableRecord
                  key={user.id}
                  id={user.id}
                  name={user.name}
                  username={user.username}
                  email={user.email}
                  createdAt={user.createdAt}
                  index={index}
                />
              ))}
            </tbody>
          </Table>
        </div>
      )}

      <style>{`
        .table tbody tr {
          transition: all 0.3s ease;
        }
        .table tbody tr:hover {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%) !important;
          transform: scale(1.01);
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
      `}</style>
    </>
  );
}

export default TableComp;
