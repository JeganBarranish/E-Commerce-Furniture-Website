# Furnify API Documentation

## Base URL

**Production:**
```
https://e-commerce-furniture-website-2.onrender.com/api
```

**Local Development:**
```
http://localhost:5001/api
```

## Authentication
Most endpoints require JWT authentication. Include the token in the Authorization header:
```
Authorization: Bearer <your-jwt-token>
```

---

## Authentication Endpoints

### 1. Sign Up
Create a new user account.

**Endpoint:** `POST /auth/signup`

**Authentication:** Not required

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "Password123"
}
```

**Validation Rules:**
- `name`: Required, 2-50 characters, letters and spaces only
- `email`: Required, valid email format
- `password`: Required, minimum 8 characters, must contain at least one letter and one number

**Response (201 Created):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

**Error Responses:**
- `400 Bad Request`: Validation failed
- `409 Conflict`: Email already in use
- `500 Internal Server Error`: Server error

---

### 2. Login
Authenticate and receive a JWT token.

**Endpoint:** `POST /auth/login`

**Authentication:** Not required

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "Password123"
}
```

**Validation Rules:**
- `email`: Required, valid email format
- `password`: Required

**Response (200 OK):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

**Error Responses:**
- `400 Bad Request`: Validation failed
- `401 Unauthorized`: Invalid credentials
- `500 Internal Server Error`: Server error

---

## User Profile Endpoints

### 3. Get Current User Profile
Get the authenticated user's profile information.

**Endpoint:** `GET /users/me`

**Authentication:** Required

**Response (200 OK):**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "John Doe",
  "email": "john@example.com",
  "createdAt": "2024-01-15T10:30:00.000Z",
  "updatedAt": "2024-01-15T10:30:00.000Z"
}
```

**Error Responses:**
- `401 Unauthorized`: Missing or invalid token
- `404 Not Found`: User not found
- `500 Internal Server Error`: Server error

---

### 4. Update Current User Profile
Update the authenticated user's profile information.

**Endpoint:** `PUT /users/me`

**Authentication:** Required

**Request Body (all fields optional):**
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "password": "NewPassword123"
}
```

**Validation Rules:**
- `name`: Optional, 2-50 characters, letters and spaces only
- `email`: Optional, valid email format
- `password`: Optional, minimum 8 characters, must contain at least one letter and one number

**Response (200 OK):**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "Jane Doe",
  "email": "jane@example.com",
  "createdAt": "2024-01-15T10:30:00.000Z",
  "updatedAt": "2024-01-15T11:00:00.000Z"
}
```

**Error Responses:**
- `400 Bad Request`: Validation failed
- `401 Unauthorized`: Missing or invalid token
- `404 Not Found`: User not found
- `409 Conflict`: Email already in use
- `500 Internal Server Error`: Server error

---

## Task Endpoints

### 5. List All Tasks
Get all tasks for the authenticated user with optional search and filter.

**Endpoint:** `GET /tasks`

**Authentication:** Required

**Query Parameters:**
- `q` (optional): Search query for task titles (case-insensitive)
- `completed` (optional): Filter by completion status (`true` or `false`)

**Example:** `GET /tasks?q=shopping&completed=false`

**Response (200 OK):**
```json
[
  {
    "_id": "507f1f77bcf86cd799439012",
    "user": "507f1f77bcf86cd799439011",
    "title": "Buy groceries",
    "description": "Milk, bread, eggs",
    "completed": false,
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  }
]
```

**Error Responses:**
- `401 Unauthorized`: Missing or invalid token
- `500 Internal Server Error`: Server error

---

### 6. Create Task
Create a new task for the authenticated user.

**Endpoint:** `POST /tasks`

**Authentication:** Required

**Request Body:**
```json
{
  "title": "Buy groceries",
  "description": "Milk, bread, eggs"
}
```

**Validation Rules:**
- `title`: Required, 1-200 characters
- `description`: Optional, maximum 1000 characters

**Response (201 Created):**
```json
{
  "_id": "507f1f77bcf86cd799439012",
  "user": "507f1f77bcf86cd799439011",
  "title": "Buy groceries",
  "description": "Milk, bread, eggs",
  "completed": false,
  "createdAt": "2024-01-15T10:30:00.000Z",
  "updatedAt": "2024-01-15T10:30:00.000Z"
}
```

**Error Responses:**
- `400 Bad Request`: Validation failed
- `401 Unauthorized`: Missing or invalid token
- `500 Internal Server Error`: Server error

---

### 7. Get Single Task
Get a specific task by ID (must belong to the authenticated user).

**Endpoint:** `GET /tasks/:id`

**Authentication:** Required

**URL Parameters:**
- `id`: Task ID (MongoDB ObjectId)

**Response (200 OK):**
```json
{
  "_id": "507f1f77bcf86cd799439012",
  "user": "507f1f77bcf86cd799439011",
  "title": "Buy groceries",
  "description": "Milk, bread, eggs",
  "completed": false,
  "createdAt": "2024-01-15T10:30:00.000Z",
  "updatedAt": "2024-01-15T10:30:00.000Z"
}
```

**Error Responses:**
- `401 Unauthorized`: Missing or invalid token
- `404 Not Found`: Task not found or doesn't belong to user
- `500 Internal Server Error`: Server error

---

### 8. Update Task
Update a specific task (must belong to the authenticated user).

**Endpoint:** `PUT /tasks/:id`

**Authentication:** Required

**URL Parameters:**
- `id`: Task ID (MongoDB ObjectId)

**Request Body (all fields optional):**
```json
{
  "title": "Buy groceries and vegetables",
  "description": "Milk, bread, eggs, tomatoes",
  "completed": true
}
```

**Validation Rules:**
- `title`: Optional, 1-200 characters
- `description`: Optional, maximum 1000 characters
- `completed`: Optional, boolean value

**Response (200 OK):**
```json
{
  "_id": "507f1f77bcf86cd799439012",
  "user": "507f1f77bcf86cd799439011",
  "title": "Buy groceries and vegetables",
  "description": "Milk, bread, eggs, tomatoes",
  "completed": true,
  "createdAt": "2024-01-15T10:30:00.000Z",
  "updatedAt": "2024-01-15T11:00:00.000Z"
}
```

**Error Responses:**
- `400 Bad Request`: Validation failed
- `401 Unauthorized`: Missing or invalid token
- `404 Not Found`: Task not found or doesn't belong to user
- `500 Internal Server Error`: Server error

---

### 9. Delete Task
Delete a specific task (must belong to the authenticated user).

**Endpoint:** `DELETE /tasks/:id`

**Authentication:** Required

**URL Parameters:**
- `id`: Task ID (MongoDB ObjectId)

**Response (200 OK):**
```json
{
  "message": "Task deleted"
}
```

**Error Responses:**
- `401 Unauthorized`: Missing or invalid token
- `404 Not Found`: Task not found or doesn't belong to user
- `500 Internal Server Error`: Server error

---

## Admin Endpoints

### 10. Get All Users
Get a list of all registered users (admin access).

**Endpoint:** `GET /admin/users`

**Authentication:** Required (any authenticated user can access)

**Response (200 OK):**
```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  }
]
```

**Note:** Password hashes are excluded from the response.

**Error Responses:**
- `401 Unauthorized`: Missing or invalid token
- `500 Internal Server Error`: Server error

---

## Health Check

### 11. Health Check
Check if the API server is running.

**Endpoint:** `GET /health`

**Authentication:** Not required

**Response (200 OK):**
```json
{
  "status": "ok"
}
```

---

## Error Response Format

All error responses follow this format:

```json
{
  "message": "Error description",
  "errors": [
    {
      "field": "email",
      "message": "Please provide a valid email address"
    }
  ]
}
```

For validation errors, the `errors` array contains detailed field-level errors.

---

## HTTP Status Codes

- `200 OK`: Request successful
- `201 Created`: Resource created successfully
- `400 Bad Request`: Validation error or invalid request
- `401 Unauthorized`: Missing or invalid authentication token
- `404 Not Found`: Resource not found
- `409 Conflict`: Resource conflict (e.g., email already exists)
- `500 Internal Server Error`: Server error

---

## Rate Limiting

Currently, there is no rate limiting implemented. For production, consider implementing rate limiting to prevent abuse.

---

## JWT Token

- **Expiration:** 7 days
- **Storage:** Store token in localStorage or httpOnly cookies (recommended for production)
- **Format:** Bearer token in Authorization header

---

## Notes

- All timestamps are in ISO 8601 format (UTC)
- All IDs are MongoDB ObjectIds
- Email addresses are automatically normalized (lowercase, trimmed)
- Passwords are hashed using bcrypt (10 salt rounds)

