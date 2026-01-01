const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:5001";

async function request(path, options = {}) {
  const token = localStorage.getItem("authToken");

  const headers = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(options.headers || {})
  };

  const res = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    const message = data.message || "Request failed";
    throw new Error(message);
  }

  return data;
}

export function apiSignup({ name, email, password }) {
  return request("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ name, email, password })
  });
}

export function apiLogin({ email, password }) {
  return request("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password })
  });
}

export function apiGetMe() {
  return request("/api/users/me");
}

export function apiUpdateMe(payload) {
  return request("/api/users/me", {
    method: "PUT",
    body: JSON.stringify(payload)
  });
}

export function apiListTasks({ q, completed } = {}) {
  const params = new URLSearchParams();
  if (q) params.set("q", q);
  if (typeof completed !== "undefined") params.set("completed", completed);

  const query = params.toString();
  return request(`/api/tasks${query ? `?${query}` : ""}`);
}

export function apiCreateTask(payload) {
  return request("/api/tasks", {
    method: "POST",
    body: JSON.stringify(payload)
  });
}

export function apiUpdateTask(id, payload) {
  return request(`/api/tasks/${id}`, {
    method: "PUT",
    body: JSON.stringify(payload)
  });
}

export function apiDeleteTask(id) {
  return request(`/api/tasks/${id}`, {
    method: "DELETE"
  });
}

export function apiGetAllUsers() {
  return request("/api/admin/users");
}


