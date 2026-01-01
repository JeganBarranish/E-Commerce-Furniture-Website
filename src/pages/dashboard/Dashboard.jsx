import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import {
  apiListTasks,
  apiCreateTask,
  apiUpdateTask,
  apiDeleteTask
} from "../../api/client";

function Dashboard() {
  const { user, logout } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  const loadTasks = () => {
    apiListTasks({ q: query })
      .then(setTasks)
      .catch((err) => setError(err.message || "Failed to load tasks"));
  };

  useEffect(() => {
    loadTasks();
  }, [query]);

  const handleCreate = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await apiCreateTask({ title, description });
      setTitle("");
      setDescription("");
      loadTasks();
    } catch (err) {
      setError(err.message || "Failed to create task");
    }
  };

  const toggleCompleted = async (task) => {
    try {
      await apiUpdateTask(task._id, { completed: !task.completed });
      loadTasks();
    } catch (err) {
      setError(err.message || "Failed to update task");
    }
  };

  const handleDelete = async (task) => {
    try {
      await apiDeleteTask(task._id);
      loadTasks();
    } catch (err) {
      setError(err.message || "Failed to delete task");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Dashboard</h2>
      {user && (
        <p>
          Logged in as <strong>{user.name}</strong> ({user.email})
        </p>
      )}

      <button onClick={logout} style={{ marginBottom: "1rem" }}>
        Logout
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <hr />

      <h3>Create Task</h3>
      <form onSubmit={handleCreate}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ display: "block", marginBottom: "0.5rem" }}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ display: "block", marginBottom: "0.5rem" }}
        />
        <button type="submit">Add Task</button>
      </form>

      <hr />

      <h3>Your Tasks</h3>
      <input
        placeholder="Search tasks..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ marginBottom: "1rem", display: "block" }}
      />

      <ul>
        {tasks.map((t) => (
          <li key={t._id} style={{ marginBottom: "0.5rem" }}>
            <span
              style={{
                textDecoration: t.completed ? "line-through" : "none",
                marginRight: "0.5rem"
              }}
            >
              {t.title}
            </span>
            <button onClick={() => toggleCompleted(t)}>
              {t.completed ? "Mark Incomplete" : "Mark Complete"}
            </button>
            <button
              onClick={() => handleDelete(t)}
              style={{ marginLeft: "0.5rem" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;



