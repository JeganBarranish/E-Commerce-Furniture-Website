# Furnify - Full-Stack Furniture Store Application

A modern, scalable full-stack web application for a furniture store with user authentication, dashboard, and task management capabilities.

![Tech Stack](https://img.shields.io/badge/React-19.1.0-blue)
![Tech Stack](https://img.shields.io/badge/Node.js-Express-green)
![Tech Stack](https://img.shields.io/badge/MongoDB-8.8.0-green)
![Tech Stack](https://img.shields.io/badge/Material--UI-7.0.2-blue)

---

##  Features

### Frontend Features
- **Responsive UI** using Material-UI
- **User Authentication** (Sign Up, Login, Logout)
- **Protected Routes** - Login required for dashboard
- **User Dashboard** with profile display
- **Task Management** - Full CRUD operations
- **Search & Filter** functionality for tasks
- **Client-side Form Validation**
- **Success/Error Notifications**

### Backend Features
- **RESTful API** with Node.js & Express
- **JWT-based Authentication**
- **Password Hashing** with bcrypt
- **MongoDB Database** integration
- **Server-side Validation** with express-validator
- **Error Handling** middleware
- **Modular Architecture**
- **Admin Panel** - View all users

---

## Tech Stack

### Frontend
- **React.js** 19.1.0 - UI library
- **Material-UI (MUI)** 7.0.2 - Component library
- **React Router DOM** 7.5.0 - Routing
- **React Context API** - State management

### Backend
- **Node.js** - Runtime environment
- **Express.js** 4.21.2 - Web framework
- **MongoDB** with Mongoose 8.8.0 - Database & ODM
- **JWT** (jsonwebtoken) 9.0.2 - Authentication
- **bcrypt** 5.1.1 - Password hashing
- **express-validator** - Input validation
- **CORS** 2.8.5 - Cross-origin resource sharing

---

## Project Structure

```
furnify/
├── Backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js              # MongoDB connection
│   │   ├── controllers/
│   │   │   ├── authController.js  # Authentication logic
│   │   │   ├── userController.js  # User profile operations
│   │   │   ├── taskController.js  # Task CRUD operations
│   │   │   └── adminController.js # Admin operations
│   │   ├── middleware/
│   │   │   ├── auth.js            # JWT authentication middleware
│   │   │   └── validation.js      # Validation error handler
│   │   ├── models/
│   │   │   ├── User.js            # User schema
│   │   │   └── Task.js            # Task schema
│   │   ├── routes/
│   │   │   ├── authRoutes.js      # Auth endpoints
│   │   │   ├── userRoutes.js      # User endpoints
│   │   │   ├── taskRoutes.js      # Task endpoints
│   │   │   └── adminRoutes.js     # Admin endpoints
│   │   ├── validators/
│   │   │   ├── authValidators.js  # Auth validation rules
│   │   │   ├── userValidators.js  # User validation rules
│   │   │   └── taskValidators.js  # Task validation rules
│   │   └── server.js              # Express app entry point
│   ├── .env                       # Environment variables
│   └── package.json
│
├── src/
│   ├── api/
│   │   └── client.js              # API client functions
│   ├── components/
│   │   └── PrivateRoute.jsx       # Protected route component
│   ├── context/
│   │   └── AuthContext.jsx        # Authentication context
│   ├── pages/
│   │   ├── admin/
│   │   │   └── AdminPage.jsx      # Admin panel
│   │   ├── dashboard/
│   │   │   └── Dashboard.jsx      # User dashboard
│   │   └── home/
│   │       ├── loginform.jsx      # Login component
│   │       └── signupform.jsx     # Signup component
│   ├── App.js                     # Main app component
│   └── index.js                   # React entry point
│
├── API_DOCUMENTATION.md           # Complete API documentation
├── SCALING_GUIDE.md               # Production scaling guide
├── postman_collection.json        # Postman API collection
└── README.md                      # This file
```

---

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** (v9 or higher)
- **MongoDB** (v6 or higher) - Local installation or MongoDB Atlas account

---

## Installation & Setup

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd furnify
```

### 2. Install Frontend Dependencies

```bash
npm install
```

### 3. Install Backend Dependencies

```bash
cd Backend
npm install
cd ..
```

### 4. Set Up MongoDB

**Option A: Local MongoDB**

1. Install MongoDB locally or use MongoDB Atlas (cloud)
2. Ensure MongoDB is running:
   ```bash
   # macOS (via Homebrew)
   brew services start mongodb-community@8.0
   
   # Windows
   net start MongoDB
   ```

**Option B: MongoDB Atlas (Recommended for Production)**

1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster and get your connection string

### 5. Configure Environment Variables

**Backend (.env file)**

Create `Backend/.env` file:

```env
PORT=5001
MONGO_URI=mongodb://127.0.0.1:27017/furnify
# OR for MongoDB Atlas:
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/furnify?retryWrites=true&w=majority
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
```

**Frontend (.env file)** (Optional)

Create `.env` file in root directory:

```env
REACT_APP_API_BASE_URL=http://localhost:5001
```

---

## Running the Project

### Development Mode

**Terminal 1 - Start Backend:**
```bash
cd Backend
npm run dev
```

The backend server will start on `http://localhost:5001`

**Terminal 2 - Start Frontend:**
```bash
npm start
```

The frontend will start on `http://localhost:3000` and automatically open in your browser.

### Production Build

**Build Frontend:**
```bash
npm run build
```

**Start Backend (Production):**
```bash
cd Backend
npm start
```

---

## API Documentation

Complete API documentation is available in [`API_DOCUMENTATION.md`](./API_DOCUMENTATION.md)

### Quick API Reference

**Base URL:** `http://localhost:5001/api`

**Endpoints:**
- `POST /api/auth/signup` - Create new account
- `POST /api/auth/login` - Login and get JWT token
- `GET /api/users/me` - Get current user profile
- `PUT /api/users/me` - Update user profile
- `GET /api/tasks` - List all tasks (with search/filter)
- `POST /api/tasks` - Create new task
- `GET /api/tasks/:id` - Get single task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task
- `GET /api/admin/users` - Get all users (admin)

**Postman Collection:** Import [`postman_collection.json`](./postman_collection.json) into Postman for easy API testing.

---

## Features Overview

### Authentication

- **Sign Up**: Users can create accounts with name, email, and password
- **Login**: JWT-based authentication
- **Protected Routes**: Dashboard requires authentication
- **Logout**: Secure logout that clears authentication token

### Dashboard

- **User Profile**: Display logged-in user information
- **Task Management**: 
  - Create tasks with title and description
  - View all tasks
  - Mark tasks as complete/incomplete
  - Delete tasks
  - Search tasks by title
  - Filter tasks by completion status

### Admin Panel

- View all registered users
- User information display (name, email, registration date)

---

## Security Features

- **Password Hashing** - bcrypt with 10 salt rounds
- **JWT Authentication** - Secure token-based auth
- **Input Validation** - Client-side and server-side (express-validator)
- **SQL Injection Prevention** - Mongoose parameterized queries
- **XSS Protection** - React's built-in escaping
- **CORS Configuration** - Controlled cross-origin requests
- **Error Handling** - Centralized error middleware
- **Email Normalization** - Automatic email sanitization

---

## Production Deployment

For detailed production deployment and scaling guide, see [`SCALING_GUIDE.md`](./SCALING_GUIDE.md)

### Quick Production Checklist

- [ ] Set strong `JWT_SECRET` in environment variables
- [ ] Use MongoDB Atlas or managed database
- [ ] Configure CORS for production domain
- [ ] Enable HTTPS/SSL
- [ ] Set up error tracking (e.g., Sentry)
- [ ] Configure logging
- [ ] Set up monitoring
- [ ] Implement rate limiting
- [ ] Configure environment-specific settings
- [ ] Set up CI/CD pipeline

---

## Available Scripts

### Frontend

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests

### Backend

- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server

---

## Testing the API

### Using Postman

1. Import [`postman_collection.json`](./postman_collection.json)
2. Set environment variable `baseUrl` to `http://localhost:5001`
3. Start with "Sign Up" or "Login" to get authentication token
4. Token is automatically saved to `authToken` variable after login
5. Use other endpoints with authentication

### Using cURL

**Sign Up:**
```bash
curl -X POST http://localhost:5001/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","password":"Password123"}'
```

**Login:**
```bash
curl -X POST http://localhost:5001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"Password123"}'
```

**Get Tasks (with token):**
```bash
curl -X GET http://localhost:5001/api/tasks \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

---

## Troubleshooting

### Backend Issues

**Port 5001 already in use:**
```bash
# Find and kill process
lsof -i :5001
kill -9 <PID>

# Or change PORT in Backend/.env
```

**MongoDB connection error:**
- Ensure MongoDB is running locally, or
- Update `MONGO_URI` in `Backend/.env` for MongoDB Atlas

### Frontend Issues

**API calls failing:**
- Ensure backend is running on port 5001
- Check `REACT_APP_API_BASE_URL` in `.env`
- Check browser console for CORS errors

---

## Additional Documentation

- [`API_DOCUMENTATION.md`](./API_DOCUMENTATION.md) - Complete API reference
- [`SCALING_GUIDE.md`](./SCALING_GUIDE.md) - Production scaling guide
- [`postman_collection.json`](./postman_collection.json) - Postman collection

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## License

This project is licensed under the ISC License.

---

## Author

Created as a full-stack project demonstration with authentication, dashboard, and CRUD operations.

---

## Acknowledgments

- React.js community
- Material-UI team
- MongoDB team
- Express.js community
- All open-source contributors

---

## Support

For issues, questions, or contributions, please open an issue on the GitHub repository.

---

****
