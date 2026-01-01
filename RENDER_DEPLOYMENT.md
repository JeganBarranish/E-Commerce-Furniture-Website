# Render Deployment Guide

This guide will help you deploy your Furnify application to Render.

## Prerequisites

1. GitHub account with your repository pushed
2. MongoDB Atlas account (free tier)
3. Render account (sign up at https://render.com)

## Step 1: Set Up MongoDB Atlas

1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up for a free account
3. Create a new cluster (free tier M0)
4. Create a database user:
   - Database Access → Add New Database User
   - Username: `furnify-user` (or your choice)
   - Password: Generate secure password (save it!)
   - Database User Privileges: Read and write to any database
5. Configure Network Access:
   - Network Access → Add IP Address
   - For demo: Click "Allow Access from Anywhere" (0.0.0.0/0)
   - Or add Render's IP ranges for production
6. Get Connection String:
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user password
   - Example: `mongodb+srv://furnify-user:yourpassword@cluster0.xxxxx.mongodb.net/furnify?retryWrites=true&w=majority`

## Step 2: Deploy Backend to Render

1. Go to https://render.com and sign in
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure the service:
   - **Name**: `furnify-backend` (or your choice)
   - **Region**: Choose closest to you
   - **Branch**: `main` (or your default branch)
   - **Root Directory**: `Backend`
   - **Runtime**: `Node`
   - **Build Command**: `npm install && npm rebuild bcrypt --build-from-source`
   - **Start Command**: `npm start`
   - **Instance Type**: Free (for demo)

5. Add Environment Variables:
   - Click "Advanced" → "Add Environment Variable"
   - Add these variables:
     ```
     PORT=5001
     MONGO_URI=<your-mongodb-atlas-connection-string>
     JWT_SECRET=<generate-a-random-secret-key>
     FRONTEND_URL=<will-add-after-frontend-deployment>
     ```
   - For `JWT_SECRET`, generate a random string (you can use: `openssl rand -hex 32`)

6. Click "Create Web Service"
7. Wait for deployment (first deployment takes 3-5 minutes)
8. Once deployed, copy your backend URL (e.g., `https://furnify-backend.onrender.com`)

## Step 3: Deploy Frontend to Render

1. In Render dashboard, click "New +" → "Static Site"
2. Connect your GitHub repository
3. Configure the static site:
   - **Name**: `furnify-frontend` (or your choice)
   - **Branch**: `main` (or your default branch)
   - **Root Directory**: (leave empty - frontend is at root)
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `build`

4. Add Environment Variable:
   - Click "Environment" tab
   - Add Environment Variable:
     ```
     REACT_APP_API_BASE_URL=<your-backend-url>
     ```
     Example: `REACT_APP_API_BASE_URL=https://furnify-backend.onrender.com`

5. Click "Create Static Site"
6. Wait for deployment (takes 2-3 minutes)
7. Copy your frontend URL (e.g., `https://furnify-frontend.onrender.com`)

## Step 4: Update Backend CORS

1. Go back to your Backend service in Render
2. Click "Environment"
3. Update `FRONTEND_URL` to your frontend URL:
   ```
   FRONTEND_URL=https://furnify-frontend.onrender.com
   ```
4. Click "Save Changes"
5. Render will automatically redeploy

## Step 5: Test Your Deployment

1. Visit your frontend URL: `https://furnify-frontend.onrender.com`
2. Try signing up a new user
3. Test login functionality
4. Test dashboard features

## Troubleshooting

### Backend Issues

**Service not starting:**
- Check logs in Render dashboard
- Verify all environment variables are set correctly
- Ensure MongoDB Atlas connection string is correct
- Check that MongoDB Atlas allows connections from Render IPs

**CORS errors:**
- Verify `FRONTEND_URL` environment variable matches your frontend URL exactly
- Make sure there are no trailing slashes
- Check browser console for exact CORS error message

**Database connection errors:**
- Verify MongoDB Atlas connection string is correct
- Check that password in connection string matches database user password
- Ensure network access is configured in MongoDB Atlas
- Try using IP whitelist instead of "Allow from anywhere"

### Frontend Issues

**API calls failing:**
- Verify `REACT_APP_API_BASE_URL` is set correctly in frontend environment variables
- Check browser console for errors
- Verify backend is running and accessible (check backend URL in browser)
- Make sure backend URL doesn't have trailing slash

**Build fails:**
- Check build logs in Render dashboard
- Ensure all dependencies are in package.json
- Try building locally first: `npm run build`

### Common Issues

**Services sleep after inactivity (Free tier):**
- Free tier services on Render sleep after 15 minutes of inactivity
- First request after sleep takes 30-60 seconds (cold start)
- This is normal for free tier
- Consider upgrading to paid tier for production

**Environment variables not working:**
- Make sure environment variable names are exactly correct
- For frontend: Must start with `REACT_APP_`
- Changes require redeployment
- Check that variables are set in correct service (backend vs frontend)

## Environment Variables Summary

### Backend Environment Variables:
```
PORT=5001
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/furnify
JWT_SECRET=your_random_secret_key_here
FRONTEND_URL=https://furnify-frontend.onrender.com
```

### Frontend Environment Variables:
```
REACT_APP_API_BASE_URL=https://furnify-backend.onrender.com
```

## URLs After Deployment

- Frontend: `https://furnify-frontend.onrender.com`
- Backend API: `https://furnify-backend.onrender.com`
- Health Check: `https://furnify-backend.onrender.com/health`

## Next Steps

- Set up custom domain (optional, requires paid plan)
- Enable monitoring and logging
- Set up automatic deployments from GitHub
- Configure database backups
- Add rate limiting for production
- Set up error tracking (Sentry)

