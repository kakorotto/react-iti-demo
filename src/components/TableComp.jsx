import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import TableRecord from "./TableRecord";
import { getAllUsers } from "../UserAPI";

function TableComp() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <>
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <TableRecord
              key={user.id}
              id={user.id}
              name={user.name}
              username={user.username}
              email={user.email}
            />
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default TableComp;
