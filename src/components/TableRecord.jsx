import React from "react";
import Button from "./Button";

function TableRecord(props) {
  const { id, name, username, email } = props;
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{username}</td>
        <td>{email}</td>
        <td>
          <Button id={id}>View</Button>
        </td>
      </tr>
    </>
  );
}

export default TableRecord;
