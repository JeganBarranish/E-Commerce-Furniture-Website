# Environment Variables Setup Guide

This guide shows what environment variables you need to set for deployment on Render.

## Important: Render Deployment

For Render deployment, **DO NOT create .env files in your repository**. Instead, set environment variables directly in the Render dashboard for each service.

## Environment Variables Needed

### Backend Service (Render Web Service)

Set these in Render Dashboard → Backend Service → Environment:

```
PORT=5001
MONGO_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/furnify?retryWrites=true&w=majority
JWT_SECRET=your_random_secret_key_here
FRONTEND_URL=https://your-frontend-url.onrender.com
```

**How to set:**
1. Go to Render dashboard
2. Click on your Backend service
3. Go to "Environment" tab
4. Click "Add Environment Variable"
5. Add each variable one by one

**Values explanation:**
- `PORT`: Render sets this automatically, but you can specify 5001
- `MONGO_URI`: Your MongoDB Atlas connection string (replace username, password, and cluster URL)
- `JWT_SECRET`: Generate a random string (use: `openssl rand -hex 32` or any random string)
- `FRONTEND_URL`: Your frontend URL from Render (add this after frontend is deployed)

### Frontend Service (Render Static Site)

Set this in Render Dashboard → Frontend Service → Environment:

```
REACT_APP_API_BASE_URL=https://your-backend-url.onrender.com
```

**How to set:**
1. Go to Render dashboard
2. Click on your Frontend service
3. Go to "Environment" tab
4. Click "Add Environment Variable"
5. Add `REACT_APP_API_BASE_URL` with your backend URL

## Getting Your MongoDB Atlas Connection String

1. Go to MongoDB Atlas dashboard
2. Click "Connect" on your cluster
3. Choose "Connect your application"
4. Copy the connection string
5. Replace `<password>` with your database user password
6. Replace `<dbname>` with `furnify` (or your database name)

Example format:
```
mongodb+srv://furnify-user:YourPassword123@cluster0.xxxxx.mongodb.net/furnify?retryWrites=true&w=majority
```

## Generating JWT_SECRET

You can generate a secure random secret using:

**Mac/Linux:**
```bash
openssl rand -hex 32
```

**Or use any random string generator** - just make sure it's at least 32 characters long for security.

## Quick Checklist for Render Deployment

### Backend Environment Variables:
- [ ] `PORT` = 5001
- [ ] `MONGO_URI` = Your MongoDB Atlas connection string
- [ ] `JWT_SECRET` = Random secret key
- [ ] `FRONTEND_URL` = Your frontend URL (set after frontend deploys)

### Frontend Environment Variables:
- [ ] `REACT_APP_API_BASE_URL` = Your backend URL

## Security Notes

- **Never share your JWT_SECRET or MongoDB password**
- Use strong passwords for MongoDB Atlas database users
- Always set environment variables in Render dashboard, not in code files

