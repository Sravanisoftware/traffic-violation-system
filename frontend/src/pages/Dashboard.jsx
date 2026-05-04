import { useEffect, useState } from "react";
import API from "../services/api";
import AddViolation from "./AddViolation";
import Analytics from "./Analytics";

function Dashboard({ setToken }) {
  const [violations, setViolations] = useState([]);

  // Fetch violations from backend
  const fetchViolations = async () => {
    try {
      const res = await API.get("/violations");
      setViolations(res.data.violations);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchViolations();
  }, []);

  // Logout
  const logout = () => {
    localStorage.clear();
    setToken(null);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Police Dashboard 🚓</h2>
      <button onClick={logout}>Logout</button>

      {/* Add Violation */}
      <h3 style={{ marginTop: "20px" }}>Add Violation</h3>
      <AddViolation onViolationAdded={fetchViolations} />

      {/* Violations List */}
      <h3 style={{ marginTop: "20px" }}>Violations List</h3>

      {violations.length === 0 ? (
        <p>No violations found</p>
      ) : (
        violations.map((v) => (
          <div
            key={v._id}
            style={{
              border: "1px solid black",
              margin: "10px 0",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <p><b>Vehicle:</b> {v.vehicleNumber}</p>
            <p><b>Violation:</b> {v.violationType}</p>
            <p><b>Fine:</b> ₹{v.fineAmount}</p>

            {/* Image */}
            {v.image && (
              <img
                src={`http://localhost:5000/${v.image}`}
                alt="violation"
                width="200"
                style={{ marginTop: "10px" }}
              />
            )}
          </div>
        ))
      )}

      {/* ✅ Analytics Section */}
      <Analytics />
    </div>
  );
}

export default Dashboard;