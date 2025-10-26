import React from "react";

export default function DummyRoot() {
  return (
    <div style={{ padding: "2rem", fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif" }}>
      <h1>React App is Running</h1>
      <p>Deployed on Vercel. If you see this, the index renderer works.</p>
      <p>
        <a href="/home">Go to /home route</a>
      </p>
      <p>
        <small>Timestamp: {new Date().toISOString()}</small>
      </p>
    </div>
  );
}


