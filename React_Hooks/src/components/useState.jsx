import { useState } from "react";

function EmployeeDashboard() {
  const [status, setStatus] = useState("Online");

  return (
    <div>
      <h2>Employee Status</h2>

      <p>Current Status: {status}</p>

      <button onClick={() => setStatus("Busy")}>
        Busy
      </button>

      <button onClick={() => setStatus("Offline")}>
        Offline
      </button>

      <button onClick={() => setStatus("Online")}>
        Online
      </button>
    </div>
  );
}

export default EmployeeDashboard;
