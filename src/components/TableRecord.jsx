import React from "react";
import { Badge } from "react-bootstrap";
import Button from "./Button";

function TableRecord(props) {
  const { id, name, username, email, createdAt } = props;

  // Check if user was created recently (within last 5 minutes)
  const isNew = createdAt && new Date() - new Date(createdAt) < 5 * 60 * 1000;

  return (
    <>
      <tr
        style={{
          background: isNew ? "rgba(40, 167, 69, 0.05)" : "transparent",
        }}
      >
        <td className="align-middle">{id}</td>
        <td className="align-middle">
          {name}
          {isNew && (
            <Badge bg="success" className="ms-2 animate-pulse">
              NEW
            </Badge>
          )}
        </td>
        <td className="align-middle">{username}</td>
        <td className="align-middle">{email}</td>
        <td className="text-center align-middle">
          <Button id={id}>View</Button>
        </td>
      </tr>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}

export default TableRecord;
