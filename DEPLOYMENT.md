# Deployment Guide for Miles Ka Safar

## Frontend (Vercel)
- The client is automatically built using `npm run build:client`
- Output directory: `client/dist`
- Environment variables: Add any API URLs in `client/.env.local`

## Backend (Render)
- Deploy the `server` folder separately
- Build command: `npm install`
- Start command: `node src/index.js`
- Environment variables needed:
  - MONGODB_URI
  - JWT_SECRET
  - PORT (optional, defaults to 5000)

## Setup Instructions

### For Vercel:
1. Connect your GitHub repo to Vercel
2. Select root directory as project root
3. Build command: `npm run build:client`
4. Output directory: `client/dist`

### For Render:
1. Create new Web Service
2. Connect GitHub repo
3. Set root directory: `server`
4. Build command: `npm install`
5. Start command: `node src/index.js`
6. Add environment variables
