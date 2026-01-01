import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { apiGetAllUsers } from "../../api/client";
import { useNavigate } from "react-router-dom";

function AdminPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!user) {
      navigate("/");
      return;
    }
    loadUsers();
  }, [user, navigate]);

  const loadUsers = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await apiGetAllUsers();
      setUsers(data);
    } catch (err) {
      setError(err.message || "Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
        <h1 style={{ color: "#5e473e", margin: 0 }}>Admin Panel - All Users</h1>
        <div>
          <button
            onClick={loadUsers}
            style={{
              padding: "0.5rem 1rem",
              marginRight: "1rem",
              backgroundColor: "#caab9f",
              color: "white",
              border: "none",
              borderRadius: "0.5rem",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Refresh
          </button>
          <button
            onClick={logout}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#b58d7e",
              color: "white",
              border: "none",
              borderRadius: "0.5rem",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Logout
          </button>
        </div>
      </div>

      {user && (
        <p style={{ color: "#5e473e", marginBottom: "1rem" }}>
          Logged in as: <strong>{user.name}</strong> ({user.email})
        </p>
      )}

      {error && (
        <div
          style={{
            padding: "1rem",
            backgroundColor: "#ffebee",
            color: "#c62828",
            borderRadius: "0.5rem",
            marginBottom: "1rem",
          }}
        >
          {error}
        </div>
      )}

      {loading ? (
        <p>Loading users...</p>
      ) : (
        <>
          <p style={{ color: "#5e473e", marginBottom: "1rem" }}>
            Total Users: <strong>{users.length}</strong>
          </p>

          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                backgroundColor: "#F0E8E4",
                borderRadius: "0.5rem",
                overflow: "hidden",
              }}
            >
              <thead>
                <tr style={{ backgroundColor: "#caab9f", color: "white" }}>
                  <th style={{ padding: "1rem", textAlign: "left", borderBottom: "2px solid #b58d7e" }}>
                    Name
                  </th>
                  <th style={{ padding: "1rem", textAlign: "left", borderBottom: "2px solid #b58d7e" }}>
                    Email
                  </th>
                  <th style={{ padding: "1rem", textAlign: "left", borderBottom: "2px solid #b58d7e" }}>
                    User ID
                  </th>
                  <th style={{ padding: "1rem", textAlign: "left", borderBottom: "2px solid #b58d7e" }}>
                    Created At
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.length === 0 ? (
                  <tr>
                    <td colSpan="4" style={{ padding: "2rem", textAlign: "center", color: "#5e473e" }}>
                      No users found
                    </td>
                  </tr>
                ) : (
                  users.map((u) => (
                    <tr
                      key={u._id}
                      style={{
                        borderBottom: "1px solid #caab9f",
                        "&:hover": { backgroundColor: "#e8d9d4" },
                      }}
                    >
                      <td style={{ padding: "1rem", color: "#5e473e" }}>{u.name}</td>
                      <td style={{ padding: "1rem", color: "#5e473e" }}>{u.email}</td>
                      <td
                        style={{
                          padding: "1rem",
                          color: "#5e473e",
                          fontFamily: "monospace",
                          fontSize: "0.9rem",
                        }}
                      >
                        {u._id}
                      </td>
                      <td style={{ padding: "1rem", color: "#5e473e" }}>{formatDate(u.createdAt)}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

export default AdminPage;

